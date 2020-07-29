import React, { useEffect, useState } from 'react';
import { View, Alert, Text,} from 'react-native';

import style from './Style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import AccordionItems from '../../components/AccordionItems/Index';
import AccordionDelivery from '../../components/AccordionDelivery/Index';
import AccordionResume from '../../components/AccordionResume/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import { isSignedIn, getUserOnline } from '../../services/auth';
import BoxPayment from '../../components/BoxPayment/Index';
import ListAddress from '../../components/ListAddress/Index';
import IAddress from '../../interface/IAddress';
import IUsuario from '../../interface/IUsuario';
import api from '../../services/api';
import GifLoading from '../../components/GifLoading/Index';
import isOrderValid from '../../util/Order';
import ListStore from '../../components/ListStore/Index';

const Compra = ({ navigation, route }) => {
    const params = (route.params as any).purchase;
    const userState = useSelector((state: IStateRedux) => state.user);
    const [user, setUser] = useState({} as IUsuario);
    const [address, setAddress] = useState<IAddress>({} as IAddress);
    const [store, setStore] = useState<any>();

    const [payment, setPayment] = useState({

    })

    const [loadingInfo, isLoadingInfo] = useState(false);

    const [purchase, setPurchase] = useState({
        delivery: { },
        items: [ ],
        resume: { subtotal: 0, frete: 0, total: 0 },
    });
    
    useEffect(() => {
        async function checkUser() {
            if (!(await isSignedIn())) {
                Alert.alert('Atenção', 'Você precisa se autenticar para acessar essa seção');
                navigation.goBack();
                return;
            }
            const me = await getUserOnline();
            setUser(me);
        }
        checkUser();   
    }, [userState])

    useEffect(() => {
        setPurchase({
            delivery: params.entrega,
            items: params.items,
            resume: params.resumo,
        })
    }, [params]);

    async function handleConfirmClick() {
        if (purchase.items.length === 0) {
            Alert.alert("Hey", "Aidicone produtos ao seu carrinho antes de continuar")
            return;
        }

        const n_purchase = 
            purchase.delivery.code === 1 ?
            { ...purchase, delivery: { ...purchase.delivery, store } } 
            :
            { ...purchase };

        const order = {
            user,
            payment: {
                payment,
                address
            },
            purchase: n_purchase,
        };

        if (!isOrderValid(order)) {
            Alert.alert("Hey", 'Verifique se você preencheu a forma de pagamento e o endereço de entrega!')
            return;
        }
        
        navigation.navigate('ConfirmPurchase', {
            order
        })
    }

    useEffect(() => {
        async function loadFrete() {
            isLoadingInfo(true)
            try {
                const params = {
                    cep: address.cep
                }
                const response = await api.get('correios/frete', { params });
                const correios_services = response.data[0];
                correios_services.cep=address.cep;
                const nPurch = {
                    ...purchase,
                    delivery: correios_services,
                    resume: {
                        ...purchase.resume,
                        frete: correios_services.value,
                        total: purchase.resume.subtotal + correios_services.value
                    }
                }
                setPurchase(nPurch)
            } catch (err) {
                console.log('ERRO CALCULAR FRETE', err);
                Alert.alert('Falha ao carregar frete', err);
                return;
            }
            isLoadingInfo(false);
        };
        if (address.cep !== undefined && address.cep !== '' && purchase.delivery.code !== 1 && purchase.delivery.cep !== address.cep) {
            loadFrete();
        }
    }, [address])

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.header}>
                <HeaderStackMenu 
                    title="Sua compra" 
                />
            </View>

            <View style={style.main}>
                <View style={style.section}>
                    <BoxPayment onChangePayment={setPayment} user={user} />
                </View>

                <View style={style.section}>
                    <ListAddress 
                        selectedCep={purchase.delivery.cep}
                        onChangeAddress={setAddress} user={user} 
                    />
                </View>

                {
                purchase.delivery.code === 1 && 
                <View style={style.section}>
                    <ListStore onSelected={setStore} />
                </View>
                }


            {loadingInfo ? <GifLoading /> : 
                <>
                <View style={style.section}>
                    <AccordionItems value={purchase.resume.subtotal} items={purchase.items} />
                </View>

                <View style={style.section}>
                    <AccordionDelivery value={purchase.resume.frete} delivery={purchase.delivery} />
                </View>

                <View style={style.section}>
                    <AccordionResume value={purchase.resume.total} resume={purchase.resume} />
                </View>

                </>
            }

                <View style={style.section}>
                    <TouchableOpacity 
                        style={style.button}
                        onPress={() => handleConfirmClick()}
                    >
                        <Text style={style.btnText}>Revisão do pedido</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </ScrollView>
    )
}

export default Compra;
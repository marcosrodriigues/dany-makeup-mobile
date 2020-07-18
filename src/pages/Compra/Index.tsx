import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Alert,} from 'react-native';

import style from './Style';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import AccordionItems from '../../components/AccordionItems/Index';
import AccordionDelivery from '../../components/AccordionDelivery/Index';
import AccordionResume from '../../components/AccordionResume/Index';
import CheckUserOnline from '../../util/checkUser';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import { isSignedIn } from '../../services/auth';

const Compra = () => {
    const route = useRoute();
    const params = (route.params as any).purchase;
    const user = useSelector((state: IStateRedux) => state.user);
    const navigation = useNavigation();
    
    const [purchase, setPurchase] = useState({
        delivery: { },
        items: [ ],
        resume: { subtotal: 0, frete: 0, total: 0 },
    });
    
    useEffect(() => {
        async function checkUser() {
            if (!(await isSignedIn())) {
                Alert.alert('Atenção', 'Você precisa se autenticar para acessar essa seção');
                navigation.navigate('Carrinho');
                return;
            }
        }
        checkUser();   
    }, [user])

    useEffect(() => {
        setPurchase({
            delivery: params.entrega,
            items: params.items,
            resume: params.resumo,
        })
    }, [params]);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.header}>
                <HeaderStackMenu 
                    title="Sua compra" 
                    button={false}
                />
            </View>

            <View style={style.main}>
                <View style={style.section}>
                    <AccordionItems value={purchase.resume.subtotal} items={purchase.items} />
                </View>

                <View style={style.section}>
                    <AccordionDelivery value={purchase.resume.frete} delivery={purchase.delivery} />
                </View>

                <View style={style.section}>
                    <AccordionResume value={purchase.resume.total} resume={purchase.resume} />
                </View>

                <View style={style.section}>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default Compra;
import React, { useState, useEffect } from 'react';

import style from './Style';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Button,  } from 'react-native-paper';
import api from '../../services/api';
import BoxCreditCard from '../BoxCreditCard/Index';
import ICreditCard from '../../interface/ICreditCard';
import IUsuario from '../../interface/IUsuario';
import GifLoading from '../GifLoading/Index';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const BoxPayment = ({
    onChangePayment = (payment: any) => {},
    user = { } as IUsuario
}) => {
    const [loading, isLoading] = useState(false);
    const [selectedCreditCard, setSelectedCreditCard] = useState({} as ICreditCard);
    const [creditCards, setCreditCards] = useState([])
    const [boleto, setBoleto] = useState({
        name: '',
        cpf: '',
        birthday: '',
        phone: ''
    })

    const [payment, setPayment] = useState({
        id: 0,
        payment_method: 'credit_card',
        credit_card: {},
        boleto: {}
    })

    const navigation = useNavigation();

    useEffect(() => {
        if (user.id !== undefined)
        loadCreditCards();
    }, [user])

    async function loadCreditCards() {
        isLoading(true);
        try {
            const { data } = await api.get(`credit_card/user/${user.id}`);
            setCreditCards(data);
        } catch (err) {
            Alert.alert("Atenção!", 'Problema de conexão com o servidor');
            console.log('ERROR CREDIT CARD USER', err);
        }
        isLoading(false);
    }

    async function onGoBack() {
        navigation.navigate('MainCarrinho', {
            screen: 'Compra',
        });
        await loadCreditCards();
    }

    function handlePaymentMethod(payment_method: string) {
        setPayment({
            ...payment,
            payment_method,
        })
    }

    function handleAddCreditCard() {
        navigation.navigate('MainConta', {
            screen: 'CreditCard',
            params: {
                screen: 'AddCreditCard',
                params: {
                    onGoBack,
                }
            }
        })
    }

    useEffect(() => {
        if (selectedCreditCard.id) {
            setPayment({
                ...payment,
                credit_card: selectedCreditCard
            })
        }
    }, [selectedCreditCard])

    useEffect(() => {
        setPayment({
            ...payment, 
            boleto
        })
    }, [boleto])

    useEffect(() => {
        onChangePayment(payment);
    }, [payment])

    return (
        <View style={style.box}>
            <View style={style.header}>
                <Text style={style.title}>Pagamento</Text>
                <Text style={style.subtitle}>Escolha o cartão de pagamento</Text>
            </View>  

            {/* <View style={style.switch}>
                <Button 
                    style={[style.btnSwitch, payment.payment_method === 'credit_card' && style.switchActive]} 
                    onPress={() => handlePaymentMethod('credit_card')}
                >
                    <Text 
                        style={[style.switchText, payment.payment_method === 'credit_card' && style.switchActiveText]} 
                    >Cartão de crédito</Text>
                </Button>
                <Button 
                    style={[style.btnSwitch, payment.payment_method === 'boleto' && style.switchActive]} 
                    onPress={() => handlePaymentMethod('boleto')}
                >
                    <Text 
                        style={[style.switchText, payment.payment_method === 'boleto' && style.switchActiveText]} 
                    >Boleto</Text>
                </Button>
            </View> */}
        
        {
        payment.payment_method === 'credit_card' ? 
            <View style={style.creditCardForm}>
                {loading ? <GifLoading /> : 
                    creditCards.length > 0 ?
                    <View style={style.creditCard}> 
                        {creditCards.map((cc: ICreditCard) => {
                            return (
                            <TouchableOpacity
                                key={cc.id}
                                style={selectedCreditCard.id === cc.id ? style.selectedCard : {}}
                            >
                                <BoxCreditCard 
                                    credit_card={cc} 
                                    onClick={() => setSelectedCreditCard(cc)} 
                                    onRemove={() => loadCreditCards()}
                                />
                            </TouchableOpacity>
                        )})}
                    </View>
                    :
                    <Text style={style.noInfo}>Cadastre seus cartões em Perfil > Cartões</Text>
                }

                {/* <TouchableOpacity style={style.button}
                    onPress={handleAddCreditCard}
                >
                    <View style={style.vIcon}>
                        <FontAwesome
                            name="plus" 
                            size={16}
                            style={style.icon}
                        ></FontAwesome>
                    </View>
                    <View style={style.vText}>
                        <Text style={style.textButton}>novo cartão de crédito</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        :
            <View style={style.boletoForm}>
                <View style={style.boleto}>
                    <View style={style.row}>    
                        <Text style={style.label}>Nome: </Text>
                        <TextInput 
                            style={style.input} 
                            placeholder="Nome emitido no boleto" placeholderTextColor="#d2ae6c"
                            value={boleto.name}
                            onChangeText={(name) => setBoleto({...boleto, name})}
                            />
                    </View>
                    <View style={style.row}>    
                        <Text style={style.label}>CPF: </Text>
                        <TextInput 
                            style={style.input} 
                            placeholder="CPF" placeholderTextColor="#d2ae6c" 
                            value={boleto.cpf}
                            onChangeText={(cpf) => setBoleto({...boleto, cpf})}
                        />
                    </View>
                    <View style={style.row}>    
                        <Text style={style.label}>Nascimento: </Text>
                        <TextInput 
                            style={style.input} 
                            placeholder="DD/MM/YYYY" placeholderTextColor="#d2ae6c" 
                            value={boleto.birthday}
                            onChangeText={(birthday) => setBoleto({...boleto, birthday})}
                        />
                    </View>
                    <View style={style.row}>    
                        <Text style={style.label}>Celular: </Text>
                        <TextInput 
                            style={style.input} 
                            placeholder="(99) 99999-9999" placeholderTextColor="#d2ae6c" 
                            value={boleto.phone}
                            onChangeText={(phone) => setBoleto({...boleto, phone})}
                        />
                    </View>
                </View>
            </View>
        }
            
        </View>
    )
}

export default BoxPayment
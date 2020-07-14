import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInputMask } from 'react-native-masked-text';
import GifLoading from '../../components/GifLoading/Index';
import ICreditCard from '../../interface/ICreditCard';
import CustomCreditCard from '../../components/CustomCreditCard/Index';

import PagarMe from '../../services/pagarme';


const AddCreditCard = ({ navigation, route }) => {
    const [loading, isLoading] = useState(false);
    const [creditCard, setCreditCard] = useState<ICreditCard>({} as ICreditCard);

    useEffect(() => {
        if (route.params?.creditCard) {
            const current = route.params.creditCard;
            setCreditCard(current);
            console.log(current)
        }
    }, [route.params?.creditCard])

    function handleAdd() {
        if (PagarMe.isCreditCardValid(creditCard)) {
            const hash = PagarMe.generateHash(creditCard);
            console.log('FINAL_HASH', hash)
        }

        Alert.alert('Ops', 'Verifique os dados do seu cartão')
        //navigation.navigate('CreditCard', { creditCard })
    }

    function handleCreditCard(name: string, value: string) {
        setCreditCard({
            ...creditCard,
            [name]: value
        })
    }

    return (
        <>
        <ScrollView contentContainerStyle={style.container}>
            {loading ? <View style={style.loading}><GifLoading /></View>  : <></>}
            <HeaderStackMenu title="Novo cartão" />
            <CustomCreditCard
                credit_card={creditCard}
            />
            <View style={style.form}>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Meu cartão de crédito"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={creditCard.name}
                        onChangeText={text => handleCreditCard('name', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Nome no cartão"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={creditCard.holder_name}
                        onChangeText={text => handleCreditCard('holder_name', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInputMask
                        placeholder="Número do cartão"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        type="credit-card"
                        value={creditCard.card_number}
                        onChangeText={text => handleCreditCard('card_number', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInputMask
                        type="custom"
                        options={{
                            mask: '99/99'
                        }}
                        placeholder="Data de validade"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={creditCard.expiration_date}
                        onChangeText={text => handleCreditCard('expiration_date', text)}
                    />
                </View>
                <View style={style.fields}>
                <TextInputMask
                        type="only-numbers"
                        maxLength={3}
                        
                        placeholder="Codigo verificador"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={creditCard.card_cvv}
                        onChangeText={text => handleCreditCard('card_cvv', text)}
                    />
                </View>
                
                <TouchableOpacity style={style.button} onPress={handleAdd}>
                    <Text style={style.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}

export default AddCreditCard
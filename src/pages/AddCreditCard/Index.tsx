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
import api from '../../services/api';
import IStateRedux from '../../interface/IStateRedux';
import { useSelector } from 'react-redux';


const AddCreditCard = ({ navigation, route }) => {
    const [loading, isLoading] = useState(false);
    const [creditCard, setCreditCard] = useState<ICreditCard>({} as ICreditCard);
    const user = useSelector((state: IStateRedux) => state.user);

    useEffect(() => {
        if (route.params?.creditcard) {
            const current = route.params.creditcard;
            setCreditCard(current);
        }
    }, [route.params?.creditCard])

    async function handleAdd() {
        if (!PagarMe.isCreditCardValid(creditCard.card_number)) {
            Alert.alert('Atenção', 'Número do cartão de crédito inválido. Tente novamente');
            return;
        }
        
        isLoading(true);
        try {
            if (!creditCard.id)
                await api.post('credit_card/user', { credit_card: creditCard, user_id: user.id })
                
            route.params.onGoBack();
            navigation.goBack();
        } catch (err) {
            Alert.alert('Hey', 'Ocorreu um erro tentando salvar seus dados. Tente novamente');
            console.log('ERR ADD CREDIT CARD', err)
        }
        isLoading(false);
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
            <HeaderStackMenu title="Dados do cartão" />
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
                    <TextInput
                        placeholder="Nome no cartão"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={creditCard.holder_name}
                        onChangeText={text => handleCreditCard('holder_name', text)}
                    />
                </View>
                <View style={style.fieldsInline}>
                    <TextInputMask
                        type="custom"
                        options={{
                            mask: '99/99',
                        }}
                        keyboardType="numeric"
                        placeholder="Data de validade"
                        placeholderTextColor="#d2ae6c"
                        style={style.fieldInline}
                        value={creditCard.expiration_date}
                        onChangeText={text => handleCreditCard('expiration_date', text)}
                    />

                    <TextInputMask
                        type="only-numbers"
                        maxLength={4}
                        placeholder="Codigo verificador"
                        placeholderTextColor="#d2ae6c"
                        style={style.fieldInline}
                        value={creditCard.card_cvv}
                        onChangeText={text => handleCreditCard('card_cvv', text)}
                    />
                </View>
                {creditCard.id === undefined &&
                    <TouchableOpacity 
                        style={style.button} 
                        onPress={handleAdd}
                        disabled={!(creditCard.id === undefined)}
                    >
                        <Text style={style.textButton}>Salvar</Text>
                    </TouchableOpacity>
                }
            </View>
        </ScrollView>
        </>
    )
}

export default AddCreditCard
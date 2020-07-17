import React, { useState, useEffect } from 'react'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import GifLoading from '../../components/GifLoading/Index';
import api from '../../services/api';
import { Alert, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from './Style'
import ICreditCard from '../../interface/ICreditCard';
import BoxCreditCard from '../../components/BoxCreditCard/Index';

const CreditCard = ({ navigation, route }) => {
    const user = useSelector((state: IStateRedux) => state.user);
    const [loading, isLoading] = useState(false);
    const [creditCards, setCreditCards] = useState<ICreditCard[]>([]);

    useEffect(() => {
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

    function handleAddCreditCard() {
        navigation.navigate('AddCreditCard', {
            onGoBack: loadCreditCards
        })
    }

    function handleClickCreditCard(creditcard: any) {
        navigation.navigate('AddCreditCard', { 
            creditcard
         })
    }

    async function handleRemoveCreditCard(creditcard: any) {
        try {
            isLoading(true);
            await api.delete(`credit_card/${creditcard.id}`);
            await loadCreditCards();
        } catch (err) {
            Alert.alert("Hey", "Ocorreu um erro ao deletar seu cartão");
            console.log('ERR REMOVE CREDITCARD', creditcard, err);
        }

        isLoading(false);
    }

    return (
        <View style={style.container}>
            <HeaderStackMenu title={"Cartões de crédito"} />
            <ScrollView contentContainerStyle={style.scrollView}>
            {
                loading ? <GifLoading /> : 
                creditCards.length > 0 ?
                creditCards.map(cc => (
                        <BoxCreditCard 
                            key={cc.id}
                            credit_card={cc}
                            onClick={handleClickCreditCard}
                            onRemove={handleRemoveCreditCard}
                        />
                    ))
                :
                <View style={style.card}>
                    <Text style={style.noAddressText}>
                        Seus cartões aparecerão aqui!
                    </Text>
                </View>
            }    
            </ScrollView>
            <TouchableOpacity style={style.button}
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
            </TouchableOpacity>
        </View>
    )
}

export default CreditCard
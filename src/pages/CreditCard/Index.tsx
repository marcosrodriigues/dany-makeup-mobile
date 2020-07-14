import React, { useState, useEffect } from 'react'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import GifLoading from '../../components/GifLoading/Index';
import api from '../../services/api';
import { Alert, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BoxAddress from '../../components/BoxAddress/Index';
import style from './Style'
import ICreditCard from '../../interface/ICreditCard';

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
            const { data } = await api.get(`creditcard/user/${user.id}`);
            setCreditCards(data);
            isLoading(false);
        } catch (err) {
            Alert.alert("Atenção!", 'Problema de conexão com o servidor');
            console.log('ERROR CREDIT CARD USER', err);
            navigation.goBack();
        }
    }

    function handleAddCreditCard() {
        navigation.navigate('AddCreditCard')
    }

    useEffect(() => {
        async function handleParamCreditCard() {
            if (route.params?.creditCard) {
                const cc = route.params.creditCard;

                try {
                    isLoading(true);

                    if (cc.id === undefined)
                        await api.post('creditcard/user', { credit_card: cc, user_id: user.id })
                    else
                        await api.put('creditcard/user', { credit_card: cc })

                    const response = await api.get(`creditcard/user/${user.id}`);
                    const updated_creditcards = response.data;
                    setCreditCards(updated_creditcards);
                    isLoading(false);
                } catch (err) {
                    Alert.alert('Hey', 'Aconteceu algum problema com o seu cadastro. Tente novamente');
                    console.log('ERR ADD CREDIT CARD', err)
                }
                
            }
        }

        handleParamCreditCard();
    }, [route.params?.creditCard])

    function handleClickAddress(creditcard: any) {
        navigation.navigate('AddCreditCard', { creditcard })
    }

    async function handleRemoveAddress(creditcard: any) {
        try {
            isLoading(true);
            await api.delete(`creditcard/${creditcard.id}`);
            loadCreditCards();
        } catch (err) {
            Alert.alert("Hey", "Ocorreu um erro ao deletar seu cartão");
            console.log('ERR REMOVE CREDITCARD', creditcard, err);
        }
    }

    return (
        <View style={style.container}>
            <HeaderStackMenu title={"Cartões de crédito"} />
            <ScrollView contentContainerStyle={style.scrollView}>
            {
                loading ? <GifLoading /> : 
                creditCards.length > 0 ?
                creditCards.map(cc => (
                        <BoxAddress 
                            key={cc.id}
                            address={cc}
                            onClick={handleClickAddress}
                            onRemove={handleRemoveAddress}
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
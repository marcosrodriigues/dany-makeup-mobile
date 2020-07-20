import React, { useState, useEffect } from 'react'

import style from './Style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import GifLoading from '../../components/GifLoading/Index';
import api from '../../services/api';
import { Alert, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IAddress from '../../interface/IAddress';
import BoxAddress from '../../components/BoxAddress/Index';

const Enderecos = ({ navigation, route }) => {
    const user = useSelector((state: IStateRedux) => state.user);
    const [loading, isLoading] = useState(false);
    const [address, setAddress] = useState<IAddress[]>([]);

    useEffect(() => {
        loadAddress();
    }, [user])

    async function loadAddress() {
        isLoading(true);
        try {
            const { data } = await api.get(`address/user/${user.id}`);
            setAddress(data);
        } catch (err) {
            Alert.alert("Atenção!", 'Problema de conexão com o servidor');
            console.log('ERROR ADDRESS USER', err);
            navigation.goBack();
        }
        isLoading(false);
    }

    function handleAddAddress() {
        navigation.navigate('AddEndereco', {
            onGoBack: loadAddress
        })
    }

    function handleClickAddress(address: IAddress) {
        navigation.navigate('AddEndereco', { 
            address, 
            onGoBack: loadAddress
        })
    }

    async function handleRemoveAddress(address: IAddress) {
        try {
            isLoading(true);
            await api.delete(`address/${address.id}`);
            loadAddress();
        } catch (err) {
            Alert.alert("Hey", "Ocorreu um erro ao deletar seu endereço");
            console.log('ERR REMOVE ADDRESS', address, err);
        }
    }

    return (
        <View style={style.container}>
            <HeaderStackMenu title={"Enderecos"} />
            <ScrollView contentContainerStyle={style.scrollView}>
            {
                loading ? <GifLoading /> : 
                address.length > 0 ?
                    address.map(add => (
                        <BoxAddress 
                            key={add.id}
                            address={add}
                            onClick={handleClickAddress}
                            onRemove={handleRemoveAddress}
                        />
                    ))
                :
                <View style={style.card}>
                    <Text style={style.noAddressText}>
                        Seus endereços aparecerão aqui!
                    </Text>
                </View>
            }    
            </ScrollView>
            <TouchableOpacity style={style.button}
                onPress={handleAddAddress}
            >
                <View style={style.vIcon}>
                    <FontAwesome
                        name="plus" 
                        size={16}
                        style={style.icon}
                    ></FontAwesome>
                </View>
                <View style={style.vText}>
                    <Text style={style.textButton}>novo endereco</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Enderecos
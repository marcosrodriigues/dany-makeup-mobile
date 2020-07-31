import React, { useState, useEffect } from 'react';
import BoxAddress from '../BoxAddress/Index';
import IAddress from '../../interface/IAddress';
import IUsuario from '../../interface/IUsuario';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';
import { View, Text } from 'react-native';

import style from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListAddress = ({
    onChangeAddress = (address: any) => {},
    user = {} as IUsuario,
    selectedCep = ''
}) => {

    const [loading, isLoading] = useState(false);
    const [address, setAddress] = useState<IAddress[]>([]);
    const [selected, setSelected] = useState<IAddress>({} as IAddress);

    const navigation = useNavigation();

    useEffect(() => {
        if (user.id !== undefined)
            loadAddress();
    }, [user])

    async function loadAddress() {
        isLoading(true);
        try {
            const { data } = await api.get(`address/user/${user.id}`);
            setAddress(data);
            isLoading(false);
        } catch (err) {
            console.log('ERROR ADDRESS USER', err);
        }
        isLoading(false);
    }

    function onClickAddress(address: any) {
        setSelected(address);
    }
    
    useEffect(() => {
        onChangeAddress(selected)
    }, [selected])

    useEffect(() => {
        address.map(add => {
            if (add.cep === selectedCep)
                setSelected(add);
        })
    }, [selectedCep, address])

    function handleAddAddress() {
        navigation.navigate('MainConta', {
            screen: 'Enderecos',
            params: {
                screen: 'AddEndereco',
                params: {
                    onGoBack,
                }
            }
        })
    }

    async function onGoBack() {
        navigation.navigate('MainCarrinho', {
            screen: 'Compra',
        });
        await loadAddress();
    }

    return (
        loading ? <GifLoading /> :
        <View style={style.addressList}>
            <Text style={style.header}>Endereço de cobrança</Text>
            <Text style={style.subtitle}>Escolha o endereço da cobrança</Text>
            {
            address.length > 0 ?
                address.map(add => {
                    return (
                        <View style={
                            selected.id === add.id ? style.selected : {}
                        }
                            key={add.id}    
                        >
                            <BoxAddress address={add} onClick={(add) => onClickAddress(add)} />
                        </View>
                    )
                })
            :
            <Text style={style.noInfo}>Cadastre seus endereços em Perfil > Endereços</Text>
            }

            {/* <TouchableOpacity style={style.button}
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
                    <Text style={style.textButton}>novo endereço</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

export default ListAddress;
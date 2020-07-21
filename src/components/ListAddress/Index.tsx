import React, { useState, useEffect } from 'react';
import BoxAddress from '../BoxAddress/Index';
import IAddress from '../../interface/IAddress';
import IUsuario from '../../interface/IUsuario';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';
import { View, Text } from 'react-native';

import style from './Style';

const ListAddress = ({
    onChangeAddress = (address: any) => {},
    user = {} as IUsuario,
    selectedCep = ''
}) => {

    const [loading, isLoading] = useState(false);
    const [address, setAddress] = useState<IAddress[]>([]);
    const [selected, setSelected] = useState<IAddress>({} as IAddress);

    useEffect(() => {
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

        if (user.id !== undefined)
            loadAddress();
    }, [user])

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

    return (
        loading ? <GifLoading /> :
        <View style={style.addressList}>
            <Text style={style.header}>Endereço de cobrança</Text>
            <Text style={style.subtitle}>Escolha o endereço da cobrança</Text>
            {address.map(add => {
                return (
                    <View style={
                        selected.id === add.id ? style.selected : {}
                    }
                        key={add.id}    
                    >
                        <BoxAddress address={add} onClick={(add) => onClickAddress(add)} />
                    </View>
                )
            })}
        </View>
    )
}

export default ListAddress;
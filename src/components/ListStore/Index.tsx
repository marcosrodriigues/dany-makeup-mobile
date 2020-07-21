import React, { useState, useEffect } from 'react';
import GifLoading from '../GifLoading/Index';

import style from './Style';
import { View, Text, Alert } from 'react-native';
import BoxStore from '../BoxStore/Index';
import api from '../../services/api';

const ListStore = ({
    onSelected = (store:any) => {}
}) => {
    const [loading, isLoading] = useState(false);
    const [stores, setStores] = useState([]);
    const [selected, setSelected] = useState<any>({});

    useEffect(() => {
        async function loadStores() {
            isLoading(true);
            try {
                const { data } = await api.get('mobile/stores');
                setStores(data);
            } catch (err) {
                Alert.alert('Hey', 'Ocorreu um erro ao carregar as lojas pra retirar o seu produto.\n' + err);
                console.log(err);
            }
            isLoading(false);
        }

        loadStores();
    }, [])

    function onClickStore(store: any) {
        setSelected(store);
    }

    useEffect(() => {
        onSelected(selected);
    }, [selected])

    return (
        loading ? <GifLoading /> :
        <View style={style.stores}>
            <Text style={style.header}>Retirada na loja</Text>
            <Text style={style.subtitle}>Selecione a loja que você vai retirar seu pedido.</Text>

            {stores.length > 0 &&
                stores.map(store => {
                    return (
                        <View style={
                            selected.id === store.id ? style.selected : { }
                        }
                            key={store.id}    
                        >
                            <BoxStore store={store} onClick={(store) => onClickStore(store)} />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default ListStore;
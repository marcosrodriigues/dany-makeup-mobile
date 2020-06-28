import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import style from './Style';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import BoxFrete from '../BoxFrete/Index';
import BoxResume from '../BoxResume/Index';
import ItemCart from '../ItemCart/Index';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const BoxCarrinho = () => {
    const [carrinho, setCarrinho] = useState([] as any);
    const [frete, setFrete] = useState({} as any);
    const [cep, setCep] = useState("")

    const redux_items = useSelector((state: any) => state.items);
    const redux_user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const [resume, setResume] = useState({
        subtotal: 0,
        frete: 0,
        total: 0
    })
    
    const navigator = useNavigation();
    
    useEffect(() => {
        setCarrinho(redux_items);
    }, [redux_items])

    useEffect(() => {
        if (redux_user?.address?.cep !== undefined )
            setCep(redux_user.address.cep);
    }, [])

    useEffect(() => {
        loadResume();
    }, [frete])

    useEffect(() => {
        loadResume();
    }, [carrinho])

    function loadResume() {
        let sum = 0;
        carrinho.map((cart: any) =>  {
            sum = sum + Number(cart.value * cart.quantity);
        });

        let sub = sum || 0
        let fValue = frete.value || 0
        let tot = sub + fValue || 0

        setResume({ subtotal: sub, frete: fValue, total: tot });
    }

    function updateCarrinho(item_id = 0, field = '', value = 0) {
        const novos = carrinho.map((c:any) => {
            if (c.id === item_id) {
                return { ...c, [field] : value}
            }
            return c;
        });

        dispatch({ type: 'ALTER_ITEMS', items: novos });
        setCarrinho(novos);
    }

    function handleFreteSelected(option: any) {
        setFrete(option);
    }

    function handleContinueToBuy(event: any) {
        Alert.alert('Clicou em continuar')
    }

    function handleChangeAmount(cart: any, value: number) {
        if (value !== 0) {
            updateCarrinho(cart.id, 'quantity', value);
            return;
        }

        Alert.alert(
            `Atenção`, 
            `Você vai remover ${cart.name} do seu carrinho`,[
                {
                    text: "Ok",
                    onPress: () => {
                        setCarrinho(
                            carrinho.filter((item: any) => item.id !== cart.id )
                        )
                        dispatch({ type: 'ALTER_ITEMS', items: carrinho.filter((item: any) => item.id !== cart.id ) });
                    }, 
                },
                {
                    text: "Cancelar",
                    onPress: () => {
                        updateCarrinho(cart.id, 'quantity', 1);
                    }
                }
            ])
    }

    function handleAddProducts() {
        navigator.navigate('Buscar')
    }

    function handleClickCalculateFrete(cep: string) {
        setCep(cep);
        setFrete({})
    }

    return (
        <View style={style.boxCarrinho}>
            <View style={style.boxTitle}>
                <Text style={style.title}>
                    Seu carrinho
                </Text>
            </View>
            <ScrollView contentContainerStyle={style.cartBox}>
                {
                    carrinho.length > 0 ?
                        carrinho.map((cart: any, index: number) => (
                            <ItemCart 
                                key={index}
                                value={cart}
                                onChangeAmount={value => handleChangeAmount(cart, value)}
                            />
                        ))
                    :
                        <View style={style.box}>
                            <Text style={style.empty}>Você não tem produtos adicionados no carrinho.</Text>
                            <View style={style.boxW60}>
                                <TouchableHighlight
                                    onPress={handleAddProducts}
                                style={style.button}>
                                    <Text style={style.textButton}>+ novos produtos</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                }
            </ScrollView>

            <View style={style.section}>
                <View style={style.boxTitle}>
                    <Text style={style.title}>
                        Frete
                    </Text>
                </View>
                
                <BoxFrete
                    initialCep={cep}
                    onClickCalculateButton={handleClickCalculateFrete}
                    onSelected={handleFreteSelected}
                />
            </View>

            <View style={style.section}>
                <View style={style.boxTitle}>
                    <Text style={style.title}>
                        Resumo
                    </Text>
                </View>

                <BoxResume
                    subtotal={resume.subtotal}
                    frete={resume.frete}
                    total={resume.total}
                />
            </View>

            <View style={style.section}>
                <View style={style.boxTitle}>
                    <TouchableHighlight
                        style={style.button}
                        onPress={handleContinueToBuy}
                    >
                        <Text style={style.textButton}>Avançar na compra</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default BoxCarrinho;

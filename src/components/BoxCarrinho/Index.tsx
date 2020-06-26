import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';

import style from './Style';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import NumberFormat, { CustomNumericInput } from '../../util/NumberFormat';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

const BoxCarrinho = () => {
    const [carrinho, setCarrinho] = useState([] as any);
    const [cep, setCep] = useState("")

    useEffect(() => {
        setCarrinho([
            {
                id: 1,
                image: 'http://192.168.2.14:3333/uploads/6d6a686291b3cd36_1592436812608_natura.jpeg',
                name: 'Produto 1',
                quantity: 3,
                value: 28
            },
            {
                id: 2,
                image: 'http://192.168.2.14:3333/uploads/6d6a686291b3cd36_1592436812608_natura.jpeg',
                name: 'Produto 2',
                quantity: 3,
                value: 28
            },
            {
                id: 3,
                image: 'http://192.168.2.14:3333/uploads/6d6a686291b3cd36_1592436812608_natura.jpeg',
                name: 'Produto 3',
                quantity: 3,
                value: 28
            },
        ])
    }, [])

    function handleChangeNumeric(value = 0, index = 0, field = '') {
        const novos = carrinho.map((c:{}, i: number) => {
            if (i === index) {
                return { ...c, [field] : value}
            }
            return c;
        });

        setCarrinho(novos);
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
                    carrinho.length > 0 &&
                    carrinho.map((cart: any, index: number) => (
                        <View key={index} style={style.productBox}>
                            <View style={style.boxImage}>
                                <Image source={{ uri: cart.image }} style={style.image} />
                            </View>
                            <View style={style.boxInfo}>
                                <Text style={style.infoName}>{cart.name}</Text>
                                <View style={style.row}>
                                    <Text style={style.text}>unidade: </Text>
                                    <NumberFormat
                                        style={style.value}
                                        value={cart.value}
                                    />
                                </View>
                                <View style={style.row}>
                                    <Text style={style.text}>quantidade: </Text>
                                    <CustomNumericInput
                                        value={cart.quantity}
                                        onChange={value => handleChangeNumeric(value, index, 'quantity')}
                                    />
                                </View>
                                <View style={style.row}>
                                    <Text style={style.text}>subtotal: </Text>
                                    <NumberFormat
                                        style={style.value}
                                        value={Number(cart.value * cart.quantity)}
                                    />
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>

            <View style={style.section}>
                <View style={style.boxTitle}>
                    <Text style={style.title}>
                        Frete
                    </Text>
                </View>
                <View style={style.infoCepFrete}>
                    <Text style={style.textCep}>Digite seu CEP para calcular o valor do frete</Text>

                    <View style={style.fieldWithButton}>
                        <View style={style.fwbField}>
                            <TextInputMask
                                keyboardType={"numeric"}
                                type="custom"
                                options={
                                    {
                                        mask: '99999-999'
                                    }
                                }
                                style={style.cepField}
                                value={cep}
                                onChangeText={setCep}
                            />
                        </View>
                        <View style={style.fwbBtn}>
                            <TouchableOpacity containerStyle={style.btn} onPress={ () => alert('buscou o cep ' + cep) }>
                                <MaterialCommunityIcons 
                                    name={"truck-fast"} 
                                    size={42} 
                                    style={style.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.section}>
                <View style={style.boxTitle}>
                    <Text style={style.title}>
                        Resumo
                    </Text>
                </View>
                <View style={style.box}>
                    <View style={style.row}>
                        <Text style={style.text}>Digite seu CEP para calcular o valor do frete.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BoxCarrinho;

import React, { useState, useEffect } from 'react';

import style from './Style'
import { TextInputMask } from 'react-native-masked-text';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';
import ButtonFrete from './Button';
import GifLoading from '../GifLoading/Index';


const BoxFrete = ({ 
        initialCep = "", 
        onClickCalculateButton = (cep: string) => {},
        onSelected = (selected: any) => {}
    }) => {
    const [loading, isLoading] = useState(false);
    const [cep, setCep] = useState("");
    const [optionSelected, setOptionSelected] = useState(0);
    const [options, setOptions] = useState<any[]>([{
        code: 1,
        name: 'RETIRAR EM MÃOS',
        value: 0,
        deadline: 0
    }])

    useEffect(() => {
        setCep(initialCep);
    }, [initialCep])

    function handleButtonClick() {
        setOptionSelected(0);
        setOptions([]);
        loadOptions();
    }

    async function loadOptions() {
        if (cep === "") return;

        const params = { cep };
        const opt = [options[0]];

        isLoading(true);
        try {
            onClickCalculateButton(cep);
            const response = await api.get('correios/frete', { params });
            const correios_services = response.data;
            correios_services.map((serv: any) => {
                opt.push(serv);
            });
        } catch (err) {
            console.log('ERRO CALCULAR FRETE', err);
            Alert.alert('Falha ao carregar frete', err);
            return;
        }
        setOptions(opt)
        isLoading(false);
    }

    function handleFreteSelected(option: any) {
        setOptionSelected(option.code);
        onSelected(option);
    }

    return (
        <View style={style.box}>
            <Text style={style.title}>Digite seu CEP para calcular o valor do frete</Text>

            <View style={[style.row, style.center]}>
                <View style={style.vField}>
                    <TextInputMask
                        placeholder={"Digite o seu cep"}
                        placeholderTextColor={"#d2ae6c"}
                        keyboardType={"numeric"}
                        type="custom"
                        options={
                            {
                                mask: '99999-999'
                            }
                        }
                        style={style.field}
                        value={cep}
                        onChangeText={(text) => setCep(text)}
                    />
                </View>
                <View style={style.vButton}>
                    <TouchableOpacity containerStyle={style.btn} onPress={handleButtonClick}>
                        <MaterialCommunityIcons 
                            name={"truck-fast"} 
                            size={42} 
                            style={style.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            { 
            loading ? <GifLoading /> :
            options.length > 0 &&
                <View style={[style.options, style.center]}>
                    <Text style={style.title}>Escolha a melhor opção</Text>
                { options.map(opt => (
                    <ButtonFrete 
                        key={opt.code}
                        opt={opt}
                        selected={optionSelected}
                        onSelected={handleFreteSelected}
                    />
                ))}   
            </View>
            }
        </View>
    )
}

export default BoxFrete;
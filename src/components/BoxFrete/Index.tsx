import React, { useState, useEffect } from 'react';

import style from './Style'
import { TextInputMask } from 'react-native-masked-text';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper'
import NumberFormat from '../../util/NumberFormat';
import api from '../../services/api';


const BoxFrete = ({ 
        initialCep = "", 
        onClickCalculateButton = (cep: string) => {},
        onSelected = (selected: any) => {}
    }) => {
    const [cep, setCep] = useState("");
    const [optionSelected, setOptionSelected] = useState(0);
    const [options, setOptions] = useState<any[]>([])

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

        try {
            onClickCalculateButton(cep);
            const response = await api.get('correios/frete', { params });
            setOptions(response.data)
        } catch (err) {
            console.log('ERRO CALCULAR FRETE', err);
            Alert.alert('Falha ao carregar frete', err);
        }
    }

    function handleCheckButtonSelected(option: any) {
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

            { options.length > 0 &&
                <View style={[style.options, style.center]}>
                    <Text style={style.title}>Escolha a melhor opção</Text>
                { options.map(opt => (
                    <TouchableOpacity
                        style={style.optButton}
                        key={opt.code}
                        onPress={() => handleCheckButtonSelected(opt)}
                    >
                        <View style={style.optRadioBox}>
                            <RadioButton 
                                value={String(opt.code)}
                                color={"#d2ae6c"}
                                uncheckedColor={"#d2ae6c"}
                                status={optionSelected === opt.code ? "checked" : "unchecked"}
                                
                            />  
                        </View>
                        <View style={style.optInfoBox}>
                            <View style={style.optInfo}>
                                <Text style={style.infoTitle}>TIPO DE ENCOMENDA</Text>
                                <Text style={style.infoValue}>{opt.name}</Text>
                            </View>
                            <View style={style.optInfo}>
                                <Text style={style.infoTitle}>VALOR</Text>
                                <NumberFormat 
                                    value={opt.value}
                                    style={style.infoValue}
                                />
                                
                            </View>
                            <View style={style.optInfo}>
                                <Text style={style.infoTitle}>ENTREGA EM ATÉ: </Text>
                                <Text style={style.infoValue}>{opt.deadline} dias úteis</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}   
            </View>
            }
        </View>
    )
}

export default BoxFrete;
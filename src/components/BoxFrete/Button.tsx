import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import style from './Style'
import NumberFormat from '../../util/NumberFormat';

const ButtonFrete = ({
    selected = 1,
    opt = { code: 1, name: 'RETIRAR NA LOJA', value: 0, deadline: 0},
    onSelected = (opt: any) => {}
}) => {
    return (
        <TouchableOpacity
                style={style.optButton}
                onPress={() => onSelected(opt)}
            >
                <View style={style.optRadioBox}>
                    <RadioButton 
                        value={String(opt.code)}
                        color={"#d2ae6c"}
                        uncheckedColor={"#d2ae6c"}
                        status={selected === opt.code ? "checked" : "unchecked"}
                        
                    />  
                </View>
                {
                opt.code !== 1 ?
                    opt.value !== 0 &&
                <View style={style.optInfoBox}>
                    <View style={style.optInfo}>
                        <Text style={style.infoTitle}>ENCOMENDA</Text>
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
                :
                <View style={style.optInfoBox}>
                    <View style={style.optInfo}>
                        <Text style={style.infoTitle}>RETIRAR NA LOJA</Text>
                    </View>
                    <View style={style.optInfo}>
                        <Text style={style.infoValue}>Retire seu pedido em alguma loja da DanyMakeup</Text>
                    </View>
                </View>
                }
        </TouchableOpacity>
    )
}

export default ButtonFrete;
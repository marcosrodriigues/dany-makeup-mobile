import React from 'react';
import { default as NumFormat } from 'react-number-format';
import { Text, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';

interface Props {
    value: number,
    format?: string,
    prefix?: string,
    thousandSeparator?: boolean,
    style: {}
}
const NumberFormat:React.FC<Props> = ({ value, style }) => {
    return (
        <NumFormat 
            value={value} 
            thousandSeparator={true}
            displayType={"text"}
            renderText={formattedValue => (
                <Text style={style}>
                    R$ {Number(formattedValue).toFixed(2).replace('.',',')}
                </Text>
            )}
        />
    )
}

export const InputNumberFormat:React.FC<Props> = ({ value, format, thousandSeparator, style }) => {
    return (
        <NumFormat 
            value={value} 
            customInput={TextInput}
            thousandSeparator={true}
        />
    )
}

import style from './Style';

export const CustomNumericInput = ({ 
        value = 0, 
        onChange = (value: number) => { },
        maxValue = 10
}) => {
    
    return (
        <NumericInput
            value={value}
            iconSize={32}
            step={1}
            minValue={0}
            initValue={value}
            valueType="integer"
            inputStyle={style.field}
            rightButtonBackgroundColor="#d2ae6c"
            leftButtonBackgroundColor='#d2ae6c'
            maxValue={maxValue}   
            rounded
            borderColor="black"

            editable={false}
            onChange={value => 
                onChange(value)
            }
        />
    )
 }

export default NumberFormat;

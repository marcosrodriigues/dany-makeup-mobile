import React from 'react';
import { default as NF } from 'react-number-format';
import { Text } from 'react-native';

interface Props {
    value: number,
    format?: string,
    prefix?: string,
    thousandSeparator?: boolean,
    style: {}
}
const NumberFormat:React.FC<Props> = ({ value, format, thousandSeparator, style }) => {
    return (
        <NF 
            value={value} 
            thousandSeparator={thousandSeparator ? thousandSeparator : true}
            format={format ? format : '##.##'}
            displayType={"text"}
            renderText={formattedValue => (
                <Text style={style}>
                    R$ {Number(formattedValue).toFixed(2).replace('.',',')}
                </Text>
            )}
        />
    )
}

export default NumberFormat;

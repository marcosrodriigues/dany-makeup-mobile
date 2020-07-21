import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style'
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    payment: any,
    name: string
}
const AccordionPayment:React.FC<Props> = ({
    payment = { },
    name = ''
}) => {
    const [isCollapsed, setCollapded] = useState(false);
    const [fa, setFA] = useState('arrow-down')

    useEffect(() => {
        setFA(isCollapsed ? "arrow-up" : "arrow-down" )
    }, [isCollapsed])

    return (
        <Collapse style={style.collapse} onToggle={() => setCollapded(!isCollapsed)} >
            <CollapseHeader style={style.header}>
                <View>
                    <Text style={style.title}>Pagamento</Text>
                </View>
                <View style={style.header}>
                    <Text style={style.sideValue}>{name === 'credit_card' ? 'Cartão de crédito' : 'Boleto'}</Text>
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
            {
                name === 'credit_card' ?
                <View>
                    <View style={style.row}>
                        <Text style={style.strong}>Cartão de crédito:</Text>
                        <Text style={style.strong}>{payment.credit_card.name}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Nome no cartão:</Text>
                        <Text style={style.strong}>{payment.credit_card.holder_name}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Final:</Text>
                        <Text style={style.strong}>{payment.credit_card.last_digits}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Validade:</Text>
                        <Text style={style.strong}>{payment.credit_card.expiration_date}</Text>
                    </View>
                </View>
                :
                <View>
                    <View style={style.row}>
                        <Text style={style.strong}>Nome no boleto:</Text>
                        <Text style={style.strong}>{payment.boleto.name}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>CPF:</Text>
                        <Text style={style.strong}>{payment.boleto.cpf}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Nascimento:</Text>
                        <Text style={style.strong}>{payment.boleto.birthday}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Contato:</Text>
                        <Text style={style.strong}>{payment.boleto.phone}</Text>
                    </View>
                </View>
            }
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionPayment
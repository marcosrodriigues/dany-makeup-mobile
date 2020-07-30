import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style';
import { FontAwesome } from '@expo/vector-icons';
import NumberFormat from '../../util/NumberFormat';

interface Props {
    delivery: any,
    value: number
}
const AccordionDelivery:React.FC<Props> = ({
    delivery = { },
    value = 0
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
                    <Text style={style.title}>Frete</Text>
                </View>
                <View style={style.header}>
                    <NumberFormat style={style.sideValue} value={value} />
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
                <View style={style.row}>
                    <Text style={style.strong}>ENCOMENDA:</Text>
                    <Text style={style.strong}>{delivery.name}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.strong}>ENTREGA EM:</Text>
                    <Text style={style.value}>{delivery.deadline} dias úteis</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.strong}>VALOR:</Text>
                    <NumberFormat value={delivery.value} style={style.value} />
                </View>
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionDelivery
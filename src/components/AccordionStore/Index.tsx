import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style';
import { FontAwesome } from '@expo/vector-icons';
import NumberFormat from '../../util/NumberFormat';
import BoxStore from '../BoxStore/Index';

interface Props {
    store: any,
}
const AccordionStore:React.FC<Props> = ({
    store = { },
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
                    <Text style={style.title}>Retirar na Loja</Text>
                </View>
                <View style={style.header}>
                    <Text style={style.sideValue}>{store.name}</Text>
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
                <BoxStore store={store} />
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionStore
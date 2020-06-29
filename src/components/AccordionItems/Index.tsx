import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style';
import { FontAwesome } from '@expo/vector-icons';
import CardItem from '../CardItem/Index';
import NumberFormat from '../../util/NumberFormat';

const AccordionItems = ({
    items = [],
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
                    <Text style={style.title}>Items</Text>
                </View>
                <View style={style.header}>
                    <NumberFormat style={style.sideValue} value={value} />
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
                {
                    items.length > 0 &&
                        items.map((item: any) => {
                            return (
                                <CardItem key={item.id} item={item} />
                            )
                        })
                }
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionItems
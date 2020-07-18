import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style';
import { FontAwesome } from '@expo/vector-icons';
import BoxResume from '../BoxResume/Index';
import NumberFormat from '../../util/NumberFormat';

interface Props {
    resume: any,
    value: number
}
const AccordionResume:React.FC<Props> = ({
    resume = { },
    value = 0,
}) => {
    const [isCollapsed, setCollapded] = useState(false);
    const [fa, setFA] = useState('arrow-down')

    useEffect(() => {
        console.log(resume)
        setFA(isCollapsed ? "arrow-up" : "arrow-down" )
    }, [isCollapsed])

    return (
        <Collapse style={style.collapse} onToggle={() => setCollapded(!isCollapsed)} >
            <CollapseHeader style={style.header}>
                <View>
                    <Text style={style.title}>Resumo</Text>
                </View>
                <View style={style.header}>
                    <NumberFormat style={style.sideValue} value={value} />
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
                <BoxResume 
                    subtotal={resume.subtotal}
                    frete={resume.frete}
                    total={resume.total}
                />
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionResume
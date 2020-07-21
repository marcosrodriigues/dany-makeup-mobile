import React, { useState, useEffect } from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { View, Text } from 'react-native';

import style from './Style'
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    address: any,
}
const AccordionAddress:React.FC<Props> = ({
    address = { },
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
                    <Text style={style.title}>Endereço de cobrança</Text>
                </View>
                <View style={style.header}>
                    <FontAwesome name={fa} size={24} />
                </View>
            </CollapseHeader>
            <CollapseBody>
                <View>
                    <View style={style.row}>
                        <Text style={style.strong}>{address.name}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>CEP:</Text>
                        <Text style={style.strong}>{address.cep}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>Endereço:</Text>
                        <Text style={style.strong}>{address.street}, nº {address.number}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.strong}>{address.neighborhood}</Text>
                        <Text style={style.strong}>{address.city}/{address.uf}</Text>
                    </View>
                </View>
            </CollapseBody>
        </Collapse>
    )
}

export default AccordionAddress
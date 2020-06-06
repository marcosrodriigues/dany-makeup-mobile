import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import style from './Style';
import { useNavigation } from '@react-navigation/native';

import IParamsHeaderStackMenu from '../../interface/IParamsHeaderStackMenu';

const HeaderStackMenu:React.FC<IParamsHeaderStackMenu> = ({ title }) => {

    const routes = useNavigation();

    function handleClickButton() {
        routes.goBack();
    }

    return (
        <View style={style.header}>
            <TouchableOpacity containerStyle={style.button} onPress={handleClickButton}>
                <FontAwesome style={style.icon} name="arrow-left" ></FontAwesome>
            </TouchableOpacity>
            <View style={style.section}>
                <Text style={style.title}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderStackMenu;
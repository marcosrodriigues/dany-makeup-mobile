import React from 'react';
import IParamsSocialMediaButtons from '../../interface/IParamsSocialMediaButtons';
import { View, Text, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import style from './Style';

import FacebookIcon from '../../assets/images/facebook-icon.png';

const SocialMediaButtons:React.FC<IParamsSocialMediaButtons> = ({ handleFacebookClick, title }) => {
    return (
        <View style={style.socialMedia}>
            {
                title ?
                    <Text style={style.textTitle}>{title}</Text>
                :
                <Text style={style.textTitle}>Entre com suas redes sociais</Text>
            }
            <View style={style.buttonsSocialMedia}>
                <TouchableHighlight style={style.facebookButton} onPress={() => handleFacebookClick()} activeOpacity={0.5}>
                    <Image source={FacebookIcon} style={style.facebookIcon}></Image>
                </TouchableHighlight>

                {/* <TouchableHighlight style={style.facebookButton} onPress={() => Alert.alert("Atenção","be careful")} activeOpacity={0.5}>
                    <Image source={FacebookIcon} style={style.facebookIcon}></Image>
                </TouchableHighlight> */}
            </View>
        </View>
    )

}

export default SocialMediaButtons;
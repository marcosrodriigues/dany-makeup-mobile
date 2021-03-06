import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground, Text } from 'react-native';

import style from './Style';

import ICategory from '../../interface/ICategoria'

interface Props {
    category: ICategory,
    onClickCategory: (category: ICategory) => void
}
const Categoria:React.FC<Props>  = ({ category, onClickCategory }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            style={style.buttonCategoria} 
            key={category.id} 
            onPress={() => onClickCategory(category)}
        >
            <ImageBackground style={style.imageCategoria} source={{ uri : category.image_url }}>
            <Text style={style.titleCategoria}>{category.title}</Text>
            <Text style={style.descriptionCategoria}>{category.description}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Categoria;
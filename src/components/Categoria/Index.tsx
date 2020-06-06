import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground, Text } from 'react-native';

import CategoriaImg from '../../assets/images/categorias/categoria.jpg';

import style from './Style';

interface ICategory {
    id: number,
    title: string,
    image_url: string
}
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
            <ImageBackground style={style.imageCategoria} source={CategoriaImg}>
            <Text style={style.titleCategoria}>{category.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Categoria;
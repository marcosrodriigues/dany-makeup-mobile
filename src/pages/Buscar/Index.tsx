import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, ImageBackground, Text } from 'react-native';

import style from './Style';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import CategoriaImg from '../../assets/images/categorias/categoria.jpg';

interface ICategory {
    id: number,
    title: string,
    image_url: string
}

const Buscar = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        const categorias = [
          {
            id: 1,
            title: 'Batom',
            image_url: '../../assets/images/categorias/categoria.jpg'
          },
          {
            id: 2,
            title: 'Perfumaria',
            image_url: '../../assets/images/categorias/categoria.jpg'
          },
          {
            id: 3,
            title: 'Shampoo',
            image_url: '../../assets/images/categorias/categoria.jpg'
          },
          {
            id: 4,
            title: 'Outros',
            image_url: '../../assets/images/categorias/categoria.jpg'
          },
        ];
    
        setCategory(categorias);
    }, [])

    function handleSelectedCategory (id: number) {
        console.log("id: " + id);
    }

    function handleSearchButton () {
        console.log(search);
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require('../../assets/images/logo.png')} style={style.logo}></Image>
                <SearchBar
                    placeholder="Produto ou categoria"
                    containerStyle={style.containerSearchBar}
                    inputStyle={style.inputSearchBar}
                    onChangeText={setSearch}
                    value={search}
                />
                <TouchableOpacity style={style.searchButton} onPress={handleSearchButton}  >
                <FontAwesome name="search" style={style.fa} ></FontAwesome>
                </TouchableOpacity>
            </View>

            <ScrollView style={style.scrollView}>
                <Text style={style.allCategory}>Todas as categorias</Text>
                {category.map(cat => (
                <TouchableOpacity activeOpacity={0.6} style={style.content} key={cat.id} onPress={() => handleSelectedCategory(cat.id)}>
                    <ImageBackground style={style.categoria} source={CategoriaImg}>
                    <Text style={style.titleCategoria}>{cat.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                ))}
                
            </ScrollView>
            
            </View>
    )
}

export default Buscar;
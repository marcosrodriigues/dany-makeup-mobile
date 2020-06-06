import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

import style from './Style';

import { useNavigation } from '@react-navigation/native';
import HeaderSearchBar from '../../components/HeaderSearchBar/Index'
import Categoria from '../../components/Categoria/Index';
import CardProduto from '../../components/CardProduto/Index'

import ICategory from '../../interface/Category';
import IProduct from '../../interface/Product';


const Buscar = () => {
    const [category, setCategory] = useState<ICategory[]>([]);
    const [search, setSearch] = useState<string>('');
    const [categorySelected, setCategorySelected] = useState<ICategory>({} as ICategory);
    const [showList, setShowList] = useState<Boolean>(false);
    const [produtos, setProdutos] = useState<IProduct[]>([]);

    const navigate = useNavigation();

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

    useEffect(() => {
      setShowList(!(categorySelected.id === undefined && search === ''))
    }, [categorySelected, search]);

    useEffect(() => {
      setProdutos([
        {
            id: 1,
            image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
            name: 'Produto 1',
            value: 49.00,
            description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
        },
        {
          id: 2,
          image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
          name: 'Produto 2',
          value: 49.00,
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
        },
        {
          id: 3,
          image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
          name: 'Produto 3',
          value: 49.00,
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum '
        },
        {
          id: 4,
          image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
          name: 'Produto 4',
          value: 49.00,
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          id: 5,
          image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
          name: 'Produto 5',
          value: 49.00,
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
      ]);

    }, [])

    function handleSelectedCategory (id: ICategory) {
      setCategorySelected(id);
    }

    function handleSearchButton (text: string) {
      setSearch(text);

      if (text === '') setCategorySelected(Object());
    }

    function handleAddCarrinho(id: number) {
      console.log("adicionou " + id + " no carrinho");
    }

    function onClickProduct (id: number) {
      navigate.navigate('Produto', {id});
    }

    return (
      <View style={style.dataContainer}>
          <HeaderSearchBar onClickSearch={handleSearchButton} />
          <ScrollView contentContainerStyle={style.searchScrollView}>
            { showList ? 
                <>
                  <Text style={style.subtitle}>Exibindo resultados para</Text>
                  <Text style={style.title}>{categorySelected.title? categorySelected.title + ' ' : ''}{search}</Text>

                  {produtos.map(product => (
                    <CardProduto key={product.id} produto={product} onClickComponent={onClickProduct} onClickAdd={handleAddCarrinho} />
                  ))}
                </>
              :
                <>
                  <Text style={style.title}>Todas as categorias</Text>

                  { category.map(cat => (
                    <Categoria key={cat.id} category={cat} onClickCategory={handleSelectedCategory} />
                  ))}
                </>
            }
          </ScrollView>
          </View>
    )
}

export default Buscar;
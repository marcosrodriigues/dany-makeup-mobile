import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

import style from './Style';

import { useNavigation } from '@react-navigation/native';
import HeaderSearchBar from '../../components/HeaderSearchBar/Index'
import Categoria from '../../components/Categoria/Index';
import CardProduto from '../../components/CardProduto/Index'

import ICategory from '../../interface/ICategoria';
import IProduct from '../../interface/IProduto';


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
          name: 'Nome do produto 1',
          fullDescription: 'Lorem 1 ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          shortDescription: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          images: [
              'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          ],
          value: 49.00
        },
        {
          id: 2,
          name: 'Nome do produto 2',
          fullDescription: 'Lorem 1 ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          shortDescription: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          images: [
              'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          ],
          value: 49.00
        },
        {
          id: 3,
          name: 'Nome do produto 3',
          fullDescription: 'Lorem 1 ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          shortDescription: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          images: [
              'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          ],
          value: 49.00
        },
        {
          id: 4,
          name: 'Nome do produto 4',
          fullDescription: 'Lorem 1 ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          shortDescription: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          images: [
              'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          ],
          value: 49.00
        },
        {
          id: 5,
          name: 'Nome do produto 5',
          fullDescription: 'Lorem 1 ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          shortDescription: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          images: [
              'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=765&q=80',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          ],
          value: 49.00
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

    function onClickProduct (product: IProduct) {
      navigate.navigate('Produto', { product: product });
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
                    <CardProduto key={product.id} produto={product} onClickComponent={() => onClickProduct(product)} />
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
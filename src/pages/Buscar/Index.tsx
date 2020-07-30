import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

import style from './Style';

import { useNavigation } from '@react-navigation/native';
import HeaderSearchBar from '../../components/HeaderSearchBar/Index'
import Categoria from '../../components/Categoria/Index';
import CardProduto from '../../components/CardProduto/Index'

import ICategory from '../../interface/ICategoria';
import IProduct from '../../interface/IProduto';
import api from '../../services/api';
import GifLoading from '../../components/GifLoading/Index';


const Buscar = () => {
    const [isLoading, changeLoading] = useState(false)
    const [categorys, setCategorys] = useState<ICategory[]>([]);
    const [search, setSearch] = useState<string>('');
    const [categorySelected, setCategorySelected] = useState<ICategory>({} as ICategory);
    const [showList, setShowList] = useState<Boolean>(false);
    const [produtos, setProdutos] = useState<IProduct[]>([]);

    const navigate = useNavigation();

    useEffect(() => {
      loadCategorys();
    }, [])

    async function loadCategorys() {
      changeLoading(true);
      let params = {
        filter: false
      }
      const response = await api.get('categorys', { params });
      const { data } = response;
      setCategorys(data);
      changeLoading(false)
    }

    useEffect(() => {
      async function load() {
        setProdutos([]);
        const params = {
          category_id: categorySelected.id,
          search
        }
  
        if (categorySelected.id !== undefined || search !== '') {
          changeLoading(true);
          const { data } = await api.get('mobile/products', { params });
          setProdutos(data);
          changeLoading(false);
        }
        setShowList(!(categorySelected.id === undefined && search === ''))
      }
      load();
    }, [categorySelected, search]);

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
            <Text style={style.subtitle}>Exibindo resultados para</Text>
            {
              !isLoading ? 
                showList ?
                  <>
                    <Text style={style.title}>{categorySelected.title? categorySelected.title : ''}{search && ` > ${search}`}</Text>

                    {produtos.map(product => (
                      <CardProduto key={product.id} produto={product} onClickComponent={() => onClickProduct(product)} />
                    ))}
                  </>
                :
                <>
                  <Text style={style.title}>Todas as categorias</Text>
                  { categorys.map(cat => (
                    <Categoria key={cat.id} category={cat} onClickCategory={handleSelectedCategory} />
                  ))}
                </>
              :
              <>
                <GifLoading />
              </>
            }
          </ScrollView>
          </View>
    )
}

export default Buscar;
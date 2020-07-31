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
import { TouchableOpacity } from 'react-native-gesture-handler';


const Buscar = () => {
    const [isLoading, changeLoading] = useState(false)
    const [categorys, setCategorys] = useState<ICategory[]>([]);
    const [search, setSearch] = useState<string>('');
    const [categorySelected, setCategorySelected] = useState<ICategory>({} as ICategory);
    const [showList, setShowList] = useState<Boolean>(false);
    const [produtos, setProdutos] = useState<IProduct[]>([]);
    const [countProducts, setCountProducts] = useState(0);
    const [page, setPage] = useState(1)
    const [loadingMore, isLoadingMore] = useState(false);

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
          const params = {
            category_id: categorySelected.id,
            search,
            page
          }
          if (categorySelected.id !== undefined || search !== '') {
            changeLoading(true);
            const response = await api.get('mobile/products', { params });
            const { data, headers } = response;
            const counter = headers['x-total-count'];
            setProdutos(data);
            setCountProducts(counter);
            changeLoading(false);
          }
          setShowList(!(categorySelected.id === undefined && search === ''))
          setPage(1);
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

    async function handleLoadMore() {
      const params = {
        category_id: categorySelected.id,
        search,
        page: page + 1
      };
      isLoadingMore(true);
      try {
        const { data } = await api.get('mobile/products', { params });
        setPage(page + 1)
        if (data.length > 0) {
          setProdutos([
            ...produtos, 
            ...data
          ])
        }
      } catch (error) { 
        console.log('ERROR LOAD MORE PRODUCTS', error)
        setProdutos([])
      }
      isLoadingMore(false);
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

                    {
                    produtos.length > 0 ?
                      produtos.map(product => (
                        <CardProduto key={product.id} produto={product} onClickComponent={() => onClickProduct(product)} />
                      ))
                    :
                      <View style={style.box}>
                        <Text style={style.txtBox}>Nenhum produto encontrado</Text>
                      </View>
                  }
                  {
                    produtos.length < countProducts ?
                      loadingMore ? <GifLoading />
                      :
                      <TouchableOpacity style={style.btn} onPress={handleLoadMore}>
                        <Text style={style.txtBtn}>Carregar mais</Text>
                      </TouchableOpacity>
                    :
                    <></>
                  }
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
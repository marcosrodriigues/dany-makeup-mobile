import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInputMask } from 'react-native-masked-text';
import IAddress from '../../interface/IAddress';
import { api_ibge } from '../../services/api_ibge';

import {Picker} from 'react-native';
import { api_cep } from '../../services/api_cep';
import GifLoading from '../../components/GifLoading/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import api from '../../services/api';


const AddEndereco = ({ navigation, route }) => {
    const [loading, isLoading] = useState(false);
    const [address, setAddress] = useState<IAddress>({} as IAddress);
    const user = useSelector((state: IStateRedux) => state.user);
    
    const [ufs, setUfs] = useState([]);
    const [citys, setCitys] = useState([]);

    useEffect(() => {
        if (route.params?.address) {
            const current = route.params.address;
            setAddress(current);
        }
    }, [route.params?.address])

    useEffect(() => {
        const params = {
            orderBy: 'nome'
        }
        
        isLoading(true);
        api_ibge.get('estados', { params }).then(response => {
            const { data } = response;

            const all_uf = data.map(({ sigla, nome }) => {
                return { sigla, nome }
            });

            setUfs(all_uf);
            isLoading(false);
        })
    }, [])

    useEffect(() => {
        async function loadState() {
            if (address.uf !== '') {
                isLoading(true);
                try {
                    const { data } = await api_ibge.get(`estados/${address.uf}/municipios`);
                    const all_citys = data.map((city) => city.nome);
                    setCitys(all_citys);
                } catch (error) {
                    Alert.alert('Hey', 'Erro de conexão com IBGE')
                    console.log('')
                }
                isLoading(false)
            }
        }
        loadState();
    }, [address.uf])

    async function handleAdd() {
        if (!address.cep || 
            !address.city || 
            !address.neighborhood || 
            !address.street || 
            !address.uf || 
            !address.number) {
            Alert.alert('Hey', 'Preencha os campos do seu endereço corretamente');
            return;
        }
        isLoading(true);

        try {
            isLoading(true);

            if (!address.id)
                await api.post('address/user', { address, user_id: user.id })
            else
                await api.put('address/user', { address })

            route.params.onGoBack();
            navigation.goBack();
        } catch (err) {
            Alert.alert('Hey', 'Aconteceu algum problema com o seu cadastro. Tente novamente');
            console.log('ERR ADD ENDERECOS', err)
        }
        isLoading(false);
    }

    function handleAddress(name: string, value: string) {
        setAddress({
            ...address,
            [name]: value
        })
    }

    async function handleEndCep() {
        if (address.cep === '' || address.cep === undefined) return;
        try {
            isLoading(true);
            const response = await api_cep.get(`${address.cep}/json`);

            const {
                logradouro,
                complemento,
                bairro,
                localidade,
                uf
            } = response.data;
    
            const new_address = {
                ...address,
                street: logradouro,
                complement: complemento,
                neighborhood: bairro,
                uf: uf,
                city: localidade,
            }

            setAddress(new_address)
            isLoading(false);
        } catch (err) {
            Alert.alert('Atenção!', "Não foi possível encontrar um endereço com o CEP informado")
            console.log('ERROR HANDLE END CEP', err)
        }
    }

    return (
        <>
        <ScrollView contentContainerStyle={style.container}>
            {loading ? <View style={style.loading}><GifLoading /></View>  : <></>}
            <HeaderStackMenu title="Novo endereco" />
            <View style={style.form}>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Minha casa, casa de mãe, casa de vó..."
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.name}
                        onChangeText={text => handleAddress('name', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInputMask
                        placeholder="CEP"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        type="zip-code"
                        value={address.cep}
                        onEndEditing={handleEndCep}
                        onChangeText={(text) => handleAddress('cep', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Logradouro"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.street}
                        onChangeText={text => handleAddress('street', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Número"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.number}
                        onChangeText={text => handleAddress('number', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Complemento"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.complement}
                        onChangeText={text => handleAddress('complement', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Referência"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.reference}
                        onChangeText={text => handleAddress('reference', text)}
                    />
                </View>
                <View style={style.fields}>
                    <TextInput
                        placeholder="Bairro"
                        placeholderTextColor="#d2ae6c"
                        style={style.field}
                        value={address.neighborhood}
                        onChangeText={text => handleAddress('neighborhood', text)}
                    />
                </View>
                <View style={style.fields}>
                    <View style={style.field}>
                        <Picker 
                            itemStyle={style.selectField}
                            style={style.selectField}
                            selectedValue={address.uf}
                            onValueChange={(value) => handleAddress('uf', value) }
                        >
                            {ufs.map(uf => (
                                <Picker.Item key={uf.sigla} label={uf.nome} value={uf.sigla} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={style.fields}>
                    <View style={style.field}>
                        <Picker 
                            itemStyle={style.selectField}
                            style={style.selectField}
                            selectedValue={address.city}
                            onValueChange={(value) => handleAddress('city', value) }
                        >
                            {citys.map(city => (
                                <Picker.Item key={city} label={city} value={city} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity style={style.button} onPress={handleAdd}>
                    <Text style={style.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}

export default AddEndereco
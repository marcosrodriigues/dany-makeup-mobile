import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { SearchBar } from 'react-native-elements';

import style from './Style';

interface Props {
    onClickSearch: (text: string) => void
}

const HeaderSearchBar:React.FC<Props> = ({ onClickSearch }) => {
    const [search, setSearch] = useState('');

    function clickSearch() {
        onClickSearch(search);
    }

    return (
        <View style={style.header}>
            <Image source={require('../../assets/images/logo.png')} style={style.logo}></Image>
            <SearchBar
                placeholder="Produto ou categoria"
                containerStyle={style.containerSearchBar}
                inputStyle={style.inputSearchBar}
                onChangeText={setSearch}
                value={search}
            />
            <TouchableOpacity style={style.searchButton} onPress={clickSearch}  >
            <FontAwesome name="search" style={style.fa} ></FontAwesome>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderSearchBar;
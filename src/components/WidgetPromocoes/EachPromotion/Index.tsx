import React from 'react';

import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCarrinho from '../../AddCarrinho/Index';

import styles from '../Style';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

const EachPromotion = ({
    promotion
}) => {
    const navigation = useNavigation();

    function handleClick(promotion: any) {
        navigation.navigate('Promocao', { promotion })
    }
    
    return (
        <Card containerStyle={styles.cardPromocao} >
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9} 
                 onPress={() => handleClick(promotion)}
            >
                <Image source={{ uri: promotion.image_url }} style={styles.cardImage}></Image>
                <View style={[styles.cardDescription]}>
                    <Text style={styles.cardTitle}>{promotion.name}</Text>
                    <Text style={styles.cardOriginalValue}>De: R$ {promotion.originalValue}</Text>
                    <View style={[styles.inline]}>
                        <Text style={styles.cardNewValue}>Por: R$ {promotion.promotionValue}</Text>
                        <Text style={[styles.cardDiscount]}>
                            ({promotion.discountType} {promotion.discount} off)
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={[styles.mt16, styles.card]}>
                <AddCarrinho
                    item={promotion}
                    size={2}
                    text={"add carrinho"}
                    type={"PROMOTION"}
                />
            </View>
        </Card>
    )
}

export default EachPromotion;
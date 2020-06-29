import { useEffect } from "react";
import { isSignedIn } from "../services/auth";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default async function CheckUserOnline() {
    const navigation = useNavigation();

    useEffect(() => {
        async function checkUser() {
            if (!(await isSignedIn())) {
                Alert.alert('Atenção', 'Você precisa se autenticar para acessar essa seção');
                navigation.navigate('Carrinho');
                return;
            }
        }
        checkUser();    
    }, [])
}
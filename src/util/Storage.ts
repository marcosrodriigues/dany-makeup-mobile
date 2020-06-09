import { AsyncStorage } from 'react-native';

export const storageSetItem = async (name: string, value: string) => {
    return await AsyncStorage.setItem(name, value);
}

export const storageRemoveItem = async (name: string) => {
    return await AsyncStorage.removeItem(name);
}

export const storageGetItem = (name: string) => {
    return AsyncStorage.getItem(name).then(value => {
        return value;
    });
}
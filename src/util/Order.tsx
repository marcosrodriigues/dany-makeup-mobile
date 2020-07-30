import { Alert } from "react-native";

function isOrderValid(order: any) {
    const { user, purchase } = order;
    const paymentOrder = order.payment;
    const { address, payment } = paymentOrder;
    const { items, delivery } = purchase;


    if (user.id === undefined) {
        Alert.alert('Hey', 'Faça login antes de continuar!');
        return false;
    }

    if (user.cpf === undefined || user.name === undefined || user.whatsapp === undefined) {
        Alert.alert('Hey', 'Pra completar a compra você precisa preencher seu CPF, Nome e Whatsapp no seu perfil!');
        return false;
    }

    if (payment.payment_method !== 'boleto' && payment.payment_method !== 'credit_card') {
        Alert.alert('Hey', 'Método de pagamento inválido');
        return false;
    }
    if (items.length <= 0) {
        Alert.alert('Hey', 'Adicione produtos no seu carrinho para continuar.');
        return false;
    }
    if (address.id === undefined) {
        Alert.alert('Hey', 'Selecione o endereço de cobrança');
        return false;
    }

    if (payment.payment_method === 'credit_card') {
        if (payment.credit_card.id === undefined) {
            Alert.alert('Hey', 'Selecione o cartão de crédito');
            return false;
        }
    }

    if (payment.payment_method === 'boleto') {
        if (payment.boleto.name === '' ||
            payment.boleto.cpf === '' ||
            payment.boleto.birthday === '' ||
            payment.boleto.phone === '') {
                Alert.alert('Hey', 'Preencha os campos Nome, CPF, Aniversário e Telefone do boleto!');
                return false;
            }
    }

    if (delivery.code === 1) { //entrega em mãos
        if (delivery.store === undefined || delivery.store.id === undefined) {
            Alert.alert('Hey', 'Escolha a loja que você irá retirar o produto');
            return false;
        }
    }
    return true;
}

export default isOrderValid;
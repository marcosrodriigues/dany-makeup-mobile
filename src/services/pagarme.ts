import pagarme from 'pagarme';
import ICreditCard from '../interface/ICreditCard';

const PagarMe = {
    isCreditCardValid,
    generateHash
}

async function isCreditCardValid(credit_card : ICreditCard) {
    if (
        credit_card.holder_name === '' ||
        credit_card.expiration_date === '' ||
        credit_card.card_number === '' ||
        credit_card.card_cvv === ''
    ) return false;


    const card = {
        card_holder_name: credit_card.holder_name,
        card_expiration_date: credit_card.expiration_date,
        card_number: credit_card.card_number,
        card_cvv: credit_card.card_cvv
    };

    const card_validation = await pagarme.validate({ card })

    if (!card_validation.card.card_number) return false; //número do cartão inválido

    return true;
}

async function generateHash(credit_card: ICreditCard) {
    const card_hash = await pagarme.connect({
        encryption_key: 'SUA_ENCRYPTION_KEY'
    }).then(client => client.security.encrypt(credit_card));

    console.log('card_hash', card_hash);
    return card_hash;
}

export default PagarMe
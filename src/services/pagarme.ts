import ICreditCard from '../interface/ICreditCard';

const PagarMe = {
    isCreditCardValid,
    generateHash
}

function isCreditCardValid(value : string) {
    if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

async function generateHash(credit_card: ICreditCard) {
    // const card_hash = await pagarme.connect({
    //     encryption_key: 'SUA_ENCRYPTION_KEY'
    // }).then(client => client.security.encrypt(credit_card));

    // console.log('card_hash', card_hash);
    // return card_hash;
}

export default PagarMe
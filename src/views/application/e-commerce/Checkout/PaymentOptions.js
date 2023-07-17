// assets
import paypal from 'assets/images/e-commerce/paypal.png';
import card from 'assets/images/e-commerce/card.png';
import cod from 'assets/images/e-commerce/cod.png';

// ==============================|| CHECKOUT - PAYMENT OPTIONS ||============================== //

const PaymentOptions = [
    {
        id: 1,
        value: 'paypal',
        title: 'Pay with PayPal',
        caption: 'You will be redirected to PayPal website to complete your purchase securely.',
        image: paypal,
        size: {
            width: 16,
            height: 16
        }
    },
    {
        id: 2,
        value: 'card',
        title: 'Credit / Debit Card',
        caption: 'We support Mastercard, Visa, Discover and Stripe.',
        image: card,
        size: {
            width: 72,
            height: 24
        }
    },
    {
        id: 3,
        value: 'cod',
        title: 'Cash on Delivery',
        caption: 'Pay with cash when your order is delivered.',
        image: cod,
        size: {
            width: 46,
            height: 28
        }
    }
];

export default PaymentOptions;

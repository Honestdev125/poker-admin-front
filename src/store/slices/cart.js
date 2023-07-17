// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    checkout: {
        step: 0,
        products: [],
        subtotal: 0,
        total: 0,
        discount: 0,
        shipping: 0,
        billing: null,
        payment: {
            type: 'free',
            method: 'cod',
            card: ''
        }
    }
};

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // ADD PRODUCT
        addProductSuccess(state, action) {
            state.checkout.products = action.payload.products;
            state.checkout.subtotal += action.payload.subtotal;
            state.checkout.total += action.payload.subtotal;
        },

        // REMOVE PRODUCT
        removeProductSuccess(state, action) {
            state.checkout.products = action.payload.products;
            state.checkout.subtotal += -action.payload.subtotal;
            state.checkout.total += -action.payload.subtotal;
        },

        // UPDATE PRODUCT
        updateProductSuccess(state, action) {
            state.checkout.products = action.payload.products;
            state.checkout.subtotal = state.checkout.subtotal - action.payload.oldSubTotal + action.payload.subtotal;
            state.checkout.total = state.checkout.total - action.payload.oldSubTotal + action.payload.subtotal;
        },

        // SET STEP
        setStepSuccess(state, action) {
            state.checkout.step = action.payload;
        },

        // SET NEXT STEP
        setNextStepSuccess(state) {
            state.checkout.step += 1;
        },

        // SET BACK STEP
        setBackStepSuccess(state) {
            state.checkout.step -= 1;
        },

        // SET BILLING ADDRESS
        setBillingAddressSuccess(state, action) {
            state.checkout.billing = action.payload.billing;
        },

        // SET DISCOUNT
        setDiscountSuccess(state, action) {
            let difference = 0;
            if (state.checkout.discount > 0) {
                difference = state.checkout.discount;
            }

            state.checkout.discount = action.payload.amount;
            state.checkout.total = state.checkout.total + difference - action.payload.amount;
        },

        // SET SHIPPING CHARGE
        setShippingChargeSuccess(state, action) {
            state.checkout.shipping = action.payload.shipping;
            state.checkout.total += action.payload.newShipping;
            state.checkout.payment = {
                ...state.checkout.payment,
                type: action.payload.type
            };
        },

        // SET PAYMENT METHOD
        setPaymentMethodSuccess(state, action) {
            state.checkout.payment = {
                ...state.checkout.payment,
                method: action.payload.method
            };
        },

        // SET PAYMENT CARD
        setPaymentCardSuccess(state, action) {
            state.checkout.payment = {
                ...state.checkout.payment,
                card: action.payload.card
            };
        },

        // RESET CART
        resetCardSuccess(state) {
            state.checkout = initialState.checkout;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function addProduct(product, products) {
    return async () => {
        try {
            const response = await axios.post('/cart/add', { product, products });
            dispatch(slice.actions.addProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function removeProduct(id, products) {
    return async () => {
        try {
            const response = await axios.post('/cart/remove', { id, products });
            dispatch(slice.actions.removeProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function updateProduct(id, quantity, products) {
    return async () => {
        try {
            const response = await axios.post('/cart/update', { id, quantity, products });
            dispatch(slice.actions.updateProductSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setStep(step) {
    return () => {
        dispatch(slice.actions.setStepSuccess(step));
    };
}

export function setNextStep() {
    return () => {
        dispatch(slice.actions.setNextStepSuccess({}));
    };
}

export function setBackStep() {
    return () => {
        dispatch(slice.actions.setBackStepSuccess({}));
    };
}

export function setBillingAddress(address) {
    return async () => {
        try {
            const response = await axios.post('/cart/billing-address', { address });
            dispatch(slice.actions.setBillingAddressSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setDiscount(code, total) {
    return async () => {
        try {
            const response = await axios.post('/cart/discount', { code, total });
            dispatch(slice.actions.setDiscountSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setShippingCharge(charge, shipping) {
    return async () => {
        try {
            const response = await axios.post('/cart/shipping-charge', { charge, shipping });
            dispatch(slice.actions.setShippingChargeSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setPaymentMethod(method) {
    return async () => {
        try {
            const response = await axios.post('/cart/payment-method', { method });
            dispatch(slice.actions.setPaymentMethodSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setPaymentCard(card) {
    return async () => {
        try {
            const response = await axios.post('/cart/payment-card', { card });
            dispatch(slice.actions.setPaymentCardSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function resetCart() {
    return async () => {
        try {
            const response = await axios.post('/cart/reset');
            dispatch(slice.actions.resetCardSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

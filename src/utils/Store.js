import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    data: {
        bookingPartyInfo: [{
            firstName: "",
            bookingContactName: "",
            PhoneNumber: "",
            BillingAddress: "",
            ZipCode: "",
            Country: "",
            Role: "",
            representativeClient: "",
            Email:""
        }],
        opposingPartyInfo: [{
            firstName: "",
            bookingContactName: "",
            PhoneNumber: "",
            BillingAddress: "",
            ZipCode: "",
            Country: "",
            Role: "",
            representativeClient: "",
            Email:""
        }],
    }
};


function reducer(state, action) {
    return state;
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
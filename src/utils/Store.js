import { createContext, useReducer } from "react";

export const Info = createContext();

const initialState = {
    currStep: 0,
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
    switch (action.type) {
        case "NEXT_STEP":
            return {
                ...state,
                currStep: state.currStep + 1
            };
        case "PREV_STEP":
            return {
                ...state,
                currStep: state.currStep - 1
            };
        case "UPDATE_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Info.Provider value={value}>{children}</Info.Provider>;
}
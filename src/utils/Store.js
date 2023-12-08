import { createContext, useReducer } from "react";

export const Info = createContext();

const initialState = {
    currStep: 0,
    data: {
        bookingPartyInfo: {},
        opposingPartyInfo: {},
        additionalInfo: {},
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
        case "UPDATE_PARTY_DATA":
            return {
							...state,
							data: {
								...state.data,
								bookingPartyInfo: {
									...state.data.bookingPartyInfo,
									...action.payload.bookingPartyInfo,
								},
								opposingPartyInfo: {
									...state.data.opposingPartyInfo,
									...action.payload.opposingPartyInfo,
								},
							},
            };
        case "UPDATE_ADDITIONAL_DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    additionalInfo: {
                        ...state.data.additionalInfo,
                        ...action.payload.additionalInfo,
                    },
                },
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
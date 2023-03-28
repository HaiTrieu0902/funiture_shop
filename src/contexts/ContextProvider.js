import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState(false);

    return (
        <StateContext.Provider
            value={{
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

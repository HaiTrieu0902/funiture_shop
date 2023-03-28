import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState(false);
    const [sortOption, setSortOption] = useState('default');
    return (
        <StateContext.Provider
            value={{
                themeSettings,
                setThemeSettings,
                sortOption,
                setSortOption,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

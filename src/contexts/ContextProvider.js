import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentColor, setCurrentColor] = useState('#c19a83');
    const [sortOption, setSortOption] = useState('default');
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    };
    return (
        <StateContext.Provider
            value={{
                themeSettings,
                setThemeSettings,
                sortOption,
                setSortOption,
                currentColor,
                setCurrentColor,
                setColor,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

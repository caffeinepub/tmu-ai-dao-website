import React, { createContext, useContext, useState } from 'react';

type Language = 'EN' | 'FR';

interface LanguageContextType {
    currentLanguage: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    currentLanguage: 'EN',
    toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [currentLanguage, setCurrentLanguage] = useState<Language>('EN');

    const toggleLanguage = () => {
        setCurrentLanguage((prev) => (prev === 'EN' ? 'FR' : 'EN'));
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

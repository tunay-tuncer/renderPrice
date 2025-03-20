import { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
    const [price, setPrice] = useState(10000);
    const [priceWoTax, setPriceWoTax] = useState(8000);

    return (
        <PricingContext.Provider value={{ price, setPrice, priceWoTax, setPriceWoTax }}>
            {children}
        </PricingContext.Provider>
    );
};

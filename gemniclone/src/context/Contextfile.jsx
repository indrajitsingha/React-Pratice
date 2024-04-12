import { createContext } from 'react';

// Create a context
const ContextApp = createContext();

// Define your context provider component
const Contextfile = ({ children }) => {
    const ite = 10;

    return (
        <ContextApp.Provider value={ite}>
            {children}
        </ContextApp.Provider>
    );
};

export { ContextApp }; // Exporting the context itself
export default Contextfile; // Exporting the context provider component

import {
    createContext,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";

type TNavigationContextType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NavigationContext = createContext<TNavigationContextType>(
    {} as TNavigationContextType,
);

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationContext, NavigationProvider };

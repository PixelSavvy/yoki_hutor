import { BrowserRouter } from "react-router-dom";

import { ImageKitProvider, LazyMotionProvider } from "@/providers";
import { AppRoutes as Routes } from "@/router";

import { NavigationProvider } from "./context";

export const App = () => {
    return (
        <BrowserRouter>
            <NavigationProvider>
                <ImageKitProvider>
                    <LazyMotionProvider>
                        <Routes />
                    </LazyMotionProvider>
                </ImageKitProvider>
            </NavigationProvider>
        </BrowserRouter>
    );
};

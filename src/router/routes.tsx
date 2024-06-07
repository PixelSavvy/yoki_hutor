import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Preloader } from "@/components";

import { maps } from "./maps";

export const AppRoutes = () => {
    const location = useLocation();

    return (
        <Routes key={location.key} location={location}>
            <Route
                path={maps.root.path}
                element={
                    <Suspense fallback={<Preloader />}>
                        <maps.root.element />
                    </Suspense>
                }
            >
                {maps.root.children.map((child) => (
                    <Route
                        key={child.path}
                        element={<child.element />}
                        path={child.path}
                    />
                ))}
            </Route>
        </Routes>
    );
};

import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { cn } from "@/lib";

import { Header } from "./Header";

export const Root = () => {
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 96) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const headerVariants = {
        hidden: {
            y: "-100%",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <m.header
                animate={isVisible ? "visible" : "hidden"}
                initial="hidden"
                variants={headerVariants}
                className={cn(
                    "w-full px-8 fixed z-10 text-white py-6 ease-smooth",
                    isVisible
                        ? "bg-white text-black shadow-md"
                        : "bg-transparent",
                )}
            >
                <Header />
            </m.header>
            <main className="flex-1 w-full flex flex-col">
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
};

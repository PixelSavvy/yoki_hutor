import {
    AnimatePresence,
    m,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { cn } from "@/lib";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Root = () => {
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isTransparent, setIsTransparent] = useState<boolean>(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest >= 96) {
            setIsVisible(true);
            setIsTransparent(false);
        } else if (latest < 96) {
            setIsTransparent(true);
        } else {
            setIsVisible(false);
        }
    });

    const headerVariants = {
        visible: {
            y: 0,
        },
        hidden: {
            y: "-100px",
        },
    };

    const pageTransition = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
    };

    return (
        <>
            <m.header
                animate={isVisible ? "hidden" : "visible"}
                initial="visible"
                variants={headerVariants}
                className={cn(
                    "w-full px-8 lg:px-16 fixed z-10 text-background py-2 ease-smooth bg-trasparent",
                    isTransparent
                        ? "bg-transparent"
                        : "bg-primary shadow-md text-background",
                )}
            >
                <Header />
            </m.header>
            <AnimatePresence>
                <m.main
                    animate="animate"
                    className="flex-1 w-full flex flex-col justify-between items-center"
                    initial="initial"
                    variants={pageTransition}
                >
                    <Outlet />
                </m.main>
            </AnimatePresence>
            <footer className="">
                <Footer />
            </footer>
        </>
    );
};

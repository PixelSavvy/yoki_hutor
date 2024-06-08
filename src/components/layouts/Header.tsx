/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { m } from "framer-motion";
import Hamburger from "hamburger-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { NavigationContext } from "@/context";
import { paths } from "@/router/paths";

import { DesktopNavigation, MobileNavigation } from "./Navigation";

export const Header = () => {
    const { isOpen, setIsOpen } = useContext(NavigationContext);

    const navigationVariant = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <div className="flex justify-between items-center">
            <div className="w-16 h-16 relative z-40">
                <Link to={paths.home}>
                    <img alt="" src="/logo/YOKI_LOGO_3_TRANSPARENT.png" />
                </Link>
            </div>
            {isOpen ? (
                <m.nav
                    animate={isOpen ? "open" : "closed"}
                    className="fixed z-30 inset-0 w-full min-h-dvh bg-primary md:hidden"
                    initial="closed"
                    variants={navigationVariant}
                >
                    <MobileNavigation />
                </m.nav>
            ) : null}
            <nav className="hidden md:block">
                <DesktopNavigation />
            </nav>
            <div className="relative z-40 md:hidden">
                <Hamburger
                    rounded
                    color="#fff"
                    distance="sm"
                    size={40}
                    toggle={setIsOpen}
                    toggled={isOpen}
                />
            </div>
        </div>
    );
};

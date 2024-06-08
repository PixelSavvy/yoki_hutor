import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

import { paths } from "@/router/paths";

import { Navigation } from "./Navigation";

export const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="w-16 h-16">
                    <Link to={paths.home}>
                        <img alt="" src="/logo/YOKI_LOGO_3_TRANSPARENT.png" />
                    </Link>
                </div>
                <nav>
                    <Navigation />
                </nav>
                <div className="md:hidden">
                    <Hamburger rounded distance="sm" size={40} />
                </div>
            </div>
        </div>
    );
};

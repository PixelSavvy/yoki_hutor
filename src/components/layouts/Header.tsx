import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

import { paths } from "@/router/paths";

export const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <div className="w-16 h-16">
                    <Link to={paths.home}>
                        <img alt="" src="/logo/YOKI_LOGO_2_TRANSPARENT.png" />
                    </Link>
                </div>
                <div>
                    <Hamburger rounded distance="sm" size={40} />
                </div>
            </nav>
        </div>
    );
};

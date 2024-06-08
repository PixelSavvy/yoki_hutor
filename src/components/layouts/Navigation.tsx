import { Link } from "react-scroll";

import { navigationLinks } from "@/data";

export const MobileNavigation = () => {
    return (
        <ul className="flex flex-col justify-between gap-12  ml-0 my-32 pl-12">
            {navigationLinks.map((link) => (
                <li key={link.label} className="text-2xl md:text-base">
                    <Link
                        smooth
                        spy
                        activeClass="active"
                        className="cursor-pointer hover:text-secondary focus-within:text-secondary transition-colors"
                        duration={500}
                        offset={-70}
                        to={link.to}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export const DesktopNavigation = () => {
    return (
        <ul className="flex justify-between gap-12 ml-0">
            {navigationLinks.map((link) => (
                <li key={link.label} className="text-2xl md:text-base">
                    <Link
                        smooth
                        spy
                        activeClass="active"
                        className="cursor-pointer hover:text-secondary focus-within:text-secondary transition-colors"
                        duration={500}
                        offset={-70}
                        to={link.to}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

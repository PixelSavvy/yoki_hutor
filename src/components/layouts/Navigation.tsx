import { Link } from "react-scroll";

import { navigationLinks } from "@/data";

export const Navigation = () => {
    return (
        <ul className="md:flex justify-between items-center gap-12 w-full ml-0">
            {navigationLinks.map((link) => (
                <li key={link.label}>
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

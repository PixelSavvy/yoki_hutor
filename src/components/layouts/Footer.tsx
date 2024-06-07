import { Icon36LogoVk } from "@vkontakte/icons";
import { Instagram, Mail } from "lucide-react";
import { FaYandex } from "react-icons/fa";
import { Link } from "react-router-dom";

import { paths } from "@/router/paths";
import { isMobile } from "@/utils/isMobile";

export const Footer = () => {
    const instagramLink = isMobile()
        ? "instagram://user?username=yokihutor"
        : "https://www.instagram.com/yokihutor";
    const vkLink = isMobile()
        ? "vk://vk.com/yokihutor"
        : "https://vk.com/yokihutor";

    return (
        <div className="bg-primary w-full p-8 lg:px-16 pb-4 space-y-6">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <div className="w-16 h-16 flex flex-col">
                    <Link to={paths.home}>
                        <img
                            alt="логотип"
                            src="/logo/YOKI_LOGO_2_TRANSPARENT.png"
                        />
                    </Link>
                </div>
                {/* Social */}
                <ul className="text-background flex place-items-start items-center gap-4">
                    <li className="hover:text-secondary focus-within:text-secondary transition-colors duration-300">
                        <Link target="_blank" to={instagramLink}>
                            <Instagram size={32} />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" to={vkLink}>
                            <Icon36LogoVk
                                className="hover:text-secondary focus-within:text-secondary transition-colors duration-300"
                                color="white"
                            />
                        </Link>
                    </li>
                    <li className="hover:text-secondary focus-within:text-secondary transition-colors duration-300">
                        <Link target="_blank" to="mailto:yoki_hutor@mail.ru">
                            <Mail size={32} />
                        </Link>
                    </li>
                    <li className="hover:text-secondary focus-within:text-secondary transition-colors duration-300">
                        <Link
                            target="_blank"
                            to="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=119303830373"
                        >
                            <FaYandex size={28} />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="text-background text-center">
                <span className="text-sm font-medium leading-none">
                    Йокихутор &copy; 2024. Все права защищены.
                </span>
            </div>
        </div>
    );
};

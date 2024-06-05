import Hamburger from "hamburger-react";

export const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <div>
                    <h3>YOKI</h3>
                </div>
                <div>
                    <Hamburger distance="sm" size={32} />
                </div>
            </nav>
        </div>
    );
};

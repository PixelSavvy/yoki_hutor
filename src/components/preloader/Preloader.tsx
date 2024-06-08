import { GridLoader } from "react-spinners";

export const Preloader = () => {
    return (
        <div className="fixed w-full h-full inset-0 bg-primary flex flex-col place-items-center justify-center">
            <GridLoader color="#fff" />
        </div>
    );
};

import { amenitiesData } from "@/data";
import { About, Amenities, Hero } from "@/pages/home";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Amenities amenities={amenitiesData} />
        </>
    );
};

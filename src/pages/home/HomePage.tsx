import { amenitiesData } from "@/data";
import { About, Amenities, ExtraAmenities, Hero } from "@/pages/home";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Amenities amenities={amenitiesData} />
            <ExtraAmenities />
        </>
    );
};

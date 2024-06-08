import { amenitiesData } from "@/data";
import {
    About,
    Amenities,
    Attractions,
    ExtraAmenities,
    Hero,
} from "@/pages/home";

import { YandexMap } from "./yandex/YandexMap";
import { YandexTestimonials } from "./yandex/YandexTestimonials";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Amenities amenities={amenitiesData} />
            <ExtraAmenities />
            <Attractions />

            <YandexTestimonials />

            <YandexMap />
        </>
    );
};

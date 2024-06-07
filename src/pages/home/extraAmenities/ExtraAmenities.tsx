import { Section } from "@/components";
import { extraAmenitiesData } from "@/data";

import { ExtraAmenity } from "./ExtraAmenity";

export const ExtraAmenities = () => {
    return (
        <Section className="">
            <div className="w-full">
                <h2>радость в мелочах</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full ml-0 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {extraAmenitiesData.map((amenity) => (
                    <ExtraAmenity key={amenity.title} item={amenity} />
                ))}
            </ul>
        </Section>
    );
};

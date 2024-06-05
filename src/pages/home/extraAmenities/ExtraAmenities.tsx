import { Section } from "@/components";
import { extraAmenitiesData } from "@/data";

import { ExtraAmenity } from "./ExtraAmenity";

export const ExtraAmenities = () => {
    return (
        <Section className="container w-full">
            <div className="w-full">
                <h2>радость в мелочах</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full ml-0 gap-6">
                {extraAmenitiesData.map((amenity) => (
                    <ExtraAmenity key={amenity.title} item={amenity} />
                ))}
            </ul>
        </Section>
    );
};

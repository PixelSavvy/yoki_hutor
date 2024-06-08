import { Release } from "@/animations";
import { Section } from "@/components";
import { type amenitiesData } from "@/data";

import { AmenityList } from "./AmenityList";

export const Amenities = ({
    amenities,
}: {
    amenities: typeof amenitiesData;
}) => (
    <Section id="amenities">
        <Release>
            <h2>отдых с комфортром</h2>
            <p>
                В нашем коттедже вы найдёте всё необходимое для комфортного
                проживания:
            </p>
        </Release>
        <div className="ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            {amenities.map((amenity) => (
                <AmenityList key={amenity.title} amenity={amenity} />
            ))}
        </div>
    </Section>
);

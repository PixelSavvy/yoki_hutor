import { Section } from "@/components";
import { type amenitiesData } from "@/data";

import { AmenityList } from "./AmenityList";

export const Amenities = ({ amenities }: { amenities: typeof amenitiesData }) => (
    <Section className="space-y-4 container">
        <h2 className="capitalize">отдых с комфортром</h2>
        <p>В нашем коттедже вы найдёте всё необходимое для комфортного проживания:</p>
        <div className="ml-0">
            {amenities.map((amenity) => (
                <AmenityList key={amenity.title} amenity={amenity} />
            ))}
        </div>
    </Section>
);

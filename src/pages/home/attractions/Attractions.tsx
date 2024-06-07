import { Section } from "@/components";
import { attractionsData } from "@/data";

import { Attraction } from "./Attraction";

export const Attractions = () => {
    return (
        <Section>
            <div>
                <h2>Достопримечательности рядом с нами</h2>
                <p>
                    Погрузитесь в богатую культурную и природную среду Карелии с
                    рядом уникальных достопримечательностей
                </p>
            </div>
            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-0 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                    {attractionsData.map((attraction) => (
                        <Attraction key={attraction.title} data={attraction} />
                    ))}
                </ul>
            </div>
        </Section>
    );
};

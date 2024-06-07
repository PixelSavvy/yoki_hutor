import { CircleCheck } from "lucide-react";

import { type amenitiesData } from "@/data";

export const AmenityList = ({
    amenity,
}: {
    amenity: (typeof amenitiesData)[0];
}) => (
    <div>
        <h4>{amenity.title}</h4>
        <ul className="ml-0 space-y-4 ">
            {amenity.items.map((item) => (
                <li key={item} className="flex gap-2 place-items-start">
                    <span className="text-secondary">
                        <CircleCheck />
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

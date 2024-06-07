/* eslint-disable @typescript-eslint/naming-convention */
import { m } from "framer-motion";
import { IKImage } from "imagekitio-react";

import { type extraAmenitiesData } from "@/data";

export const ExtraAmenity = ({
    item,
}: {
    item: (typeof extraAmenitiesData)[0];
}) => {
    return (
        <m.li className="relative rounded-2xl overflow-clip">
            <div className="rounded-2xl">
                <IKImage
                    alt={item.alt}
                    className="aspect-square object-cover object-center rounded-2xl"
                    loading="lazy"
                    lqip={{ active: true, blur: 10, quality: 20 }}
                    path={item.path}
                    transformation={[]}
                />
                <div className="absolute inset-0 w-full h-full bg-foreground opacity-50" />
                {/* <m.div className="w-full h-full absolute inset-0 flex place-content-center place-items-center bg-primary z-20" /> */}
                <m.div className="absolute bottom-6 w-full left-0 px-4 text-background flex place-content-start items-center gap-4">
                    <item.icon className="text-secondary" size={64} />
                    <h3>{item.title}</h3>
                </m.div>
            </div>
        </m.li>
    );
};

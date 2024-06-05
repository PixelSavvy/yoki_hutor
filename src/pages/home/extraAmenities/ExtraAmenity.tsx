/* eslint-disable @typescript-eslint/naming-convention */
import { m, useInView } from "framer-motion";
import { IKImage } from "imagekitio-react";
import { useRef } from "react";

import { type extraAmenitiesData } from "@/data";

export const ExtraAmenity = ({
    item,
}: {
    item: (typeof extraAmenitiesData)[0];
}) => {
    const overlayVariant = {
        initial: { y: 0 },
        animate: {
            y: "100%",
        },
    };

    const itemVariant = {
        initial: {
            opacity: 0,
            y: "50%",
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };

    const textVariant = {
        initial: {
            opacity: 0,
            y: "100%",
            transition: {
                delay: 0.2,
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
            },
        },
    };

    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
        amount: 0.5,
    });

    return (
        <m.li
            animate={isInView ? "animate" : "initial"}
            className="relative rounded-2xl overflow-clip"
            initial="initial"
            variants={itemVariant}
        >
            <IKImage
                alt={item.alt}
                className="aspect-square object-cover object-center"
                loading="lazy"
                lqip={{ active: true, blur: 10, quality: 20 }}
                path={item.path}
                transformation={[]}
            />
            <div className="absolute inset-0 w-full h-full bg-black opacity-60" />
            <m.div
                ref={ref}
                animate={isInView ? "animate" : "initial"}
                className="w-full h-full absolute inset-0 flex place-content-center place-items-center bg-black z-20"
                initial="initial"
                variants={overlayVariant}
            />
            <m.div
                animate={isInView ? "animate" : "initial"}
                className="absolute bottom-6 w-full left-0 px-4 text-white flex place-content-start gap-4 "
                initial="initial"
                variants={textVariant}
            >
                <item.icon size={64} />
                <h3>{item.title}</h3>
            </m.div>
        </m.li>
    );
};

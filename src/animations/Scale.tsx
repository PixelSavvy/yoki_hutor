/* eslint-disable @typescript-eslint/naming-convention */
import { m, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib";

const releaseVariant = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
};

export const Scale = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px",
        amount: 0.5,
    });
    return (
        <m.div
            ref={ref}
            animate={isInView ? "animate" : "initial"}
            className={cn("w-full origin-center", className)}
            initial="initial"
            variants={releaseVariant}
        >
            {children}
        </m.div>
    );
};

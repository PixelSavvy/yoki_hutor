/* eslint-disable @typescript-eslint/naming-convention */
import { m, useInView } from "framer-motion";
import { useRef, type CSSProperties, type HTMLAttributes } from "react";

import { cn } from "@/lib";

const releaseVariant = {
    initial: {
        opacity: 0,
        y: "20%",
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

interface ReleaseProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;

    className?: string;
    style?: CSSProperties;
}

export const Release: React.FC<ReleaseProps> = ({
    className,
    children,
    style,
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
            className={cn("w-full", className)}
            initial="initial"
            style={style}
            variants={releaseVariant}
        >
            {children}
        </m.div>
    );
};

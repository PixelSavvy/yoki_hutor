import { AnimatePresence, LazyMotion, m, MotionConfig } from "framer-motion";

interface LazyMotionProviderProps {
    children: React.ReactNode;
}

export const LazyMotionProvider: React.FC<LazyMotionProviderProps> = ({
    children,
}) => {
    const features = () =>
        import("@/lib/features").then((module) => module.default);

    const transition = {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
    };

    const pageTransition = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
    };

    return (
        <MotionConfig reducedMotion="user" transition={transition}>
            <LazyMotion strict features={features}>
                <AnimatePresence>
                    <m.div
                        animate="animate"
                        className="flex flex-col place-items-center h-full"
                        initial="initial"
                        variants={pageTransition}
                    >
                        {children}
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </MotionConfig>
    );
};

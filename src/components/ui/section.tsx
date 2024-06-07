import { cn } from "@/lib";

type TSectionProps = React.HTMLAttributes<HTMLElement>;

export const Section: React.FC<TSectionProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <section
            {...props}
            className={cn(
                "py-16 md:py-20 lg:py-24 2xl:py-28 space-y-6 md:space-y-8 lg:space-y-10 container",
                className,
            )}
        >
            {children}
        </section>
    );
};

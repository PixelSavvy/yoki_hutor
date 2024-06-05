import { cn } from "@/lib";

type TSectionProps = React.HTMLAttributes<HTMLElement>;

export const Section: React.FC<TSectionProps> = ({ children, className, ...props }) => {
    return (
        <section {...props} className={cn("py-24 md:py-28 lg:py-32 2xl:py-36", className)}>
            {children}
        </section>
    );
};

import { m } from "framer-motion";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components";
import { type attractionsData } from "@/data";
import { cn } from "@/lib";

export const Attraction = ({ data }: { data: (typeof attractionsData)[0] }) => {
    return (
        <m.li
            className={cn(
                "transition-all ease-smooth duration-300 border border-neutral-200 rounded-xl flex flex-col",
            )}
        >
            <Card className="border-none rounded-xl shadow-none flex-1 flex flex-col justify-between pb-6">
                <CardHeader>
                    <CardTitle>{data.title}</CardTitle>
                </CardHeader>
                <CardContent className="shadow-none">
                    <p>{data.description}</p>
                </CardContent>
                <CardFooter className="pb-0">
                    <Button asChild>
                        <Link target="_blank" to={data.to}>
                            Подробнее
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </m.li>
    );
};

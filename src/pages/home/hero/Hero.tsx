/* eslint-disable @typescript-eslint/naming-convention */
import { IKImage } from "imagekitio-react";
import { Mouse } from "lucide-react";
import { Link } from "react-scroll";

import { Release } from "@/animations";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components";
import { heroCarousel } from "@/data";

export const Hero = () => {
    return (
        <Carousel
            autoPlay
            className="relative flex flex-col flex-1 place-items-center w-full"
            id="hero"
            opts={{
                loop: true,
                duration: 30,
            }}
            pluginOpts={{
                delay: 60000,
            }}
        >
            <CarouselContent className="ml-0 mt-0 h-full w-full">
                {heroCarousel.map((item) => (
                    <CarouselItem
                        key={item.path}
                        className="pl-0 pt-0 relative text-background w-full"
                    >
                        <IKImage
                            alt={item.alt}
                            className="aspect-video object-cover object-center min-h-screen "
                            lqip={{ active: true, blur: 10, quality: 20 }}
                            path={item.path}
                            transformation={[{ height: "auto", width: "auto" }]}
                        />

                        <div className="absolute inset-0 w-full h-full bg-black opacity-60" />
                        <Release className="absolute inset-y-[40%] w-full container max-w-lg md:inset-y-[30%] lg:max-w-3xl xl:max-w-4xl">
                            <figure>
                                <figcaption>
                                    <h1 className="">{item.title}</h1>
                                </figcaption>
                                <blockquote className="lg:max-w-xl xl:max-w-2xl">
                                    {item.paragraph}
                                </blockquote>
                            </figure>
                        </Release>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden lg:flex absolute bottom-12 cursor-pointer group text-white  flex-col justify-between items-center gap-2">
                <Link smooth spy duration={500} to="about">
                    <Mouse className="animate-bounce" size={40} />
                    <span>начать</span>
                </Link>
            </div>

            <div className="absolute bottom-[5rem] left-24 md:bottom-[30%]">
                <CarouselNext className="-translate-x-7 md:w-12 md:h-12 md:-translate-x-0" />
                <CarouselPrevious className=" md:w-12 md:h-12" />
            </div>
        </Carousel>
    );
};

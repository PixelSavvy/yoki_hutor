/* eslint-disable @typescript-eslint/naming-convention */
import { IKImage } from "imagekitio-react";
import { Mouse } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components";
import { heroCarousel } from "@/data";

export const Hero = () => {
    return (
        <Carousel
            autoPlay
            className="min-h-dvh relative flex flex-col place-items-center"
            opts={{
                loop: true,
                duration: 60,
            }}
            pluginOpts={{
                delay: 60000,
            }}
        >
            <CarouselContent className="ml-0 mt-0 flex-1 h-full">
                {heroCarousel.map((item) => (
                    <CarouselItem key={item.path} className="pl-0 pt-0 relative text-white">
                        <IKImage
                            alt={item.alt}
                            className="lg:aspect-video object-cover object-center h-full "
                            loading="lazy"
                            lqip={{ active: true, blur: 10, quality: 20 }}
                            path={item.path}
                            transformation={[{ height: "auto", width: "auto" }]}
                        />
                        <div className="absolute inset-0 w-full h-full bg-black opacity-60" />
                        <div className="absolute inset-0 inset-y-[40%] w-full container">
                            <figure>
                                <figcaption>
                                    <h1 className="capitalize">{item.title}</h1>
                                </figcaption>
                                <blockquote>{item.paragraph}</blockquote>
                            </figure>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute bottom-10 cursor-pointer group text-white">
                <Mouse className="hidden lg:block" size={40} />
            </div>

            <div className="absolute bottom-[5rem] left-20">
                <CarouselNext className="-translate-x-7" />
                <CarouselPrevious className="" />
            </div>
        </Carousel>
    );
};

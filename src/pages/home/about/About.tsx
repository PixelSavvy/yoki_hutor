import { Release } from "@/animations";
import { GalleryCarousel, Section } from "@/components";
import { images } from "@/data";

import { ImportantAlert } from "../alert/Important";

export const About = () => {
    return (
        <Section
            className="md:flex md:gap-12 lg:gap-16 xl:gap-20 md:space-y-0"
            id="about"
        >
            <div className="space-y-16 mb-10 flex-1">
                <Release className="">
                    <h2>О нас</h2>
                    <p className="max-w-lg">
                        Йокихутор – это гостевой дом в Карелии, созданный для
                        тех, кто ценит спокойствие и комфорт. Мы предлагаем
                        уютный отдых в окружении живописной природы, где каждая
                        деталь продумана для вашего удовольствия. Наш дом
                        идеально подходит для семейного отдыха, где вы сможете
                        расслабиться и насладиться каждым моментом.
                    </p>
                </Release>
                <div className="">
                    <ImportantAlert />
                </div>
            </div>
            {/* image */}
            <div className="flex-1">
                <GalleryCarousel images={images} />
            </div>
        </Section>
    );
};

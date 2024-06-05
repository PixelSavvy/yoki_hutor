import { Section } from "@/components";

import { ImageGallery } from "../ImageGallery";

export const About = () => {
    return (
        <Section className="container  md:flex md:gap-6 lg:gap-8 xl:gap-10 md:space-y-0">
            <div className="space-y-6 mb-10">
                <div>
                    <h2>О нас</h2>
                    <p>
                        Йокихутор – это гостевой дом в Карелии, созданный для тех, кто ценит спокойствие и комфорт. Мы
                        предлагаем уютный отдых в окружении живописной природы, где каждая деталь продумана для вашего
                        удовольствия. Наш дом идеально подходит для семейного отдыха, где вы сможете расслабиться и
                        насладиться каждым моментом.
                    </p>
                </div>
            </div>
            {/* image */}
            {/* <div className="relative">
                <IKImage
                    className="rounded-lg aspect-square object-cover object-center"
                    loading="lazy"
                    lqip={{ active: true, blur: 10, quality: 20 }}
                    path="Yoki_Hutor/2024-05-20%2020-02-16_4Jmne73NP.jpeg?updatedAt=1717581673574"
                />
            </div> */}
            <ImageGallery />
        </Section>
    );
};

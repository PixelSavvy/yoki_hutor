import { Car, TrainFront } from "lucide-react";
import { type CSSProperties } from "react";

import { Release } from "@/animations";
import { Section } from "@/components";

const containerStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    // height: "400px",
};

const iframeStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    boxSizing: "border-box",
};

const smallLinkStyle: CSSProperties = {
    color: "#eee",
    fontSize: "12px",
    position: "absolute",
};

export const YandexMap = () => {
    return (
        <Section className="pb-12 md:pb-16 lg:pb-20" id="contact">
            <Release>
                <h2>Как до нас добраться</h2>
                <p>Добраться до нас можно несколькими способами:</p>
            </Release>
            <div>
                <ul className="ml-0 space-y-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-between">
                    <li className="max-w-md">
                        <div className="mb-4 text-secondary">
                            <Car size={40} />
                            <h4>На автомобиле</h4>
                        </div>
                        <span className="">
                            по трассе &#171;Санкт-Петербург – Сортавала&#187;,
                            210 км. Координаты для навигатора:
                            <span className="text-primary ml-1">
                                61.488439, 29.996988
                            </span>
                        </span>
                    </li>
                    <li className="max-w-xl">
                        <div className="mb-4 text-secondary">
                            <TrainFront size={40} />
                            <h4>Поездом</h4>
                        </div>
                        <span className="">
                            скоростной поезд &#171;Ласточка&#187; до станции
                            &#171;Яккима&#187;, далее на такси; поезд
                            &#171;Санкт-Петербург – Костомукша&#187; с
                            остановкой в поселке Ихала
                        </span>
                    </li>
                </ul>
            </div>

            <div
                className="h-[300px] md:h-[400px] lg:h-[600px]"
                style={containerStyle}
            >
                <a
                    href="https://yandex.ru/maps/org/yokikhutor/119303830373/?utm_medium=mapframe&utm_source=maps"
                    style={{ ...smallLinkStyle, top: "0px" }}
                >
                    Йокихутор
                </a>
                <a
                    href="https://yandex.ru/maps/10933/republic-of-karelia/category/resort/184106400/?utm_medium=mapframe&utm_source=maps"
                    style={{ ...smallLinkStyle, top: "14px" }}
                >
                    База, дом отдыха в Республике Карелия
                </a>
                <iframe
                    allowFullScreen
                    frameBorder="1"
                    height="400"
                    src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=29.998236%2C61.488513&mode=search&oid=119303830373&ol=biz&source=mapframe&utm_source=mapframe&z=16.79"
                    style={iframeStyle}
                    title="ЙОКИХУТОР на карте Яндекса"
                    width="560"
                />
            </div>
        </Section>
    );
};

import { type CSSProperties } from "react";

const containerStyle: CSSProperties = {
    overflow: "hidden",
    position: "relative",
    height: "400px",
};

const iframeStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    boxSizing: "border-box",
};

const linkStyle: CSSProperties = {
    boxSizing: "border-box",
    textDecoration: "none",
    color: "#b3b3b3",
    fontSize: "10px",
    fontFamily: "YS Text, sans-serif",
    padding: "0 16px",
    position: "absolute",
    bottom: "8px",
    width: "100%",
    textAlign: "center",
    left: "0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
    maxHeight: "14px",
    whiteSpace: "nowrap",
};

export const YandexTestimonials = () => {
    return (
        <>
            <div className="w-full">
                <h2>Что говорят наши гости</h2>
            </div>
            <div style={containerStyle}>
                <iframe
                    src="https://yandex.ru/maps-reviews-widget/119303830373?comments"
                    style={iframeStyle}
                    title="Отзывы о Йокихуторе на Яндекс Картах"
                />
                <a
                    href="https://yandex.ru/maps/org/yokikhutor/119303830373/"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    target="_blank"
                >
                    Йокихутор на карте Республики Карелия — Яндекс Карты
                </a>
            </div>
        </>
    );
};

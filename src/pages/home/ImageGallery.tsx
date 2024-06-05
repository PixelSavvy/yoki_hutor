import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Button } from "@/components";

const images = [
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16_4Jmne73NP.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16_4Jmne73NP.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(44)_eQNtxiEI5.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(44)_eQNtxiEI5.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(24)_RE4-0RTRm.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(24)_RE4-0RTRm.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(10)_TspkIPLXc.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-10%2012-41-17%20(10)_TspkIPLXc.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-15%2011-46-47%20(1)_I7BOaTNNk.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-15%2011-46-47%20(1)_I7BOaTNNk.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16%20(3)_GvzKbR3sR.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16%20(3)_GvzKbR3sR.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
    {
        original:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16%20(4)_R0chzFZe1.jpeg?",
        thumbnail:
            "https://ik.imagekit.io/jusiu7gbs/Yoki_Hutor/2024-05-20%2020-02-16%20(4)_R0chzFZe1.jpeg?tr=w-350,h-450",
        originalHeight: 1000,
        originalWidth: 1000,
    },
];

export const ImageGallery = () => {
    return (
        <ReactImageGallery
            lazyLoad
            showIndex
            showNav
            indexSeparator=" из "
            items={images}
            showPlayButton={false}
            showThumbnails={false}
            useBrowserFullscreen={false}
            renderLeftNav={(onClick, disabled) => (
                <Button
                    aria-label="Previous Slide"
                    className="image-gallery-icon image-gallery-left-nav bg-transparent hover:bg-transparent text-white hover:text-white shadow-none"
                    disabled={disabled}
                    type="button"
                    variant="ghost"
                    onClick={onClick}
                >
                    <CircleChevronLeft size={32} />
                </Button>
            )}
            renderRightNav={(onClick, disabled) => (
                <Button
                    aria-label="Previous Slide"
                    className="image-gallery-icon image-gallery-right-nav bg-transparent hover:bg-transparent text-white hover:text-white shadow-none"
                    disabled={disabled}
                    type="button"
                    variant="ghost"
                    onClick={onClick}
                >
                    <CircleChevronRight size={32} />
                </Button>
            )}
        />
    );
};

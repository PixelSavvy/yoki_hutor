/* eslint-disable @typescript-eslint/naming-convention */
// File: GalleryCarousel.tsx

import { AnimatePresence, m } from "framer-motion";
import { IKImage } from "imagekitio-react";
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { Button } from "./button";

interface FullscreenModalProps {
    image: string;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({
    image,
    isOpen,
    onClose,
    onNext,
    onPrevious,
}) => {
    const swipeHandlers = useSwipeable({
        onSwipedLeft: onNext,
        onSwipedRight: onPrevious,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <AnimatePresence>
            {isOpen ? (
                <m.div
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-foreground z-20 flex justify-center items-center"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    onClick={onClose}
                    {...swipeHandlers}
                >
                    <Button
                        className="absolute top-4 right-0 p-0 md:right-[5%] lg:right-[10%] xl:right-[20%] bg-transparent hover:bg-transparent focus-within:bg-transparent text-white text-3xl cursor-pointer"
                        size="icon"
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                    >
                        <X size={32} />
                    </Button>
                    <Button
                        className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-[5%] lg:right-[10%] xl:left-[20%] bg-secondary bg-opacity-50 text-background rounded-full p-0"
                        size="icon"
                        type="button"
                        variant="secondary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                    >
                        <ChevronLeft />
                    </Button>
                    <IKImage
                        alt="Fullscreen"
                        className="max-w-full max-h-full aspect-square object-cover object-center md:p-16  p-4"
                        lqip={{ active: true, blur: 10, quality: 20 }}
                        path={image}
                        role="presentation"
                        transformation={[{ height: "auto", width: "auto" }]}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />

                    <Button
                        className="absolute top-1/2 transform -translate-y-1/2 right-0 md:right-[5%] lg:right-[10%] xl:right-[20%] bg-secondary bg-opacity-50 text-background rounded-full p-0"
                        size="icon"
                        type="button"
                        variant="secondary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                    >
                        <ChevronRight />
                    </Button>
                </m.div>
            ) : null}
        </AnimatePresence>
    );
};

interface Image {
    original: string;
    thumbnail: string;
}

interface GalleryCarouselProps {
    images: Image[];
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length,
        );
    };

    const handleFullscreen = () => {
        setIsFullscreenOpen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreenOpen(false);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrevious,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div className="flex flex-col items-center w-full" {...swipeHandlers}>
            {/* Thumbnail */}
            <div className="relative w-full mb-4">
                <div>
                    <IKImage
                        alt="Carousel"
                        className="w-full rounded-lg aspect-square object-cover object-center"
                        lqip={{ active: true, blur: 10, quality: 20 }}
                        path={images[currentIndex]?.original ?? ""}
                        transformation={[{ height: "", width: "auto" }]}
                    />
                </div>
                {/* Previous */}
                <Button
                    className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-secondary bg-opacity-50 text-background rounded-full"
                    size="icon"
                    variant="secondary"
                    onClick={handlePrevious}
                >
                    <ChevronLeft />
                </Button>
                {/* Next */}
                <Button
                    className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-secondary bg-opacity-50 text-background rounded-full"
                    size="icon"
                    variant="secondary"
                    onClick={handleNext}
                >
                    <ChevronRight />
                </Button>
                {/* Fullscreen */}
                <Button
                    className="absolute bottom-2 right-2  text-background p-2 rounded-full bg-transparent hover:bg-transparent focus-within:bg-transparent"
                    size="icon"
                    type="button"
                    onClick={handleFullscreen}
                >
                    <Maximize size={32} />
                </Button>
            </div>
            {/* Nav */}
            <div className="justify-start items-center hidden md:flex gap-2 space-y-0.5 flex-wrap mb-4 w-full">
                {images.map((image, index) => (
                    <IKImage
                        key={image.thumbnail}
                        alt={`Thumbnail ${(index + 1).toString()}`}
                        lqip={{ active: true, blur: 10, quality: 20 }}
                        path={image.thumbnail}
                        role="presentation"
                        transformation={[{ height: "auto", width: "auto" }]}
                        className={`w-10 h-10 md:w-16 md:h-16 rounded-md cursor-pointer ${
                            index === currentIndex
                                ? "border-2 border-secondary"
                                : ""
                        }`}
                        onClick={() => {
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>

            {/* Modal */}
            <FullscreenModal
                image={images[currentIndex]?.original ?? ""}
                isOpen={isFullscreenOpen}
                onClose={closeFullscreen}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </div>
    );
};

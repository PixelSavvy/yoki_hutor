export const generateSrcSet = (path: string, widths: string[]): string => {
    return widths
        .map((width) => {
            const transformation = `tr=w-${width}`;
            const url = `${import.meta.env.VITE_IMAGEKIT_URL}/${path}?${transformation}`;
            return `${url} ${width}w`;
        })
        .join(", ");
};

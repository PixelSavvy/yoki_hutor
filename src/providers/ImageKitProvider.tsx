import { IKContext } from "imagekitio-react";

interface ImageKitContextProps {
	children: React.ReactNode;
}

export const ImageKitProvider: React.FC<ImageKitContextProps> = ({ children }) => {
	return <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}>{children}</IKContext>;
};

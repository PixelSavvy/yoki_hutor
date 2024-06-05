import { BrowserRouter } from "react-router-dom";

import { ImageKitProvider, LazyMotionProvider } from "@/providers";
import { AppRoutes as Routes } from "@/router";

export const App = () => {
	return (
		<BrowserRouter>
			<ImageKitProvider>
				<LazyMotionProvider>
					<Routes />
				</LazyMotionProvider>
			</ImageKitProvider>
		</BrowserRouter>
	);
};

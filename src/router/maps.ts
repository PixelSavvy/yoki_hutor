import { elements } from './elements';
import { paths } from './paths';

export const maps = {
  root: {
    path: paths.root,
    element: elements.Root,
    children: [
      {
        path: paths.home,
        element: elements.Home,
      },
    ],
  },
};

import { ColorMode } from "componets/ColorMode/ColorMode";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return (
    <>
      <ColorMode />
      <RouterProvider router={router} />
    </>
  );
};

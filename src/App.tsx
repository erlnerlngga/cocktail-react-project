import React, { FC, ReactElement } from "react";
import About from "./pages/About";
import SingleCocktail, { singleLoader } from "./pages/SingleCocktail";
import { listLoader } from "./components/CocktailList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={listLoader}
        errorElement={<Error />}
      />
      <Route path="/about" element={<About />} errorElement={<Error />} />
      <Route
        path="/cocktail/:id"
        loader={singleLoader}
        element={<SingleCocktail />}
        errorElement={<Error />}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App: FC = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;

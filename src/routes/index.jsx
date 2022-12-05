import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import CartContainer from "../containers/CartContainer";
import Formulario from "../components/Formulario";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No se ha encontrado la ruta indicada</h1>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer />,
            },
            {
                path: "/cart",
                element: <CartContainer />
            },
            {
                path: "/form",
                element: <Formulario/>
            }
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

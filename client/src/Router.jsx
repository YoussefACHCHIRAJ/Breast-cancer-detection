import { useRoutes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DiagnosticPage from "./pages/DiagnosticPage";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";


const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <DefaultLayout />,
            errorElement: <ErrorPage /> ,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "/diagnostic",
                    element: <DiagnosticPage />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
            ]
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        }
    ]);
    return routes
}

export default Router

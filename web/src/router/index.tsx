import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
const Home = lazy(() => import("@/pages/home/HomePage"));
const About = lazy(() => import("@/pages/home/AboutPage"));
const NotFound = lazy(() => import("@/pages/home/NotFoundPage"));

export const router = createBrowserRouter([
    // === home ===
    {
        path: "/",
        element: (
            <Suspense>
                <Home />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense>
                <About />
            </Suspense>
        ),
    },

    // === 404 ===
    {
        path: "*",
        element: (
            <Suspense>
                <NotFound />
            </Suspense>
        ),
    },
])
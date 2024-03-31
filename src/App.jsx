import { Suspense, lazy } from "react";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./root/pages/Home";
import store from "./lib/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "./lib/shadcn/ui/toaster";
import Payment from "./root/pages/Payment";
const Signin = lazy(() => import("./auth/forms/Signin"));
const Signup = lazy(() => import("./auth/forms/Signup"));
const Offers = lazy(() => import("./root/pages/Offers"));
const Support = lazy(() => import("./root/pages/Support"));
const Cart = lazy(() => import("./root/pages/Cart"));
const Search = lazy(() => import("./root/pages/Search"));
const RestaurantCollections = lazy(() => import("./root/pages/RestaurantCollections"));
const RestaurantMenu = lazy(() => import("./root/pages/RestaurantMenu"));

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <Suspense ><Signin /></Suspense>
      },
      {
        path: "/sign-up",
        element: <Suspense ><Signup /></Suspense>
      }
    ]
  },
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collections/:collectionId",
        element: <Suspense><RestaurantCollections /></Suspense>
      },
      {
        path: "/restaurant/:restaurantID",
        element: <Suspense><RestaurantMenu /></Suspense>
      },
      {
        path: "/offers-near-me",
        element: <Suspense><Offers /></Suspense>
      },
      {
        path: "/support",
        element: <Suspense><Support /></Suspense>
      },
      {
        path: "/checkout",
        element: <Suspense><Cart /></Suspense>
      },
      {
        path: "/search",
        element: <Suspense><Search /></Suspense>
      },
    ]
  },
  {
    element: <Payment />,
    path: "/payments"
  }
])

const App = () => {
  return (
    <main className="bg-black">
      <ReduxProvider store={store} >
        <RouterProvider router={router}>
        </RouterProvider>
      </ReduxProvider >
      <Toaster />
    </main>
  )
}

export default App
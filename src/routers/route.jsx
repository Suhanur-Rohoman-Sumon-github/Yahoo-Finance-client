import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/home-page/Home";
import Shere from "../pages/shere-market/Shere";

const router = createBrowserRouter([
{
    path:"/",
    element:<Main />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/shere",
            element:<Shere />
        }
    ]
}
])

export default router
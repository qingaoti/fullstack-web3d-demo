import Login from "../pages/Login"
import Home from "../pages/Home"
import Page404 from "../pages/Page404"
import AdminList from "../pages/admin/List"
import Simulation from "../pages/web3D/Simulation";
import About from "../pages/other/About";
import Lingo3d from "../pages/web3D/Lingo3d";
import Lingo3dDemo2 from "../pages/web3D/Lingo3dDemo2";


export const routes = [
    { path: "/home", element: <Home />, children: [
        { path: "admin", element: <AdminList /> },
        { path: "web3d", element: <Simulation /> },
        { path: "lingo3d", element: <Lingo3d /> },
        { path: "lingo3dDemo2", element: <Lingo3dDemo2 /> },
        { path: "about", element: <About /> }
    ]},
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
    { path: "*", element: <Page404 /> },
]



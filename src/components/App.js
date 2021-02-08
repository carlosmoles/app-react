import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import baseURL from "../config";
import Loading from "./Loading";
import '../css/main.min.css';

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Categoria = lazy(() => import("./Categoria"));
const Grupo = lazy(() => import("./Grupo"));
const Home = lazy(() => import("./Home"));
const Producto = lazy(() => import("./Producto"));
const NotFound = lazy(() => import("../pages/404"));

const App = () => {
    const menu = useFetch(`${baseURL}/menu-principal/1`);
    return (
        <Suspense fallback={Loading}>
            <BrowserRouter>
                <Header itemsMenu={menu} />
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/:grupo/:categoria/:idProduct" component={Producto}/>
                        <Route exact={true} path="/:grupo/:categoria" component={Categoria}/>
                        <Route exact={true} path="/:grupo" component={Grupo}/>
                        <Route component={NotFound}/>
                    </Switch>
                <Footer />
            </BrowserRouter>
        </Suspense>
    )

}

export default App
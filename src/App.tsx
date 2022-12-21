import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import {store} from './redux/store';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const Users = React.lazy(() => import('./components/Pages/Users'));
const MouseMoving = React.lazy(() => import('./components/Pages/MouseMoving'));
const RenderCounter = React.lazy(() => import('./components/Pages/RenderCounter'));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <>
                    <Header />
                    <Switch>
                        <Route path="/users"
                           render={() => {
                               return <React.Suspense fallback={<Loading />}>
                                   <Users  />
                               </React.Suspense>
                           }} />
                        <Route path="/mouse-moving"
                           render={() => {
                               return <React.Suspense fallback={<Loading />}>
                                   <MouseMoving />
                               </React.Suspense>
                           }} />
                        <Route path="/render-counter"
                           render={() => {
                               return <React.Suspense fallback={<Loading />}>
                                   <RenderCounter />
                               </React.Suspense>
                           }} />
                    </Switch>
                    <Footer />
                </>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
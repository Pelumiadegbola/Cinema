import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Categories from './containers/Categories';
import Preview from './components/common/Preview';
import Watchlist from './containers/Watchlist';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/categories'} component={Categories} />
                <Route exact path={'/preview/:id/'} component={Preview} />
                <Route exact path={'/watchlists'} component={Watchlist} />
            </Switch>
        </>
    );
};
export default Router;
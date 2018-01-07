import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { css } from 'emotion';

import Header from 'components/common/Header';

import IndexPage from 'components/page/IndexPage';
import TrackPage from 'components/page/TrackPage';

import { globalStyle } from 'style/commonStyles';
class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
        return (
            <div className={globalStyle}>
                <Header />
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/track" component={TrackPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

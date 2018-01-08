import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import  { Link } from 'react-router-dom';
// import { css } from 'emotion';

import SideBar from 'components/SideBar';
import MainWindow from 'components/MainWindow';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'IndexPage';

        this.state = {
            coinData: {}
        }

        this.changeView = this.changeView.bind(this);
    }

    changeView(data) {
        this.setState({ coinData: data});
    }

    render() {
        return (
            <div className="clearfix">
                <SideBar onItemClick={this.changeView}/>
                <MainWindow view={this.state.coinData} />
            </div>
        );
    }
}

export default IndexPage;

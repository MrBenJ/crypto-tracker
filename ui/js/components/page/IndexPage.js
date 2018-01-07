import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import  { Link } from 'react-router-dom';
import { css } from 'emotion';

import SideBar from 'components/SideBar';
import MainWindow from 'components/MainWindow';

import { Text, Title } from 'components/common';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'IndexPage';

    }

    render() {

        const styles = css`

        `;

        return (
            <div className="clearfix">
                <SideBar />
                <MainWindow />
            </div>
        );
    }
}

export default IndexPage;

import React, { Component } from 'react';

import SideBar from 'components/SideBar';

class TrackPage extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'TrackPage';
    }

    render() {

        return (
            <div className="">
                <SideBar />
            </div>
        )
    }
}

export default TrackPage;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { Text } from 'components/common';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'SideBar';

    }

    render() {
        const style = css`
            width: 20%;
            display: inline-block;

        `;

        const { tracker } = this.props;
        let content;

        if(!tracker.length) {
            content = (
                <div className="no-track-zero-state">
                    <Text>
                        You aren&apos;t tracking any currencies right now.
                    </Text>
                </div>
            );
        }

        return (
            <div className={classNames(this.props.className, style)}>
                {content}
            </div>
        );
    }
}

SideBar.defaultProps = {
    tracker: []
};

SideBar.propTypes = {
    className: PropTypes.string,
    tracker: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        tracker: state.tracker
    };
}

export default connect(mapStateToProps)(SideBar);
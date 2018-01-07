import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Text } from 'components/common';

class MainWindow extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainWindow';
    }

    render() {

        const style = css`
            width: 80%;
            display: inline-block;
        `;
        const { tracker, className } = this.props;

        let content;

        if(!tracker.length) {
            content = (
                <div className="no-track-zero-state">
                    <Text>
                        You aren&apos;t tracking any currencies right now. 
                        <Link to="/track">Click here</Link> to add a currency

                    </Text>

                </div>
            );
        }

        return (
            <div className={classNames(style, className)}>
                {content}
            </div>
        );
    }
}

MainWindow.defaultProps = {
    tracker: []
};

MainWindow.propTypes =  {
    className: PropTypes.string,
    tracker: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        tracker: state.tracker
    };
}



export default connect(mapStateToProps)(MainWindow);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'components/common';
import SideBar from 'components/SideBar';
import CoinBadge from 'components/CoinBadge';
import * as coinActions from 'js/actions/coinActions';
import * as trackerActions from 'js/actions/trackerActions';

class TrackPage extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'TrackPage';
        
        this.state = {
            filter: ''
        };

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
    }

    onFilterTextChange({target: { value }}) {
        if(value.length > 5) { return; }
        this.setState({
            filter: value.toLowerCase()
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.coinActions.getCoins(false, this.props.coins);    
        }, 10);
        
    }

    render() {

        const { tracker, coins, trackerActions } = this.props;
        
        const { filter } = this.state;
        const style = css`
            display: inline-block;
            vertical-align: top;
            width: 80%;
            padding: .5rem;

            .untracked-coins-wrapper {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                flex-direction: row;
                max-height: 400px;
                overflow-y: scroll;
            }

            .coin-badge {
                
            }

            .filter-label {
                display: inline-block;
                margin-right: 1rem;
            }

            .filter-label-text {
                font-size: 1.1rem;
                
            }

            .filter-input {
                display: inline-block;
            }
        `;

        return ( 
            <div className="">
                <div className={style}>
                    <Text>You are tracking the following coins (Click to remove)</Text>
                    <div className="">
                        {tracker.length ? tracker.map( coin => (
                            <CoinBadge 
                                name={coin.toUpperCase()}
                                key={coin}
                                onClick={() => trackerActions.removeCoin(coin)}
                            />
                        )) : (<Text>You are not tracking any coins right now </Text>)}
                    </div>
                    <Text>Click on a coin to start tracking it</Text>
                    <label htmlFor="coin-filter" className="filter-label">
                        <Text className="filter-label-text">Find a coin here</Text>
                    </label>
                    <input 
                        id="coin-filter"
                        className="filter-input"
                        type="text" 
                        onChange={this.onFilterTextChange}
                        value={this.state.filter}/>
                    <div className="untracked-coins-wrapper">
                        {Object.keys(coins)
                            .filter(name => name.includes(filter))
                            .map( coinName => (
                            <CoinBadge 
                                name={coinName}
                                className={`coin-badge ${tracker.includes(coinName) ? 'disable' : ''}`}
                                key={coinName}
                                disable={tracker.includes(coinName)}
                                onClick={() => trackerActions.addCoin(coinName)}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
        );
    }

}

function mapStateToProps({ tracker, coins}) {
    return {
        tracker,
        coins
    };
}

function mapDispatchToProps(dispatch) {
    return {
        "coinActions": bindActionCreators(coinActions, dispatch),
        "trackerActions": bindActionCreators(trackerActions, dispatch)
    };
}

TrackPage.defaultProps = {
    tracker: []
};

TrackPage.propTypes = {
    tracker: PropTypes.array,
    trackerActions: PropTypes.object,
    coins: PropTypes.object,
    coinActions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);

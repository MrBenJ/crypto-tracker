import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text } from 'components/common';
import * as trackerActions from 'js/actions/trackerActions';
import * as priceActions from 'js/actions/priceActions';
// import classNames from 'classnames';


class SideBarItem extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'SideBarItem';

        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        if(this.props.onClick) {
            const { prices, coin } = this.props;
            this.props.onClick(prices.find(coinItem => coinItem.ticker === coin));
        }
    }

    componentDidMount() {
        const { coin, prices, priceActions } = this.props;

        if(!prices.filter( item => item.ticker === coin ).length) {
            priceActions.getPrice(coin);
        }
        
    }

    render() {
        const style = css`
            height: 5rem;
            cursor: pointer;
            transition: background-color .5s ease;
            &:hover {
                background-color: lightgray;
            }
        `;

        const { prices, coin, trackerActions } = this.props;
        
        const priceObject = prices.find(coinItem => coinItem.ticker === coin);
        const price = priceObject ? priceObject.usd : 'Loading...';
        return (
            <div className={style} onClick={this.onClick}>
                <Text>{this.props.coin.toUpperCase()}</Text>
                <Text>Price: {`$ ${price}`}</Text>
                <button onClick={() => trackerActions.removeCoin(coin)}>Remove {`${coin.toUpperCase()}`}</button>
            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        prices: state.prices
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "priceActions": bindActionCreators(priceActions, dispatch),
        "trackerActions": bindActionCreators(trackerActions, dispatch)
    }
}
SideBarItem.propTypes = {
    coin: PropTypes.string.isRequired,
    trackerActions: PropTypes.object,
    prices: PropTypes.array,
    priceActions: PropTypes.object,
    onClick: PropTypes.func
}

export { SideBarItem };
export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem);
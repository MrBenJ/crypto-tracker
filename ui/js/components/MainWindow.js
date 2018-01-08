import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import Chart from 'chart.js';
import axios from 'axios';

import { Text, Title } from 'components/common';

class MainWindow extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainWindow';
        this.getChartData = this.getChartData.bind(this);
    }

    async getChartData(ticker) {
        try {
            const HISTORICAL_DATA_ENDPOINT = `https://coinbin.org/${ticker}/history`;
            const resp = await axios.get(HISTORICAL_DATA_ENDPOINT);

            return resp.data;    
        } catch(error) {
            return error;
        }
        
    }

    render() {

        const style = css`
            width: 78%;
            display: inline-block;
            padding-left: 1rem;
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
        } else if(this.props.view && this.props.view.name) {
            const { name, ticker, usd } = this.props.view;
            content = (
                <div>
                    { /* Data is adding ... at the end... WHY!??? */}
                    <Title>{name.split(' ')[0]}</Title>
                    <Text>Ticker symbol: {ticker.toUpperCase()}</Text> 
                    <Text>Price: ${usd}</Text>
                    <Title>Historical Data</Title>
                    <canvas id="chart" height="200" width="600" />
                </div>
            );
        } else {
            content = (
                <Text className="select-text"> Select a currency on the left to view information about it</Text>
            );
        }

        return (
            <div className={classNames(style, className)}>
                {content}
            </div>
        );
    }

    componentDidUpdate() {
        const ctx = document.getElementById('chart');
        if(ctx) {
            this.getChartData(this.props.view.ticker).then( data => {
                const MAX_POINTS = 20;
                // Too much data. Just getting MAX_POINTS worth, and then
                // reversing because it comes in reverse chronological
                const shortRawData = data.history.slice(0, MAX_POINTS).reverse();
                let chartData = {
                    type: 'bar',
                    data: {
                        labels: [],
                        datasets: [
                            { 
                                data: [], 
                                backgroundColor: '#1e90ff',
                                label: 'USD'
                            }
                        ]
                    }

                };

                shortRawData.forEach( item => {
                    chartData.data.labels.push(
                        Moment(item.timestamp).format('M/D/YY')
                    );
                    chartData.data.datasets[0].data.push(item.value)
                });
                
                if(this.chart) {this.chart.destroy(); }
                this.chart = new Chart( ctx, chartData);
                
            }).catch (() => {
                // This is where I would handle the error...
                // console.error('something went wrong', error);
            });
        }
    }
}

MainWindow.defaultProps = {
    tracker: []
};

MainWindow.propTypes =  {
    className: PropTypes.string,
    tracker: PropTypes.array.isRequired,
    view: PropTypes.object
};

function mapStateToProps(state) {
    return {
        tracker: state.tracker
    };
}

export { MainWindow };
export default connect(mapStateToProps)(MainWindow);
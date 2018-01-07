import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from 'emotion';

export default function CoinBadge({name, onClick, className, disable}) {
    const style = css`
        display: inline-block;
        padding: .5rem 1rem;
        background-color: dodgerblue;
        cursor: pointer;
        width: 3rem;
        text-align: center;
        border-radius: 1rem;
        margin: .5rem;

        &:hover {
            background-color: orange;
        }

        &.disable {
            background-color: lightgray;
            &:hover { cursor: not-allowed; }
        }
    `;
    return (
        <div className={classNames(style, className)} onClick={disable ? null : onClick}>
            {name.toUpperCase()}
        </div>
    )
}

CoinBadge.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disable: PropTypes.bool,
    onClick: PropTypes.func
};
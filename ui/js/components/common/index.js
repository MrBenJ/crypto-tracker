import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as commonStyles from 'style/commonStyles';

export function Title({children}) {
    return <h1 className={commonStyles.TitleStyle}>{children}</h1>
}

Title.propTypes = { children: PropTypes.any.isRequired };

export function Text({children, className}) {
    return <p className={classNames(commonStyles.TextStyle, className)}>{children}</p>
}

Text.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};

export function Code({children}) {
    return (
        <pre className={commonStyles.CodeStyle}>
            <code>{children}</code>
        </pre>
    );
}
Code.propTypes = {
    children: PropTypes.any.isRequired
};


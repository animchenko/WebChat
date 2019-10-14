import React from 'react';
import PropType from 'prop-types'
import { Button as ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import className from 'classnames';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
})


const Button = props => {
    const classes = useStyles();

    return (
        <ButtonBase {...props} className={classes.root} />
    );
}

/*Button.propType = {
    className: PropType.string
};*/

export default Button;
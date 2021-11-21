import React from 'react';
import useStyles from './style';

const ButtonPixel = ({children, step = 10, width = 216, height = 72, onClick = null, mainColor = '#FF7271', lightColor = '#FF9F9E', darkColor = '#F45553', shadowColor = '#CACACA', disabled, colorType, textColor, ...other}) => {
    const classes = useStyles({
        width,
        height,
        mainColor,
        lightColor,
        darkColor,
        shadowColor,
        disabled,
        colorType,
        textColor,
        step,
    });

    return (
        <div
            {...other}
            className={`${classes.wrapButtonPixel} wrapButtonPixel ${other.className || ''}`}
            onClick={disabled ? null : onClick}
        >
            <div className={`${classes.buttonPixel} buttonPixel`}>
                { children }
            </div>
            <div className={`${classes.innerPixel} innerPixel`} />
        </div>
    )
};

export default ButtonPixel;
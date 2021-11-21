import React from 'react'
import useStyles from 'components/UI/HeaderBanner/style';


const HeaderBanner = ({ children, bgColor}) => {
    const classes = useStyles({ bgColor })

    return (
        <div className={classes.HeaderBanner}>
            { children }
        </div>
    )
}

export default HeaderBanner;

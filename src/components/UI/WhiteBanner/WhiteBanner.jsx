import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import useStyles from 'components/UI/WhiteBanner/style';

const WhiteBanner = ({ children }) => {
    const classes = useStyles()

    return (
        <>
            <Banner addedClass={classes.whiteBanner}>
                { children }
            </Banner>
        </>
    )
}

export default WhiteBanner;

import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import MediaBanner from 'components/MediaBanner/MediaBanner';
import EcoBanner from 'components/EcoBanner/EcoBanner';
import DobroBanner from 'components/DobroBanner/DobroBanner';
import DriveBanner from 'components/DriveBanner/DriveBanner';
import useStyles from './style';

const Main = () => {
    const classes = useStyles();

    return (
        <div className={'container'}>
            <Banner addedClass={classes.mediaBanner}>
                <MediaBanner />
            </Banner>
            
            <Banner addedClass={classes.ecoBanner}>
                <EcoBanner />
            </Banner>

           <Banner addedClass={classes.dobroBanner}>
                <DobroBanner />
            </Banner>

            <Banner addedClass={classes.driveBanner}>
                <DriveBanner />
            </Banner>
        </div>
    )
}
export default Main;
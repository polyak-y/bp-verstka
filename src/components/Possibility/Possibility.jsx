import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import flash from 'assets/images/flash.svg';
import useStyles from './style';

 const Possibility = () => {
    const classes = useStyles();

    return (
        <div className={classes.Possibility}>
            <h3 className={classes.headingMob}>КОНКУРС – <br /> это ВОЗМОЖНОСТь </h3>
            <div className={classes.PossibilityWrap}>
                <img className={classes.img} src={flash} alt="flash" />
                <div>
                    <h3 className={classes.heading}>КОНКУРС – <br /> это ВОЗМОЖНОСТь </h3>
                    <Banner addedClass={classes.PossibilityBanner}>
                        <div className={classes.bannerContent}> 
                            <p className={classes.text}>заявить о себе и своем проекте</p>
                            <p className={classes.text}>встретиться с ведущими <br /> представителями медиасообщества</p>
                            <p className={classes.text}>запустить свой медиапроект</p>
                        </div>
                    </Banner>
                </div>
            </div>
            
        </div>
    )
}

export default Possibility;

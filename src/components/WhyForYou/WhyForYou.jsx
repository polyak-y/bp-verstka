import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import lamp from 'assets/images/lamp.png';
import useStyles from './style';

const WhyForYou = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.WhyForYou}>
            <img className={classes.img} src={lamp} alt="lamp" />
            <div>
                <h3 className={classes.heading}>ЭТОТ КОНКУРС ДЛЯ ТЕБЯ, ПОТОМУ ЧТО</h3>
                <Banner addedClass={classes.whoForYouBanner}>
                    <div className={classes.bannerContent}> 
                        <p className={classes.text}>у тебя есть идея <br /> добровольческого проекта </p>
                        <p className={classes.text}>ты готов презентовать ее <br />и получить рекомендации экспертов</p>
                        <p className={classes.text}>тебе интересно популяризировать <br /> добровольческие практики и делиться <br /> своими идеями с единомышленниками!</p>
                    </div>
                </Banner>
            </div>
        </div>
    )
}

export default WhyForYou;
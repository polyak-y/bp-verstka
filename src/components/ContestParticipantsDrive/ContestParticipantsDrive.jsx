import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import bpLogo from 'assets/images/bp-logo.svg';
import useStyles from './style';

const  ContestParticipantsDrive = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.ContestParticipantsDrive}>
            <ButtonPixel 
                className={classes.button}
                colorType="green" 
                width={254} 
                height={86}
                shadowColor="#CACACA"
                step={7}
            > 
                Присоединиться
            </ButtonPixel>

            <h3 className={classes.headingTextBlockMob}>Участники <br /> конкурса</h3>

            <img className={classes.img} src={bpLogo} alt="peopleHeart" />

            <div className={classes.textBlock}>
                <h3 className={classes.headingTextBlock}>Участники конкурса</h3>
                <p className={classes.text}>
                    Ученики школ 8-11 классов, <br /> 
                    в возрасте от 14 до 17 лет, кто <br />
                    живет семьей «Большой перемены»
                </p>
            </div>
        </div>
    )
}
export default ContestParticipantsDrive;
import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import peopleHeart from 'assets/images/people-heart.png';
import useStyles from './style';
 
const  ContestParticipantsDobro = () => {
    const classes = useStyles();

    return (
        <div className={classes.ContestParticipantsDobro}>
            <p className={classes.slogan}>
                Спешите делать <br />
                добрые дела! 
            </p>

            <ButtonPixel 
                className={classes.button}
                colorType="pink" 
                width={254} 
                height={86}
                shadowColor="#CACACA"
                step={7}
            > 
                Присоединиться
            </ButtonPixel>

            <h3 className={classes.headingTextBlockMob}>Участники <br /> конкурса</h3>

            <img className={classes.img} src={peopleHeart} alt="peopleHeart" />
            <div className={classes.textBlock}>
                <h3 className={classes.headingTextBlock}>Участники конкурса</h3>
                <p className={classes.text}>
                    Ученики школ 8-11 классов, <br /> 
                    в возрасте от 14 до 17 лет, <br />
                    активно продвигающие идеи <br />  
                    добровольчества и взаимопомощи
                </p>
            </div>
        </div>
    )
}
export default ContestParticipantsDobro;
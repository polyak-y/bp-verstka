import React from 'react';
import greenChildren from 'assets/images/green-children.png';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

const  ContestParticipantsEco = () => {
    const classes = useStyles();

    return (
        <div className={classes.ContestParticipantsEco}>
            <p className={classes.slogan}>
                Надо учиться слушать и слышать <br />
                друг друга, чтобы вместе <br />
                решать общие проблемы! <br />
                Судьба Планеты для всех одна!
            </p>

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

            <img className={classes.img} src={greenChildren} alt="greenChildren" />
            <div className={classes.textBlock}>
                <h3 className={classes.headingTextBlock}>Участники конкурса</h3>
                <p className={classes.text}>
                    Ученики школ 8-11 классов, <br />
                    в возрасте от 14 до 17 лет, <br />
                    кому небезразлично состояние <br />
                    окружающей среды
                </p>
            </div>
        </div> 
    )
}
export default ContestParticipantsEco;
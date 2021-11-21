import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

const TopbannerEco = () => {
    const classes = useStyles();
 
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Всероссийский конкурс <br />«ЭкоПоколение»</h1>
            <p className={classes.title}>Конкурс экологических проектов</p>

            <p className={classes.slogan}>
                Надо учиться слушать и слышать друг друга, <br />
                чтобы вместе решать общие проблемы! <br />
                Судьба Планеты для всех одна!
            </p>

            <div>
                <a className={classes.link} href="https://bolshayaperemena.online/">
                    <ButtonPixel 
                        colorType="green" 
                        width={325} 
                        height={111}
                        className={classes.button}
                    >
                        Присоединиться
                    </ButtonPixel>
                </a>
            </div>
        </div>
    )
}

export default TopbannerEco;

import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

const TopbannerDobro = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.layoutFon}>
                <h1 className={classes.heading}>Всероссийский конкурс <br /> «От сердца к сердцу»</h1>
                <p className={classes.title}>Конкурс добровольческих проектов</p>
            </div>

            <p className={classes.slogan}>Спешите делать <br />добрые дела! </p>

            <div>
                <a className={classes.link} href="https://bolshayaperemena.online/">
                    <ButtonPixel 
                        className={classes.button}
                        colorType="pink" 
                        width={325} 
                        height={111}
                    >
                        Присоединиться
                    </ButtonPixel>
                </a>
            </div>
        </div>
    )
} 

export default TopbannerDobro;

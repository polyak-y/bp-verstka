import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

const TopbannerDrive  = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>
                Всероссийская <br />
                интеллектуально-спортивная игра <br />
                «Новогодний ДРАЙВинг»
            </h1>

            <p className={classes.title}>
                Семейный трек <br />
                Объединяем семьи «Большой перемены»
            </p>

            <div>
                <a className={classes.link} href="https://bolshayaperemena.online/">
                    <ButtonPixel 
                        className={classes.button}
                        colorType="green" 
                        width={325} 
                        height={111}
                        shadowColor="#004A8E"
                    >
                        Присоединиться
                    </ButtonPixel>
                </a>
            </div>
        </div>             
    )
}

export default TopbannerDrive;

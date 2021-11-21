import React from 'react';
import { useMedia } from 'react-media';
import { Link } from "react-router-dom";
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import rosmol from 'assets/images/rosmol.png';
import rospatr from 'assets/images/rospatr.png';
import useStyles from './style';

const DobroBanner = () => {
    const classes = useStyles();
    const isMob = useMedia({ query: "(max-width: 720px)" });

    return (
        <div className={classes.DobroBanner}>
            <h3 className={classes.heading}>Всероссийский конкурс добровольческих проектов «От сердца к сердцу»</h3>
            <p className={classes.slogan}>Предложи свою идею добровольческого проекта и не упусти шанс получить поддержку в его реализации!</p>

            <Link to="/dobro" className={classes.link}>
                <ButtonPixel 
                    className={classes.button}
                    shadowColor="#DDB4C5"
                    colorType="pink" 
                    width={isMob ? 196 : 218} 
                    height={isMob ? 65 : 80}
                    step={7}
                >
                    Перейти
                </ButtonPixel>
            </Link>
            <img className={classes.rosmol} src={rosmol} alt="rosmol" />
            <img className={classes.rospatr} src={rospatr} alt="rospatr" />
        </div>
    )
}

export default DobroBanner;

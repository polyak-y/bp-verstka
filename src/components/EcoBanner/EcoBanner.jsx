import React from 'react';
import { useMedia } from 'react-media';
import { Link } from "react-router-dom";
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import rosmol from 'assets/images/rosmol.png';
import rospatr from 'assets/images/rospatr.png';
import useStyles from './style'; 

const EcoBanner = () => {
    const classes = useStyles();
    const isMob = useMedia({ query: "(max-width: 720px)" }); 

    return (
        <div className={classes.EcoBanner}>
            <h3 className={classes.heading}>Всероссийский конкурс «ЭкоПокоЛение»</h3>
            <p className={classes.slogan}>Защити свой экологический проект, стань победителем и получи возможность реализовать свою идею</p>

            <Link to="/eco" className={classes.link}>
                <ButtonPixel 
                    className={classes.button}
                    shadowColor="#CACACA"
                    colorType="green" 
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

export default EcoBanner;

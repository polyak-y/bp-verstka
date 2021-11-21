import React, { useMemo } from 'react';
import { useMedia } from 'react-media';
import rosmol from 'assets/images/rosmol.png';
import rospatr from 'assets/images/rospatr.png';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

 const Support = ({ color = '#B05F82', colorType = "pink" }) => {
    const classes = useStyles({ color });
    const isMob = useMedia({ query: "(max-width: 720px)" }); 
    
    const classNameForButton = useMemo(() => {
        const arrClass = [classes.button]

        if(colorType === 'lightBlue') {
            arrClass.push(classes.lightBlueButton);
        }

        return arrClass.join(' ');
        //eslint-disable-next-line
    }, [])

    const shadowColorForButton = useMemo(() => {
        if(colorType === 'lightBlue') {
            return '#CEDDE1'
        }

        return false;
        //eslint-disable-next-line
    }, [])
 
    return (
        <div className={classes.Support}>
            <h3 className={classes.heading}>КОНКУРС РЕАЛИЗУЮТ И ПОДДЕРЖИВАЮТ</h3>
            <div className={classes.imgBlock}>
                <img className={classes.img} src={rosmol} alt="rosmol" />
                <img className={classes.img} src={rospatr} alt="rospatr" />
            </div>

            <div className={classes.buttonContainer}>
                <a className={classes.link} href="https://bolshayaperemena.online/">
                    <ButtonPixel 
                        className={classNameForButton}
                        colorType={colorType} 
                        width={isMob ? 255 : 325} 
                        height={isMob ? 81 : 111}
                        shadowColor={shadowColorForButton}
                        step={isMob ? 7 : 10}
                    >
                        Присоединиться
                    </ButtonPixel>
                </a>
            </div>
        </div>
    )
}

export default Support;
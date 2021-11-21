import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import largeMicrophone from 'assets/images/large-microphone.png';
import useStyles from './style';

const  ContestParticipantsMedia = () => {
    const classes = useStyles(); 
 
    return (
        <div className={classes.ContestParticipantsMedia}>
            <p className={classes.slogan}>
                Говори о том, что для тебя важно! <br />
                Говори так, чтобы тебя поняли! <br />
                Говори там, где тебя услышат!
            </p> 

            <ButtonPixel 
                className={classes.button}
                colorType="lightBlue" 
                width={254} 
                height={86}
                shadowColor="#CACACA"
                step={7}
            > 
                Присоединиться
            </ButtonPixel>

            <h3 className={classes.headingTextBlockMob}>Участники <br /> конкурса</h3>

            <img className={classes.img} src={largeMicrophone} alt="largeMicrophone" />
            
            <div className={classes.textBlock}>
                <h3 className={classes.headingTextBlock}>Участники конкурса</h3>
                <p className={classes.text}>
                    Школьники 5-11 классов, <br /> 
                    интересующиеся журналистикой <br />
                    и новыми медиа
                </p>
            </div>
        </div>
    )
}
export default ContestParticipantsMedia;
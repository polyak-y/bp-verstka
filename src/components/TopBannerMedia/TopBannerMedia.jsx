import React from 'react';
import ButtonPixel from 'components/UI/ButtonPixel/ButtonPixel';
import useStyles from './style';

const TopBannerMedia = () => {
    const classes = useStyles(); 
 
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>
                «МедиаБУМ» <br />
                Всероссийский конкурс <br />
                медиапроектов 
            </h1>

            <p className={classes.title}>
                Говори о том, что для тебя важно! <br />
                Говори так, чтобы тебя поняли! <br />
                Говори там, где тебя услышат!
            </p>

            <div>
                <a className={classes.link} href="https://bolshayaperemena.online/">
                    <ButtonPixel 
                        className={classes.button}
                        colorType="lightBlue" 
                        width={325} 
                        height={111}
                        shadowColor="#822FBC"
                    >
                        Присоединиться
                    </ButtonPixel>
                </a>
            </div>
        </div>
    )
}

export default TopBannerMedia;

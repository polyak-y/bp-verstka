import { createUseStyles } from 'react-jss';
import heartHandMain from 'assets/images/heart-hand-main.png';
import heartHandMainBannerMob from 'assets/images/heartHandMainBannerMob.svg';

const useStyles = createUseStyles({
    DobroBanner: {
        marginLeft: -24,
        marginRight: -24,
        width: 'calc(100% + 48px)!important',
        position: 'relative',
        paddingTop: 52,
        paddingBottom: 21,
        paddingLeft: 24,
        background: `url(${heartHandMain}) no-repeat right bottom`,
        backgroundSize: 'auto 100%',

        '@media(max-width: 720px)': {
            paddingTop: 73,
            background: `url(${heartHandMainBannerMob}) no-repeat right calc(100% - 40px)`,
            backgroundSize: '150px auto',
            paddingBottom: 0,
        },

        '@media(max-width: 450px)': {
            background: `url(${heartHandMainBannerMob}) no-repeat right center`,
            backgroundSize: 'auto',
        },
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#B05F82',
        lineHeight: '31px',
        textTransform: 'uppercase',
        marginBottom: 10,
        maxWidth: 460,

        '@media(max-width: 720px)': {
            width: 300,
            fontSize: 16,
            lineHeight: '19px',
            marginBottom: 13,
        },        
    },
    slogan: {
        fontSize: 16,
        color: '#B05F82',
        lineHeight: '19px',
        marginBottom: 26,
        maxWidth: 370,

        '@media(max-width: 720px)': {
            maxWidth: 260,
            marginBottom: 22,
            fontSize: 12,
        },
    },
    link: {
        textDecoration: 'none',
        display: 'inline-block',
        height: 87,
    },
    button: {
        '& .buttonPixel': {
            fontSize: 18,

            '@media(max-width: 720px)': {
                fontSize: 16,
            },
        }
    },
    rosmol: {
        width: 114,
        height: 'auto',
        position: 'absolute',
        right: 12,
        top: 18,

        '@media(max-width: 720px)': {
            top: 31,
            right: 85
        },
    },
    rospatr: { 
        width: 73,
        height: 'auto',
        position: 'absolute',
        right: 29,
        top: 68,

        '@media(max-width: 720px)': {
            top: 12,
            right: 24
        },
    }
});

export default useStyles; 

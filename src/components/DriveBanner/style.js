import { createUseStyles } from 'react-jss';
import snowTree from 'assets/images/snow-tree.png';
import snowTreeMobBanner from 'assets/images/snowTreeMobBanner.png';
import family from 'assets/images/family.png'

const useStyles = createUseStyles({
    DriveBanner: {
        marginLeft: -24,
        marginRight: -24,
        width: 'calc(100% + 48px)!important',
        position: 'relative',
        paddingTop: 64,
        paddingBottom: 21,
        paddingLeft: 24,
        background: `url(${snowTree}) no-repeat 75% calc(100% - 10px), url(${family}) no-repeat 76% bottom`,
        backgroundSize: 'auto, 300px auto',

        '@media(max-width: 900px)': {
            background: `url(${snowTreeMobBanner}) no-repeat right calc(100% - 10px), url(${family}) no-repeat 76% bottom`,
            backgroundSize: 'auto, 300px auto',
        },

        '@media(max-width: 720px)': {
            paddingTop: 73,
            background: `url(${snowTreeMobBanner}) no-repeat calc(100% - 16px) calc(100% - 16px)`,
            backgroundSize: 'auto',
            paddingBottom: 0,
        },

        '@media(max-width: 450px)': {
            // background: `url(${heartHandMainBannerMob}) no-repeat right center`,
            backgroundSize: 'auto',
        },
    },
    heading: { 
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: '31px',
        textTransform: 'uppercase',
        marginBottom: 20,
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
        color: '#fff',
        lineHeight: '19px',
        marginBottom: 30,
        maxWidth: 325,

        '@media(max-width: 720px)': {
            maxWidth: 260,
            marginBottom: 22,
            fontSize: 12,
        },

        '@media(max-width: 450px)': {
            maxWidth: 210,
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

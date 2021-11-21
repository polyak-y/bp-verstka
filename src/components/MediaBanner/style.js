import { createUseStyles } from 'react-jss';
import squaresMainBanner from 'assets/images/squares-main-banner.svg';
import students from 'assets/images/students.png';
import mobFonMedia from 'assets/images/mob-fon-media.svg';

const useStyles = createUseStyles({
    Mediabanner: {
        marginLeft: -24,
        marginRight: -24,
        width: 'calc(100% + 48px)!important',
        position: 'relative',
        paddingTop: 52,
        paddingBottom: 21,
        paddingLeft: 24,
        background: `url(${students}) no-repeat 75% bottom, url(${squaresMainBanner}) no-repeat left`,
        backgroundSize: 'auto 100%, contain',

        '& .third-block': {
            padding: 0
        },

        '@media(max-width: 1000px)': {
            background: `url(${students}) no-repeat 85% bottom`,
            backgroundSize: '30%',
        },

        '@media(max-width: 720px)': {
            paddingTop: 73,
            background: `url(${mobFonMedia}) no-repeat right 75%`,
            backgroundSize: 'auto',
        },
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: '31px',
        textTransform: 'uppercase',
        marginBottom: 3,
        maxWidth: 460,

        '@media(max-width: 720px)': {
            width: 300,
            fontSize: 16,
            lineHeight: '19px',
            marginBottom: 13,
        },
        
        '@media(max-width: 400px)': {
            width: 227,
        },
    },
    slogan: {
        fontSize: 16,
        color: '#fff',
        lineHeight: '19px',
        marginBottom: 58,

        '@media(max-width: 720px)': {
            marginBottom: 22,
            fontSize: 12,
        },
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        '& .buttonPixel': {
            fontSize: 18,
            color: '#822FBC !important',

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

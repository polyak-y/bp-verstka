import { createUseStyles } from 'react-jss';
import handTreeMain from 'assets/images/hand-tree-main.png';
import squaresGreen from 'assets/images/squares-green.svg';
import squaresGreenMob from 'assets/images/squaresGreenMob.svg';

const useStyles = createUseStyles({
    EcoBanner: {
        marginLeft: -24,
        marginRight: -24,
        width: 'calc(100% + 48px)!important',
        position: 'relative',
        paddingTop: 52, 
        paddingBottom: 21,
        paddingLeft: 24, 
        background: `url(${handTreeMain}) no-repeat 97% bottom, url(${squaresGreen}) no-repeat 77% bottom`,
        backgroundSize: 'auto, 50%',

        '@media(max-width: 850px)': {
            background: `url(${handTreeMain}) no-repeat right bottom, url(${squaresGreen}) no-repeat 77% bottom`,
            backgroundSize: '30%, 50%',
        },

        '@media(max-width: 720px)': {
            paddingTop: 73,
            background: `url(${handTreeMain}) no-repeat calc(100% + 140px) bottom, url(${squaresGreenMob}) no-repeat calc(100% - 150px) calc(100% - 23px)`,
            backgroundSize: '300px auto, 80px auto',
            paddingBottom: 0,
        },

        '@media(max-width: 450px)': {
            background: `url(${handTreeMain}) no-repeat calc(100% + 90px) calc(100% - 30px), url(${squaresGreenMob}) no-repeat calc(100% - 30px) calc(100% - 23px)`,
            backgroundSize: '200px auto, 80px auto',
        },
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#16A752',
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
        
        '@media(max-width: 400px)': {
            width: 227,
        },
    },
    slogan: {
        fontSize: 16,
        color: '#16A752',
        lineHeight: '19px',
        marginBottom: 26,
        maxWidth: 380,

        '@media(max-width: 720px)': {
            maxWidth: 203,
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

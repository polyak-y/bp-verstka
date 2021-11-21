import { createUseStyles } from 'react-jss';
import handHeart from 'assets/images/hand-heart.png';
import handHeartMob from 'assets/images/hand-heart-mob.png';

const useStyles = createUseStyles({
    container: {
        paddingTop: 159,
        paddingLeft: 120,
        height: '100%',
        background: `url(${handHeart}) no-repeat right calc(100% + 88px)`,
        
        '@media(max-width: 1200px)': {
            paddingTop: 50,
            paddingBottom: 50,
            background: `url(${handHeart}) no-repeat right calc(100%  + 34px)`,
            backgroundSize: '35%'
        },

        '@media(max-width: 900px)': {
           paddingLeft: 50
        },

        '@media(max-width: 720px)': {
            padding: '76px 30px 320px 30px',
            background: `url(${handHeart}) no-repeat center calc(100%  + 34px)`,
            backgroundSize: '65%'
        },

        '@media(max-width: 550px)': {
            backgroundSize: '80%'
        },
       
        '@media(max-width: 500px)': {
            background: `url(${handHeartMob}) no-repeat center bottom`,
            backgroundSize: '100% auto'
        },

        '@media(max-width: 374px)': {
            backgroundSize: 'contain'
        }
    },
    layoutFon: {
        display: 'inline-flex',
        flexDirection: 'column',
        background: '#EFD3DF',
        borderRadius: '0 0 53% 0',
        marginTop: -20,
        paddingTop: 20,
        paddingBottom: 20,

        
        '@media(max-width: 720px)': {
            background: 'transparent',
        }
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#B05F82',
        lineHeight: '125%',
        textTransform: 'uppercase',
        marginBottom: 33,
        display: 'inline-block',

        
        '@media(max-width: 1200px)': {
            fontSize: 40,
            marginBottom: 35,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            fontSize: 30,
            lineHeight: '133%',
            marginBottom: 5,
        }
    },
    title: {
        fontSize: 28,
        fontWeight: 500, 
        lineHeight: '125%',
        color: '#B05F82',
        display: 'inline-block',

        '@media(max-width: 1200px)': {
            fontSize: 24,
            marginBottom: 30,
        },

        '@media(max-width: 900px)': {
            fontSize: 20,
        },

        '@media(max-width: 720px)': {
            fontSize: 18,
            marginBottom: 20,
        },
    },
    slogan: {
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: '132%',
        color: '#B05F82',
        marginBottom: 69,
        marginTop: 67,
        textTransform: 'uppercase',

        '@media(max-width: 1200px)': {
            fontSize: 28,
            marginTop: 30,
        },

        '@media(max-width: 900px)': {
            fontSize: 25,
            marginTop: 20,
        },

        '@media(max-width: 720px)': {
            display: 'none'
        },
    },
    button: {
        '@media(max-width: 720px)': {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none'
    }
});

export default useStyles;

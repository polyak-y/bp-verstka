import { createUseStyles } from 'react-jss';
import squares from 'assets/images/squares.svg';
import students from 'assets/images/students.png';
import mediaboomMobileFon from 'assets/images/mediaboomMobileFon.svg';

const useStyles = createUseStyles({
    container: {
        paddingTop: 159,
        paddingLeft: 120,
        height: '100%',
        background: `url(${students}) no-repeat right calc(100% - 103px), url(${squares}) no-repeat left 94px`,

        '@media(max-width: 1200px)': {
            paddingTop: 50,
            paddingBottom: 50,
            background: `url(${students}) no-repeat right calc(100% - 50px), url(${squares}) no-repeat left 25px`,
            backgroundSize: '35%, contain'
        },

        '@media(max-width: 900px)': {
           paddingLeft: 50
        },

        '@media(max-width: 720px)': {
            padding: '76px 30px 320px 30px',
            background: `url(${students}) no-repeat center calc(100%  - 24px), url(${mediaboomMobileFon}) no-repeat center 75%`,
            backgroundSize: '320px auto, auto'
        }
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: '125%',
        textTransform: 'uppercase',
        marginBottom: 67,

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
            marginBottom: 30,
        }
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: '125%',
        color: '#fff',
        marginBottom: 82,

        '@media(max-width: 1200px)': {
            fontSize: 24,
            marginBottom: 30,
        },

        '@media(max-width: 900px)': {
            fontSize: 20,
        },

        '@media(max-width: 720px)': {
            display: 'none' 
        },
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        '& .buttonPixel': {
            color: '#822FBC'
        },

        '@media(max-width: 720px)': {
            display: 'none'
        }
    }
});

export default useStyles;

import { createUseStyles } from 'react-jss';
import handTree from 'assets/images/hand-tree.png';
import squaresGreen from 'assets/images/squares-green.svg';

const useStyles = createUseStyles({
    container: {
        paddingTop: 159,
        paddingLeft: 120,
        height: '100%',
        background: `url(${handTree}) no-repeat right bottom, url(${squaresGreen}) no-repeat left calc(100% - 168px)`,

        '@media(max-width: 1200px)': {
            paddingTop: 50,
            paddingBottom: 50,
            background: `url(${handTree}) no-repeat right calc(100% - 50px), url(${squaresGreen}) no-repeat 30% 80%`,
            backgroundSize: '35%, 55%'
        },

        '@media(max-width: 900px)': {
           paddingLeft: 50
        },

        '@media(max-width: 720px)': {
            padding: '76px 30px 320px 30px',
            background: `url(${handTree}) no-repeat right bottom, url(${squaresGreen}) no-repeat left calc(100% + 110px)`,
            backgroundSize: '320px auto, auto'
        }
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#16A752', 
        lineHeight: '125%',
        textTransform: 'uppercase',
        marginBottom: 25,

        '@media(max-width: 1200px)': {
            fontSize: 40,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            maxWidth: 375,
            fontSize: 30,
            lineHeight: '133%',
            marginBottom: 17,
        }
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: '114%',
        color: '#16A752',
        marginBottom: 65,

        '@media(max-width: 1200px)': {
            fontSize: 25,
        },

        '@media(max-width: 900px)': {
            fontSize: 22,
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            lineHeight: '125%',
            marginBottom: 80,
        }
    },
    slogan: {
        fontSize: 28,
        fontWeight: 600,
        color: '#535353',
        marginBottom: 87,

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

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    ContestParticipantsEco: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '@media(max-width: 720px)': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: 12,
            paddingBottom: 0,
        }, 
    },
    slogan: {
        display: 'none',
        
        '@media(max-width: 720px)': {
            display: 'block',
            fontSize: 16,
            fontWeight: 500,
            color: '#535353',
            lineHeight: '125%',
            marginBottom: 42,
            textAlign: 'center',
        },
    },
    button: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            marginBottom: 48,
            
            '& .buttonPixel': {
                fontSize: 22,
                fontWeight: 600,
            }
        },
    },
    img: {
        height: 418,
        marginRight: 64,
        alignSelf: 'flex-start',

        '@media(max-width: 1200px)': {
            marginRight: 50,
            width: 300,
            height: 'auto'
        },

        '@media(max-width: 720px)': {
            marginRight: 0,
            alignSelf: 'center',
            width: '100%',
            maxWidth: 200,
            display: 'block',
            marginBottom: 21,
        },
    },
    headingTextBlock: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#16A752', 
        marginBottom: 38,

        '@media(max-width: 1200px)': {
            fontSize: 40,
            marginBottom: 35,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            display: 'none',
        }
    },
    headingTextBlockMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            textTransform: 'uppercase',
            color: '#16A752',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: '129%',
            marginBottom: 0,
            textAlign: 'center',
        }
    },
    text: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: '125%',
        color: '#535353',

        '@media(max-width: 1200px)': {
            fontSize: 24,
        },
        
        '@media(max-width: 900px)': {
            fontSize: 20,
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            textAlign: 'center'
        }
    }
});

export default useStyles;

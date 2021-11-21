import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    ContestParticipantsDrive: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 107,
        paddingBottom: 107,

        '@media(max-width: 720px)': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: 12, 
            paddingBottom: 0,
        },
    },
    button: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            marginBottom: 30,
            
            '& .buttonPixel': {
                fontSize: 22,
                fontWeight: 600,
            }
        },
    },
    img: {
        marginRight: 64,
        alignSelf: 'flex-start',

        '@media(max-width: 1200px)': {
            marginRight: 50,
            width: 250,
            height: 'auto'
        },

        '@media(max-width: 720px)': {
            marginRight: 0,
            alignSelf: 'center',
            width: '100%',
            maxWidth: 204,
            display: 'block',
            marginBottom: 39,
        },
    },
    headingTextBlock: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#0B5EAA',
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
            color: '#0B5EAA',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: '129%',
            marginBottom: 20,
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

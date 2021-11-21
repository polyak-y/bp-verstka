import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    BannerContentScheduleCompetition: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 216,
        
        '@media(max-width: 1200px)': {
            height: 'auto',
        },
    },
    dateText: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',

        '@media(max-width: 1200px)': {
            fontSize: 40,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            display: 'block',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: '140%',
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: 15,
            textTransform: 'none'
        },

        '&:before': {
            content: "''",
            position: 'absolute',
            display: 'block',
            height: 4,
            background: '#fff',
            left: '50%',
            bottom: -21,
            transform: 'translateX(-50%)',
            width: '64%',

            '@media(max-width: 720px)': {
                display: 'none'
            }
        }
    },
    dateTextMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: '140%',
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: 15,
        },
    },
    descriptions: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: '125%',
        color: '#fff',
        textAlign: 'center',
        marginTop: 50,

        '@media(max-width: 1200px)': {
            fontSize: 25,
        },

        '@media(max-width: 900px)': {
            fontSize: 22,
        },

        '@media(max-width: 720px)': {
            display: 'block',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '125%',
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: 0,
        },
    },
    descriptionsMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '125%',
            textAlign: 'center',
            color: '#FFFFFF',
        },
    },
    lineMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            width: 126,
            height: 2,
            background: '#fff',
            marginTop: 15,
            marginBottom: 15,
        },
    }
});

export default useStyles;

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Possibility: {
        marginTop: 109,
        marginRight: 89,

        '@media(max-width: 1200px)': {
            marginTop: 50,
        },

        '@media(max-width: 900px)': {
            marginRight: 0,
        },

        '@media(max-width: 720px)': {
            marginTop: 0
        },
    },
    PossibilityWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',

        '@media(max-width: 720px)': {
            alignItems: 'flex-start',
        },
    },
    bannerContent: {
        paddingLeft: 28,
        paddingTop: 15,
        
        '@media(max-width: 720px)': {
            paddingTop: 0,
            paddingLeft: 0
        },
    },
    img: {
        width: 419,
        height: 'auto',
        marginRight: 130,

        '@media(max-width: 1200px)': {
           marginRight: 60,
           width: '35%'
        },

        '@media(max-width: 720px)': {
           height: 260,
           width: 'auto',
           marginTop: -30,
           marginRight: 30,
        },

        '@media(max-width: 500px)': {
            marginRight: 0
        }
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#822FBC',
        marginBottom: 24,

        '@media(max-width: 1200px)': {
            fontSize: 40,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },
        '@media(max-width: 720px)': {
            display: 'none'
        },
    },
    headingMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            fontSize: 26,
            fontWeight: 'bold',
            lineHeight: '129%',
            textTransform: 'uppercase',
            color: '#822FBC',
            marginBottom: 69,
            textAlign: 'center',
            marginTop: 2
        },
    },
    PossibilityBanner: {
        width: 607,

        '@media(max-width: 900px)': {
            width: 500,
        },

        '@media(max-width: 720px)': {
            width: 370,
        },

        '@media(max-width: 500px)': {
            width: 260,
        },

        '& .firstBlock': {
            background: '#99F6F9',
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                background: '#fff',
                boxShadow: 'none',
            }
        },
        
        '& .secondBlock': {
            background: '#99F6F9',
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                background: '#fff',
                boxShadow: 'none',
            } 
        },

        '& .thirdBlock': {
            paddingTop: 54,
            paddingBottom: 60,
            background: '#99F6F9',
            boxShadow: 'inset 0px 12px 0px 0px #C2FEFF, 0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                background: '#fff',
                boxShadow: 'none',
                paddingTop: 0,
                paddingBottom: 0,
            }
        }
    },
    text: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '133%',
        color: '#535353',
        position: 'relative',
        paddingLeft: 62,
        marginBottom: 33,

        '@media(max-width: 1200px)': {
            fontSize: 22,
            marginBottom: 30,
        },

        '@media(max-width: 900px)': {
            fontSize: 18,
        },

        '@media(max-width: 720px)': {
            paddingLeft: 35,
            fontSize: 16,
            marginBottom: 20
        },

        '&:last-child': {
            marginBottom: 0
        },

        '&:before': {
            content: "''",
            display: 'block',
            width: 20,
            height: 20,
            background: '#822FBC',
            position: 'absolute',
            left: 0,
            top: 8,

            '@media(max-width: 720px)': {
                width: 15,
                height: 15,
                top: 5
            },
        }
    }
});

export default useStyles;

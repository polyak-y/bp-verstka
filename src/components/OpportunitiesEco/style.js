import { createUseStyles } from 'react-jss';
import halfCircle from 'assets/images/halfCircle.svg';

const useStyles = createUseStyles({
    OpportunitiesEco: {
        marginTop: 109,
        marginRight: 89,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        '@media(max-width: 1200px)': {
            marginTop: 50,
        },

        '@media(max-width: 900px)': {
            marginRight: 0,
            justifyContent: 'center'
        },
       
        '@media(max-width: 720px)': {
           marginTop: 0,
           background: `url(${halfCircle}) no-repeat top left`,
           backgroundSize: 'auto 100%'
        },
    },
    bannerContent: {
        paddingLeft: 3,
        paddingTop: 15,
        maxWidth: 607,
    },
    img: {
        width: 500,
        height: 'auto',
        marginRight: 70,

        '@media(max-width: 900px)': {
            display: 'none'
        },
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#16A752',
        marginBottom: 34,

        '@media(max-width: 1200px)': {
            fontSize: 40,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
            textAlign: 'center'
        },

        '@media(max-width: 720px)': {
            fontSize: 26,
            lineHeight: '129%',
            marginBottom: 30,
        }
    },
    OpportunitiesEcoBanner: {
        '@media(max-width: 1200px)': {
            minWidth: 533,
        },
      
        '@media(max-width: 720px)': {
            minWidth: 'auto',
            paddingLeft: 18,
            paddingBottom: 16,
        },

        '& .firstBlock': {
            background: '#E8E8E8',
            boxShadow: '0px 12px 0px 0px #CACACA',

            '@media(max-width: 720px)': {
                background: 'transparent',
                boxShadow: 'none',
            }
        },
        
        '& .secondBlock': {
            background: '#E8E8E8',
            boxShadow: '0px 12px 0px 0px #CACACA',

            '@media(max-width: 720px)': {
                background: 'transparent',
                boxShadow: 'none',
            }
        },

        '& .thirdBlock': {
            background: '#E8E8E8',
            boxShadow: 'inset 0px 12px 0px 0px #ECECEC, 0px 12px 0px 0px #CACACA',
            
            '@media(max-width: 720px)': {
                background: 'transparent',
                boxShadow: 'none',
                padding: 0
            }
        }
    },
    text: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '133%',
        color: '#535353',
        position: 'relative',
        paddingLeft: 42,
        marginBottom: 33,
        zIndex: 9,

        '&:last-child': {
            marginBottom: 0
        },

        '@media(max-width: 1200px)': {
            fontSize: 24,
            marginBottom: 30,
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            lineHeight: '125%',
            marginBottom: 19
        },

        '&:before': {
            content: "''",
            display: 'block',
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#16A752',
            position: 'absolute',
            left: 0,
            top: 8,

        }
    }
});

export default useStyles;

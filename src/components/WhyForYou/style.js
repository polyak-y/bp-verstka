import { createUseStyles } from 'react-jss';
import grayHeart from 'assets/images/gray-heart.svg';

const useStyles = createUseStyles({
    WhyForYou: {
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
           background: `url(${grayHeart}) no-repeat 90% bottom`,
           backgroundSize: '177px auto'
        },
    },
    bannerContent: {
        paddingLeft: 28,
        paddingTop: 15,
        maxWidth: 607,

        '@media(max-width: 900px)': {
            paddingLeft: 0
        },
    },
    img: {
        width: 700,
        height: 'auto', 

        '@media(max-width: 900px)': {
            display: 'none'
        },
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#B05F82',
        marginBottom: 24,

        '@media(max-width: 1200px)': {
            fontSize: 40,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
            textAlign: 'center'
        },

        '@media(max-width: 720px)': {
            width: 350,
            fontSize: 26,
            lineHeight: '129%',
            margin: '0 auto 30px auto',
        }
    },
    whoForYouBanner: {
        '@media(max-width: 1200px)': {
            minWidth: 533,
        },
      
        '@media(max-width: 720px)': {
            minWidth: 'auto',
            paddingLeft: 18,
            paddingBottom: 16,
        },

        '& .firstBlock': {
            background: '#E07AA6',
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                background: 'transparent',
                boxShadow: 'none',
            }
        },
        
        '& .secondBlock': {
            background: '#E07AA6',
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                background: 'transparent',
                boxShadow: 'none',
            }
        },

        '& .thirdBlock': {
            background: '#E07AA6',
            boxShadow: 'inset 0px 12px 0px 0px #F08FB9, 0px 12px 0px 0px #CEDDE1',
            
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
        color: '#fff',
        position: 'relative',
        paddingLeft: 62,
        marginBottom: 33,

        '@media(max-width: 1200px)': {
            fontSize: 24,
            marginBottom: 30,
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            lineHeight: '125%',
            marginBottom: 19,
            color: '#535353',
            paddingLeft: 38,
        },

        '&:last-child': {
            marginBottom: 0
        },

        '&:before': {
            content: "''",
            display: 'block',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            left: 0,
            top: 8,

            '@media(max-width: 720px)': {
               width: 15,
               height: 15,
               background: '#E07AA6'
            },
        }
    }
});

export default useStyles;

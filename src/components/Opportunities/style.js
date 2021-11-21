import { createUseStyles } from 'react-jss';
import snowflake from 'assets/images/snowflake.png';

const useStyles = createUseStyles({
    Opportunities: {
        marginTop: 126,
        background: `url(${snowflake}) no-repeat left top`,
        backgroundSize: '19%',
        position: 'relative',

        '@media(max-width: 1200px)': {
            marginTop: 50,
        },
        
        '@media(max-width: 720px)': {
            marginTop: 0,
            background: 'transparent',
        },
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: '#0B5EAA',
        textAlign: 'center',
        marginBottom: 91,

        '@media(max-width: 1200px)': {
            fontSize: 40,
            marginBottom: 35,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            fontSize: 26,
            lineHeight: '129%',
            marginBottom: 30,
        }
    },
    firstLine: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 95,
        gap: '0 100px',

        '@media(max-width: 900px)': {
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 0
        },  
        
        '@media(max-width: 500px)': {
            paddingLeft: 45,
        },  
    },
    secondLine: {
        display: 'flex',
        justifyContent: 'space-around',

        '@media(max-width: 1200px)': {
            flexWrap: 'wrap',

            '& $wrap': {
                marginBottom: 95,
            }
        },  
        
        '@media(max-width: 900px)': {
            flexDirection: 'column',
            alignItems: 'center',

            '& $wrap': {
                marginBottom: 0,
            }
        },
        '@media(max-width: 500px)': {
            paddingLeft: 45,
        }, 
    },
    wrap: {
        width: 395,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        
        '@media(max-width: 1200px)': {
            width: 350,
        },

        '@media(max-width: 720px)': {
            display: 'block'
        },

        '@media(max-width: 400px)': {
            width: 320,
        },

        '@media(max-width: 370px)': {
            width: 300,
        },
    },
    containerForIcon: {
        width: 203,

        '@media(max-width: 900px)': {
            display: 'none'
        },

        '& .firstBlock': {
            height: 143,
            background: '#46D24F',
            boxShadow: '0px 12px 0px 0px #C2CCCF',
        },
        
        '& .secondBlock': {
            background: '#46D24F',
            boxShadow: '0px 12px 0px 0px #C2CCCF',
        },

        '& .thirdBlock': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#46D24F',
            boxShadow: 'inset 0px 12px 0px 0px #78F064, 0px 12px 0px 0px #C2CCCF',
        }
    },
    text: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '133%',
        color: '#535353',

        '@media(max-width: 900px)': {
            marginTop: 0,
            position: 'relative',
            marginBottom: 20,

            '&:before': {
                content: "''",
                position: 'absolute',
                display: 'block',
                width: 15,
                height: 15,
                background: '#46D24F',
                top: 5,
                left: -32,
            }
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            lineHeight: '125%',
        }
    },
    snowflakeMob: {
        display: 'none',

        
        '@media(max-width: 720px)': {
            display: 'block',
            position: 'absolute',
            right: 0,
            bottom: 0,
            transform: 'translateY(50%)'
        }
    }
}); 

export default useStyles;

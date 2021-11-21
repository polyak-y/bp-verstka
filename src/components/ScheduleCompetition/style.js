import { createUseStyles } from 'react-jss'

const headerColor = (value) => {
    switch (value) {
        case 'pink': 
            return '#B05F82';
        case 'blue':
            return '#0B5EAA';
        case 'darkGreen':
            return '#16A752';
        case 'violet':
            return '#822FBC';
        default: 
            return '#fff';                
    }
}

const mainColorBanner = (value) => {
    switch (value) {
        case 'pink': 
            return '#E07AA6';
        case 'blue':
            return '#0B5EA9';
        case 'green': 
            return '#46D24F';
        case 'darkGreen':
            return '#26C066';
        case 'violet':
            return '#9B53CD';
        case 'lightBlue':
            return '#61A1FF';
        default: 
            return '#fff';                
    }
}

const topBorderColor = (value) => {
    switch (value) {
        case 'pink': 
            return '#F08FB9';
        case 'blue':
            return '#3286D2';
        case 'green': 
            return '#78F064';
        case 'darkGreen':
            return '#26C066';
        case 'violet':
            return '#BE78EF';
        case 'lightBlue':
            return '#95C0FF'; 
        default: 
            return '#fff';                
    }
}

const useStyles = createUseStyles({
    Schedulecompetition: {
        maxWidth: 1262,
        margin: '130px auto 0 auto',
        position: 'relative',

        '@media(max-width: 1200px)': {
            marginTop: 50,
        },
        
        '@media(max-width: 720px)': {
            marginTop: -20,
        },
    },
    heading: (props) => ({
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: headerColor(props.type),
        maxWidth: 400,
        marginRight: 53,
        position: 'relative',
        zIndex: 9,

        '@media(max-width: 1200px)': {
            fontSize: 40,
            maxWidth: 'none',
            marginRight: 0,
            marginBottom: 30,            
        },
      
        '@media(max-width: 900px)': {
            textAlign: 'center',
            paddingLeft: 15,
            paddingRight: 15,

        },
    }),
    firstLine: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        
        '@media(max-width: 1200px)': {
            flexDirection: 'column'
        },
        '@media(max-width: 720px)': {
            display: 'none'
        },
    },
    secondLine: {
        display: 'flex',
        marginTop: 50,
        marginLeft: 97,

        '& $heading': {
            display: 'none',
        },

        '@media(max-width: 1200px)': {
            justifyContent: 'center',
            marginLeft: 0,
        },

        '@media(max-width: 720px)': {
            flexDirection: 'column',

            '& $heading': {
                display: 'block',
                width: '100%',
                marginRight: 0,
                fontSize: 26,
                lineHeight: '129%',
                marginBottom: 28,
                textAlign: 'center',
            }
        },
    }, 
    ScheduleCompetitionBanner: (props) => ({
        width: '100%',
        maxWidth: 715,
        zIndex: 5,

        '& .firstBlock': {
            background: mainColorBanner(props.type),
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                boxShadow: 'none',
            }
        },
        
        '& .secondBlock': {
            background: mainColorBanner(props.type),
            boxShadow: '0px 12px 0px 0px #CEDDE1',

            '@media(max-width: 720px)': {
                boxShadow: 'none',
            }
        },

        '& .thirdBlock': {
            background: mainColorBanner(props.type),
            boxShadow: `inset 0px 12px 0px 0px ${topBorderColor(props.type)}, 0px 12px 0px 0px #CEDDE1`,

            '@media(max-width: 720px)': {
                boxShadow: 'none',
            }
        }
    }),
    dopScheduleCompetitionBanner: (props) => ({
        '& .firstBlock': {
            background: props.dopType && mainColorBanner(props.dopType),
            '@media(max-width: 720px)': {
               boxShadow: 'none',
            },
        },
        
        '& .secondBlock': {
            background:  props.dopType && mainColorBanner(props.dopType),
            '@media(max-width: 720px)': {
                boxShadow: 'none',
            },
        },

        '& .thirdBlock': {
            background:  props.dopType && mainColorBanner(props.dopType),
            boxShadow: props.dopType && `inset 0px 12px 0px 0px ${topBorderColor(props.dopType)}, 0px 12px 0px 0px #CEDDE1`,
            '@media(max-width: 720px)': {
                boxShadow: 'none',
             },
        },
    }),
    img: {
        alignSelf: 'flex-start',
        position: 'relative',
        top: -95,
        '@media(max-width: 1200px)': {
            display: 'none'
        },
    },
    megafon: {
        width: 200,
        position: 'absolute',
        right: -25,
        bottom: -14,

        '@media(max-width: 1200px)': {
            display: 'none'
        },

        '@media(max-width: 720px)': {
            display: 'block',
            zIndex: 99,
            top: 50,
            right: 7,
            width: 120,
            height: 'auto'
        },

        '@media(max-width: 420px)': {
            top: 65,
            right: 7,
            width: 97,
        },
    },
    squaresGray: {
        position: 'absolute',
        top: 196,
        left: -74,

        '@media(max-width: 900px)': {
            display: 'none'
        },
    },
    squaresGrayMob: {
        display: 'none',

        '@media(max-width: 720px)': {
            display: 'block',
            position: 'absolute',
            bottom: -92,
            right: 0,
        },
    },
    snowDrive: {
        width: 180,
        position: 'absolute',
        right: 0,
        bottom: 0,

        '@media(max-width: 1200px)': {
            display: 'none'
        },
    },
});

export default useStyles;

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Support: {
        marginTop: 125,

        '@media(max-width: 1200px)': {
            marginTop: 50,
        },

        '@media(max-width: 900px)': {
            marginTop: 30,
        }
    },
    heading: (props) => ({
        fontSize: 48,
        fontWeight: 'bold',
        lineHeight: '125%',
        textTransform: 'uppercase',
        color: props.color,
        marginBottom: 70,
        textAlign: 'center',
        position: 'relative',
        zIndex: 9,

        '@media(max-width: 1200px)': {
            fontSize: 40,
            marginBottom: 35,
            paddingRight: 25,
            paddingLeft: 25,
        },

        '@media(max-width: 900px)': {
            fontSize: 35,
        },

        '@media(max-width: 720px)': {
            width: 300,
            margin: '0 auto',
            fontSize: 26,
            lineHeight: '129%',
            marginBottom: 10,
        }
    }),
    imgBlock: {
        display: 'flex',
        justifyContent: 'center',

        '@media(max-width: 900px)': {
            flexDirection: 'column',
            alignItems: 'center',

            '& img': {
                width: '40%',
            }
        },
    },
    img: {
        display: 'block',
        margin: '0 35px',

        '@media(max-width: 720px)': {
           '&:first-child': {
               marginBottom: 10
           }
        }
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 75,
        marginBottom: 75,

        '@media(max-width: 720px)': {
            marginTop: 45,
        }
    },
    lightBlueButton: {
        '& .buttonPixel': {
            color: '#822FBC'
        }
    },
    button: {
        '@media(max-width: 720px)': {
            '& .buttonPixel': {
                fontSize: 22
            }
        }
    },
    link: {
        textDecoration: 'none'
    }
});

export default useStyles;

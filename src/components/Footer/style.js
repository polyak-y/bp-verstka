import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Footer: (props) => ({
        background: props.bgColor,
        padding: '51px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '@media(max-width: 1200px)': {
            flexWrap: 'wrap',
        },
      
        '@media(max-width: 720px)': {
            padding: '38px 15px',
        },

        '& p, & a': {
            color: props.color,
            fontWeight: 600,
            fontSize: 18,
            lineHeight: '22px',
            textDecoration: 'none',

            '@media(max-width: 720px)': {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '125%',
            },
        }
    }),
    leftSection: {
        '@media(max-width: 1200px)': {
            width: '100%',
            textAlign: 'center',
            marginTop: 37,
        },

        '@media(max-width: 720px)': {
            marginTop: 67,
            position: 'relative',

            '&:before': {
                content: "''",
                display: 'block',
                position: 'absolute',
                width: 264,
                height: 2,
                background: props => props.colorMobLine,
                top: -28,
                left: '50%',
                transform: 'translateX(-50%)',
            }
        },
    },
    centerSection: {
        margin: '0 110px',

        '@media(max-width: 1275px)': {
            margin: '0 50px',
            order: -3,
        },

        '@media(max-width: 720px)': {
            width: '100%',
            margin: 0,
            textAlign: 'center'
        }
    },
    address: {
        marginBottom: 30,
    },
    rightSection: {
        alignSelf: 'flex-start',
        '@media(max-width: 1275px)': {
            order: -3,
        },

        '@media(max-width: 720px)': {
            marginTop: 30,
        }
    }
});

export default useStyles;

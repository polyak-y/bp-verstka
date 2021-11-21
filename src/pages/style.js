import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    mediaBanner: {
        padding: '24px 0 24px 0 !important',
        marginBottom: 85,
        filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.2))',
        minHeight: 337,

        '@media(max-width: 1040px)': {
            marginRight: 18,
            marginLeft: 18
        },

        '@media(max-width: 720px)': {
            minHeight: 'auto',
            marginBottom: 40,
        },

        '& .firstBlock': {
            background: '#9B53CD',
            boxShadow: 'none',
        },
        
        '& .secondBlock': {
            background: '#9B53CD',
            boxShadow: 'none',
        },

        '& .thirdBlock': {
            padding: 0,
            background: '#9B53CD',
            boxShadow: 'inset 0px 12px 0px 0px #9B53CD',
        }
    },
    ecoBanner: {
        padding: '24px 0 24px 0 !important',
        marginBottom: 85,
        filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.2))',
        minHeight: 337,

        '@media(max-width: 1040px)': {
            marginRight: 18,
            marginLeft: 18
        },

        '@media(max-width: 720px)': {
            minHeight: 'auto',
            marginBottom: 40,
        },

        '& .firstBlock': {
            background: '#E1E4E1',
            boxShadow: 'none',
        },
        
        '& .secondBlock': {
            background: '#E1E4E1',
            boxShadow: 'none',
        },

        '& .thirdBlock': {
            padding: 0,
            background: '#E1E4E1',
            boxShadow: 'inset 0px 12px 0px 0px #E1E4E1',
        }
    },
    dobroBanner: {
        padding: '24px 0 24px 0 !important',
        marginBottom: 85,
        filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.2))',
        minHeight: 337,

        '@media(max-width: 1040px)': {
            marginRight: 18,
            marginLeft: 18
        },

        '@media(max-width: 720px)': {
            minHeight: 'auto',
            marginBottom: 40,
        },

        '& .firstBlock': {
            background: '#EFD3DF',
            boxShadow: 'none',
        },
        
        '& .secondBlock': {
            background: '#EFD3DF',
            boxShadow: 'none',
        },

        '& .thirdBlock': {
            padding: 0,
            background: '#EFD3DF',
            boxShadow: 'inset 0px 12px 0px 0px #EFD3DF',
        }
    },
    driveBanner: {
        padding: '24px 0 24px 0 !important',
        marginBottom: 85,
        filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.2))',
        minHeight: 337,

        '@media(max-width: 1040px)': {
            marginRight: 18,
            marginLeft: 18
        },

        '@media(max-width: 720px)': {
            minHeight: 'auto',
            marginBottom: 40,
        },

        '& .firstBlock': {
            background: '#0B5EAA',
            boxShadow: 'none',
        },
        
        '& .secondBlock': {
            background: '#0B5EAA',
            boxShadow: 'none',
        },

        '& .thirdBlock': {
            padding: 0,
            background: '#0B5EAA',
            boxShadow: 'inset 0px 12px 0px 0px #0B5EAA',
        }
    },
});

export default useStyles;

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    whiteBanner: {
        padding: '24px 0!important',
        margin: '-127px 89px 0 89px',
        filter: 'drop-shadow(0px 10px 34px rgba(0, 0, 0, 0.15))',

        '@media(max-width: 1200px)': {
            margin: '-24px 89px 0 89px',
        },
        
        '@media(max-width: 900px)': {
            margin: '-24px 0px 0px 0px',
        },

        '@media(max-width: 720px)': {
            filter: 'none'
        },

        '& .firstBlock': {
            background: '#fff',
            boxShadow: 'none',
        },

        '& .secondBlock': {
            background: '#fff',
            boxShadow: 'none',
        },

        '& .thirdBlock': {
            background: '#fff',
            boxShadow: 'none',
        },
    }
});

  export default useStyles;

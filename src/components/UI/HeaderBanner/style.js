import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    HeaderBanner: props => ({
        maxWidth: 1440,
        height: 920,
        background: props.bgColor,

        '@media(max-width: 1200px)': {
            height: 'auto'
        }
    })
});

  export default useStyles;

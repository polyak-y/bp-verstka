import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        //background: 'black',
        padding: '24px 0 36px 0'
    },
    firstBlock: {
        display: 'flex',
        minHeight: 48,
        background: 'blue',
        boxShadow: '0px 12px 0px 0px #C2CCCF',
    },
    secondBlock: {
        width: 'calc(100% - 24px)',
        minHeight: '100%',
        marginBottom: -24,
        position: 'relative',
        left: 12,
        top: -12,
        background: 'orange',
        boxShadow: '0px 12px 0px 0px #C2CCCF',
    },
    thirdBlock: {
        display: 'flex',
        width: 'calc(100% - 24px)',
        height: 'calc(100% + 24px)',
        position: 'relative',
        left: 12,
        top: -12,
        background: 'green',
        boxShadow: 'inset 0px 12px 0px 0px red, 0px 12px 0px 0px #C2CCCF',
        padding: '24px 0',

        '& > div': {
            width: '100%'
        }
    },
  });

  export default useStyles;

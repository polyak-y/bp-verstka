import { createUseStyles } from 'react-jss';
import family from 'assets/images/family.png';
import familyMob from 'assets/images/family-mob.png';
import snow from 'assets/images/snow.png';
import snowMob from 'assets/images/snow-mob.png';
import tree from 'assets/images/tree.svg';

const useStyles = createUseStyles({
    container: {
        paddingTop: 159,
        paddingLeft: 120,
        height: '100%',
        background: `url(${family}) no-repeat right bottom, url(${snow}) no-repeat left 85px, url(${tree}) no-repeat 39% calc(100% - 151px)`,
        
        '@media(max-width: 1200px)': {
            paddingTop: 50,
            paddingBottom: 50,
            background: `url(${family}) no-repeat right bottom, url(${snow}) no-repeat left bottom`,
            backgroundSize: '30%, 50%'
        },

        '@media(max-width: 900px)': {
           paddingLeft: 50
        },

        '@media(max-width: 720px)': {
            padding: '76px 30px 320px 30px',
            background: `url(${tree}) no-repeat calc(50% - 95px) calc(100% - 24px), url(${familyMob}) no-repeat center bottom, url(${snow}) no-repeat left bottom`,
            backgroundSize: '92px auto, auto, 90%'
        },

        '@media(max-width: 450px)': {
            padding: '76px 30px 320px 30px',
            background: `url(${tree}) no-repeat calc(50% - 95px) calc(100% - 24px), url(${familyMob}) no-repeat center bottom, url(${snowMob}) no-repeat right center`,
            backgroundSize: '92px auto, auto, auto'
        }
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: '125%',
        textTransform: 'uppercase',
        marginBottom: 67,

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
            marginBottom: 20,
        }
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: '125%',
        color: '#fff',
        marginBottom: 116, 

        '@media(max-width: 1200px)': {
            fontSize: 24,
            marginBottom: 30,
        },

        '@media(max-width: 900px)': {
            fontSize: 20,
        },

        '@media(max-width: 720px)': {
            fontSize: 16,
            maxWidth: 200,
            marginBottom: 0,

        },
    },
    button: {
        '@media(max-width: 720px)': {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none'
    }
});

export default useStyles;

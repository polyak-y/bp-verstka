import { buttonPixel, buttonPixelHover, innerPixel, innerPixelHover, innerPixelAfter } from './colorFunctions';
import { createUseStyles } from 'react-jss';

const useStyles =  createUseStyles ({
    wrapButtonPixel: (props) => ({
        width: props.width,
        height: props.height + props.step,
        paddingBottom: props.step,
        paddingLeft: props.step * 2,
        paddingRight: props.step * 2,
        cursor: !props.disabled ? 'pointer' : 'default',
        pointerEvents: !props.disabled ? 'auto' : 'none',
        position: 'relative',
    }),
    buttonPixel: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: props.height,
        boxSizing: 'border-box',
        background: !props.disabled ? buttonPixel(props).background : '#DFDFDF',
        borderTop: !props.disabled ? buttonPixel(props).borderTop : `${props.step}px solid #F6F6F6`,
        borderBottom: !props.disabled ? buttonPixel(props).borderBottom : `${props.step}px solid #D4D3D3`,
        boxShadow: `0px ${props.step}px 0px 0px ${props.shadowColor || '#EAEAEA'}`,
        position: 'relative',
        color: !props.disabled ? props.textColor || '#fff' : '#fff',
        fontSize: 28,
        fontFamily: 'Inter',
        fontWeight: 600,
        textDecoration: 'none',
        userSelect: 'none',
        zIndex: 3,
        transition: 'all .3s',

        '&:hover': {
            background: !props.disabled ? buttonPixelHover(props).background : '#DFDFDF',
            borderTop: !props.disabled ? buttonPixelHover(props).borderTop : `${props.step}px solid #F6F6F6`,
            borderBottom: !props.disabled ? buttonPixelHover(props).borderBottom : `${props.step}px solid #D4D3D3`,

            '& + $innerPixel': {
                background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF',

                '&:before': {
                    background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF'
                },

                '&:after': {
                    background: !props.disabled ? innerPixelHover(props).background : '#DFDFDF'
                }
            }
        },

        '&:active': {
            boxShadow: !props.disabled && `0px ${props.step}px 0px 0px transparent`,

            '& + $innerPixel': {
                '&:after': {
                    boxShadow: !props.disabled && `-${props.step}px 0px 0px 0px transparent, ${props.step}px 0px 0px 0px transparent, 0px ${props.step}px 0px 0px transparent`,
                }
            }
        }
    }),
    innerPixel: props => ({
        width: '100%',
        height: `calc(100% - ${props.step * 5}px)`,
        background: !props.disabled ? innerPixel(props).background : '#DFDFDF',
        position: 'absolute',
        top: props.step * 2,
        left: 0,
        transition: 'all .3s',

        '&:before': {
            content: "''",
            position: 'absolute',
            width: `calc(100% - ${props.step * 2}px)`,
            height: props.step,
            top: `-${props.step}px`,
            left: props.step,
            background: !props.disabled ? innerPixel(props).background : '#DFDFDF',
            transition: 'all .3s',
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            width: `calc(100% - ${props.step * 2}px)`,
            height: props.step,
            bottom: `-${props.step}px`,
            left: props.step,
            background: !props.disabled ? innerPixelAfter(props).background : '#DFDFDF',
            boxShadow: `-${props.step}px 0px 0px 0px ${props.shadowColor || '#EAEAEA'}, ${props.step}px 0px 0px 0px ${props.shadowColor || '#EAEAEA'}, 0px ${props.step}px 0px 0px ${props.shadowColor || '#EAEAEA'}`,
            transition: 'all .3s',
        }
    }),
});

export default useStyles;

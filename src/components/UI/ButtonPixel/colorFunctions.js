export function buttonPixel (props) {
    const buttonPixel = {};

    switch(props.colorType) {
        case 'lightBlue':
            buttonPixel['background'] = '#6CE7EA';
            buttonPixel['borderTop'] = `${props.step}px solid #92FCFF`;
            buttonPixel['borderBottom'] = `${props.step}px solid #43D7DB`;
            break;

        case 'pink':
            buttonPixel['background'] = '#E07AA6';
            buttonPixel['borderTop'] = `${props.step}px solid #F08FB9`;
            buttonPixel['borderBottom'] = `${props.step}px solid #B05F82`;
            break;

        case 'green':
            buttonPixel['background'] = '#46D24F';
            buttonPixel['borderTop'] = `${props.step}px solid #3BEB84`;
            buttonPixel['borderBottom'] = `${props.step}px solid #16A752`;
            break;

        default:
            buttonPixel['background'] = props.mainColor;
            buttonPixel['borderTop'] = `${props.step}px solid ${props.lightColor}`;
            buttonPixel['borderBottom'] = `${props.step}px solid ${props.darkColor}`;
    }

    return buttonPixel;
}

export function buttonPixelHover (props) {
    const buttonPixelHover = {};
    switch(props.colorType){
        case 'lightBlue':
            buttonPixelHover['background'] = '#79FCFF';
            buttonPixelHover['borderTop'] = `${props.step}px solid #CDFCFD`;
            buttonPixelHover['borderBottom'] = `${props.step}px solid #49E1E5`;
            break;

        case 'pink':
            buttonPixelHover['background'] = '#E3A0BD';
            buttonPixelHover['borderTop'] = `${props.step}px solid #FBABCE`;
            buttonPixelHover['borderBottom'] = `${props.step}px solid #CB87A4`;
            break;

        case 'green':
            buttonPixelHover['background'] = '#69DD70';
            buttonPixelHover['borderTop'] = `${props.step}px solid #A5F4AA`;
            buttonPixelHover['borderBottom'] = `${props.step}px solid #43BD4A`;
            break;

        default:
            return {}
    }

    return buttonPixelHover
}

export function innerPixel(props) {
    const innerPixel = {};
    switch(props.colorType) {
        case 'lightBlue':
            innerPixel['background'] = '#6CE7EA';
            break;

        case 'pink':
            innerPixel['background'] = '#E07AA6';
            break;

        case 'green':
            innerPixel['background'] = '#46D24F';
            break;

        default:
            innerPixel['background'] = props.mainColor;
    }

    return innerPixel;
}

export function innerPixelHover (props) {
    const innerPixel = {};

    switch(props.colorType) {
        case 'lightBlue':
            innerPixel['background'] = '#79FCFF';
            break;

        case 'pink':
            innerPixel['background'] = '#E3A0BD';
            break;

        case 'green':
            innerPixel['background'] = '#69DD70';
            break;

        default:
            return {}
    }

    return innerPixel;
}

export function innerPixelAfter(props) {
    const innerPixelAfter = {};
    switch(props.colorType) {
        case 'lightBlue':
            innerPixelAfter['background'] = '#6CE7EA   ';
            break;

        case 'pink':
            innerPixelAfter['background'] = '#E07AA6 ';
            break;

        case 'green':
            innerPixelAfter['background'] = '#46D24F      ';
            break;

        default:
            innerPixelAfter['background'] = props.darkColor;
    }

    return innerPixelAfter;
}
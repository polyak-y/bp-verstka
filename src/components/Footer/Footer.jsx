import React from 'react';
import useStyles from './style';

 const Footer = ({ bgColor, color, colorMobLine = '#fff'}) => {
    const classes = useStyles({ bgColor, color, colorMobLine });

    return (
        <div className={classes.Footer}>
            <div className={classes.leftSection}>
                <p className={classes.nameCompany}>Федеральное государственное бюджетное учреждение <br /> «Российский центр гражданского и патриотического <br /> воспитания детей и молодежи»</p>
            </div>
            <div className={classes.centerSection}>
                <p className={classes.address}>121099, Москва, <br />Новинский бульвар д. 3 стр. 1</p>
                <p className={classes.email}>
                    <a href="mailto:rospatriotcentr@rospatriotcentr.ru">rospatriotcentr@rospatriotcentr.ru</a>
                </p>
            </div>
            <div className={classes.rightSection}>
                <p className={classes.phone}>
                    <a href="tel:+74999678670">+7 (499) 967-86-70</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
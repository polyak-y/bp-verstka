import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import icon_one from 'assets/images/icon1.png';
import icon_two from 'assets/images/icon2.png';
import icon_three from 'assets/images/icon3.png';
import icon_four from 'assets/images/icon4.svg';
import icon_five from 'assets/images/icon5.png';
import snowflakeMob from 'assets/images/snowflakeMob.png';
import useStyles from './style';

 const Opportunities = () => {
    const classes = useStyles(); 

    return (
        <div className={classes.Opportunities}>
            <h3 className={classes.heading}>ВОЗМОЖНОСТИ:</h3>

            <div className={classes.firstLine}>
                <div className={classes.wrap}>
                    <Banner addedClass={classes.containerForIcon}>
                        <img src={icon_one} alt="icon_one" />
                    </Banner>
                    <p className={classes.text}>Возможность заявить о себе и своей семье, защитить свой семейный проект и стать участником Всероссийской интеллектуально-спортивной игры «Новогодний ДРАЙВинг»</p>
                </div>
                
                <div className={classes.wrap}>
                    <Banner addedClass={classes.containerForIcon}>
                        <img src={icon_two} alt="icon_two" />
                    </Banner>
                    <p className={classes.text}>Встречи и дискуссии с психологами и экспертами, участие в образовательных и творческих площадках, спортивных и интеллектуальных соревнованиях</p>
                </div>                
            </div>   

            <div className={classes.secondLine}>
                <div className={classes.wrap}>
                    <Banner addedClass={classes.containerForIcon}>
                        <img src={icon_three} alt="icon_three" />
                    </Banner>
                    <p className={classes.text}>Опыт создания семейных проектов</p>
                </div>
                
                <div className={classes.wrap}>
                    <Banner addedClass={classes.containerForIcon}>
                        <img src={icon_four} alt="icon_four" />
                    </Banner>
                    <p className={classes.text}>Участие в создании семейного пространства «Большой перемены»</p>
                </div>
                
                <div className={classes.wrap}>
                    <Banner addedClass={classes.containerForIcon}>
                        <img src={icon_five} alt="icon_five" />
                    </Banner>
                    <p className={classes.text}>Возможность реализовать свой проект</p>
                </div>
            </div>

            <img className={classes.snowflakeMob} src={snowflakeMob} alt="snowflakeMob" />
        </div>
    )
}
export default Opportunities;
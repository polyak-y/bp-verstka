import React, { useCallback, useMemo } from 'react';
import { useMedia } from 'react-media';
import Banner from 'components/UI/Banner/Banner';
import BannerContentScheduleCompetition from 'components/BannerContentScheduleCompetition/BannerContentScheduleCompetition';
import dotLine  from 'assets/images/dotLine.svg';
import megafon from 'assets/images/megafon.svg';
import squaresGray from 'assets/images/squaresGray.svg';
import squaresGrayMob from 'assets/images/squaresGrayMob.svg';
import snowDrive from 'assets/images/snow-drive.png';
import useStyles from './style';


 const ScheduleCompetition = ({ type, dopType = false, dateOne, dateTwo }) => {
    const classes = useStyles({ type, dopType });
    const isMob = useMedia({ query: "(max-width: 720px)" });

    const classForDopType = useMemo(() => {
        const arrClass = [classes.ScheduleCompetitionBanner]
        if(dopType) {
            arrClass.push(classes.dopScheduleCompetitionBanner)
        }

        return arrClass.join(' '); 
        //eslint-disable-next-line
    }, []);

    const dopImages = useCallback((type) => {
        switch(type) {
            case 'violet':
                return {
                    src: megafon,
                    clas: classes.megafon
                }
                case 'darkGreen':
                    return {
                        src: isMob ? squaresGrayMob : squaresGray,
                        clas: isMob ? classes.squaresGrayMob : classes.squaresGray
                    }
                case 'blue':
                    return {
                        src:  snowDrive,
                        clas: classes.snowDrive
                    }
            default:
                return false;    
        }
        //eslint-disable-next-line
    }, [isMob]);
 
    return (
        <div className={classes.Schedulecompetition}>
            {
                dopImages(type) &&
                    <img className={dopImages(type).clas} src={dopImages(type).src} alt="img" />
            }
            <div className={classes.firstLine}>
                <h3 className={classes.heading}>ГРАФИК ПРОВЕДЕНИЯ КОНКУРСА</h3>
                <Banner addedClass={classes.ScheduleCompetitionBanner}>
                    <BannerContentScheduleCompetition 
                        dateText={`${dateOne.from} - ${dateOne.to}`}
                        descriptions={<>Дистанционный этап конкурса. <br />Приём работ</>}
                    />
                </Banner>
            </div>
            <div className={classes.secondLine}>
                <h3 className={classes.heading}>ГРАФИК <br /> ПРОВЕДЕНИЯ <br /> КОНКУРСА</h3>
                <Banner addedClass={classForDopType}>
                    <BannerContentScheduleCompetition 
                        dateText={`${dateTwo.from} - ${dateTwo.to}`}
                        descriptions={<>Очный этап конкурса в Москве</>}
                        dateTextMob={`${dateOne.from} - ${dateOne.to}`}
                        descriptionsMob={<>Дистанционный этап конкурса. <br />Приём работ</>}
                    />
                </Banner>
                <img className={classes.img} src={dotLine} alt="dotLine" />
            </div>
        </div>
    )
}

export default ScheduleCompetition;

import React from 'react';
import useStyles from './style';

const BannerContentScheduleCompetition = ({ dateText, descriptions, dateTextMob, descriptionsMob}) => {
    const classes = useStyles();

    return (
        <div className={classes.BannerContentScheduleCompetition}>
            <h5 className={classes.dateTextMob}>{ dateTextMob }</h5>
            <p className={classes.descriptionsMob}>{ descriptionsMob }</p>
            <p className={classes.lineMob}></p>
            <h5 className={classes.dateText}>{ dateText }</h5>
            <p className={classes.descriptions}>{ descriptions }</p>
        </div>
    )
}

export default BannerContentScheduleCompetition;
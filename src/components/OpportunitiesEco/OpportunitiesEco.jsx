import React from 'react';
import Banner from 'components/UI/Banner/Banner';
import treeCircle from 'assets/images/tree-circle.svg';
import useStyles from './style';

const OpportunitiesEco = () => {
    const classes = useStyles()

    return (
        <div className={classes.OpportunitiesEco}>
            <img className={classes.img} src={treeCircle} alt="treeCircle" />
            <div>
                <h3 className={classes.heading}>ВОЗМОЖНОСТИ:</h3>
                <Banner addedClass={classes.OpportunitiesEcoBanner}>
                    <div className={classes.bannerContent}> 
                        <p className={classes.text}>Возможность заявить о себе, защитить свой экологический проект и стать победителем Всероссийского конкурса «Экопоколений»</p>
                        <p className={classes.text}>Всероссийское сообщество экологов</p>
                        <p className={classes.text}>Встречи и дискуссии с выдающимися представителями науки, природопользования, охраны окружающей среды, экологии, волонтёрства</p>
                        <p className={classes.text}>Опыт решения экологических проблем</p>
                        <p className={classes.text}>Возможность реализовать свой проект</p>
                    </div>
                </Banner>
            </div> 
        </div>
    )
}

export default OpportunitiesEco;

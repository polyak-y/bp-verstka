import React, { useMemo } from 'react';
import useStyles from 'components/UI/Banner/style'

const Banner = ({ children, addedClass = false }) => {
    const classes = useStyles()

    const additionalСlass = useMemo(() => {
        const classesArr = [classes.wrapper];

        if(addedClass) {
            classesArr.push(addedClass)
        }

        return classesArr.join(' ');
        //eslint-disable-next-line
    }, [addedClass])

    return (
        <div className={additionalСlass}>
           <div className={`${classes.firstBlock} firstBlock`}>
                <div className={`${classes.secondBlock} secondBlock`}>
                    <div className={`${classes.thirdBlock} thirdBlock`}>
                        { children }
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Banner;

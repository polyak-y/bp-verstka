import React, { useRef, useEffect } from 'react';
import HeaderBanner from 'components/UI/HeaderBanner/HeaderBanner';
import TopbannerDrive from 'components/TopbannerDrive/TopbannerDrive';
import WhiteBanner from 'components/UI/WhiteBanner/WhiteBanner';
import ContestParticipantsDrive from 'components/ContestParticipantsDrive/ContestParticipantsDrive';
import Opportunities from 'components/Opportunities/Opportunities';
import ScheduleCompetition from 'components/ScheduleCompetition/ScheduleCompetition';
import Support from 'components/Support/Support';
import Footer from 'components/Footer/Footer';
import FadeIn from 'react-fade-in';

const Drive = () => {
    const bgColor = useRef('#0B5EAA');

    useEffect(() => {
        document.title = 'Новогодний Драйвинг';
    }, []);

    return (
        <FadeIn>
            <HeaderBanner bgColor={bgColor.current}>
                <TopbannerDrive />  
            </HeaderBanner>

            <WhiteBanner>
                <ContestParticipantsDrive />
            </WhiteBanner>

            <Opportunities />

            <ScheduleCompetition 
                type="blue" 
                dopType="green"
                dateOne={{
                    from: '15 ноября',
                    to: '25 ноября'
                }}
                dateTwo={{
                    from: '10 декабря',
                    to: '12 декабря'
                }}
            />

            <Support color="#0B5EAA" colorType="green" />

            <Footer bgColor={bgColor.current} color="#fff" />
        </FadeIn>
    )
}

export default Drive;

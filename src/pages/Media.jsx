import React, { useRef, useEffect } from 'react';
import HeaderBanner from 'components/UI/HeaderBanner/HeaderBanner';
import TopBannerMedia from 'components/TopBannerMedia/TopBannerMedia';
import WhiteBanner from 'components/UI/WhiteBanner/WhiteBanner';
import ContestParticipantsMedia from 'components/ContestParticipantsMedia/ContestParticipantsMedia';
import Possibility from 'components/Possibility/Possibility';
import ScheduleCompetition from 'components/ScheduleCompetition/ScheduleCompetition';
import Support from 'components/Support/Support';
import Footer from 'components/Footer/Footer';
import FadeIn from 'react-fade-in';

const  Media = () =>  {
    const bgColor = useRef('#9B53CD')

    useEffect(() => {
        document.title = 'Медиабум'
    }, []);

    return (
        <FadeIn>
            <HeaderBanner bgColor={bgColor.current}>
                <TopBannerMedia />     
            </HeaderBanner>

           <WhiteBanner>
                <ContestParticipantsMedia />
            </WhiteBanner>

            <Possibility />

           <ScheduleCompetition 
                type="violet"
                dopType="lightBlue"
                dateOne={{
                    from: '10 ноября',
                    to: '3 декабря'
                }}
                dateTwo={{
                    from: '13 декабря',
                    to: '15 декабря'
                }}
            />

            <Support color="#822FBC" colorType="lightBlue" />

            <Footer bgColor={bgColor.current} color="#fff" />
        </FadeIn>
    )
}

export default Media;
import React, { useEffect, useRef } from 'react';
import HeaderBanner from 'components/UI/HeaderBanner/HeaderBanner';
import TopBannerEco from 'components/TopBannerEco/TopBannerEco';
import WhiteBanner from 'components/UI/WhiteBanner/WhiteBanner';
import ContestParticipantsEco from 'components/ContestParticipantsEco/ContestParticipantsEco';
import OpportunitiesEco from 'components/OpportunitiesEco/OpportunitiesEco';
import ScheduleCompetition from 'components/ScheduleCompetition/ScheduleCompetition';
import Support from 'components/Support/Support';
import Footer from 'components/Footer/Footer';
import FadeIn from 'react-fade-in';

const Eco = () => {
    const bgColor = useRef('#E8E8E8');

    useEffect(() => {
        document.title = 'Экопоколение'
    }, []); 

    return (
        <FadeIn>
            <HeaderBanner bgColor={bgColor.current}>
                <TopBannerEco />            
            </HeaderBanner>

            <WhiteBanner>
                <ContestParticipantsEco />
            </WhiteBanner>

             <OpportunitiesEco />

            <ScheduleCompetition 
                type="darkGreen"
                dateOne={{
                    from: '10 ноября',
                    to: '1 декабря'
                }}
                dateTwo={{
                    from: '15 декабря',
                    to: '21 декабря'
                }}
            />

            <Support color="#16A752" colorType="green" />

            <Footer bgColor={bgColor.current} color="#535353" colorMobLine={'#535353'} />
        </FadeIn>
    )
}

export default Eco; 

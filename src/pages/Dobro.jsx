import React, { useEffect, useRef } from 'react'
import HeaderBanner from 'components/UI/HeaderBanner/HeaderBanner'
import TopBannerDobro from 'components/TopbannerDobro/TopbannerDobro';
import WhiteBanner from 'components/UI/WhiteBanner/WhiteBanner';
import ContestParticipantsDobro from 'components/ContestParticipantsDobro/ContestParticipantsDobro';
import WhyForYou from 'components/WhyForYou/WhyForYou';
import ScheduleCompetition from 'components/ScheduleCompetition/ScheduleCompetition';
import Support from 'components/Support/Support';
import Footer from 'components/Footer/Footer';
import FadeIn from 'react-fade-in';

 const Dobro = () => {
    const bgColor = useRef('#EFD3DF')

    useEffect(() => {
        document.title = 'От сердца к сердцу'
    }, []); 

    return (
        <FadeIn> 
            <HeaderBanner bgColor={bgColor.current}>
                <TopBannerDobro />            
            </HeaderBanner>

           <WhiteBanner>
                <ContestParticipantsDobro />
            </WhiteBanner>

             <WhyForYou />

            <ScheduleCompetition 
                type="pink"
                dateOne={{
                    from: '15 ноября',
                    to: '30 ноября'
                }}
                dateTwo={{
                    from: '4 декабря',
                    to: '6 декабря'
                }}
            />

            <Support color="#B05F82" colorType="pink" />

            <Footer 
                bgColor={bgColor.current} 
                color="#B05F82" 
                colorMobLine="#B05F82"
            />
        </FadeIn>
    )
}

export default Dobro;

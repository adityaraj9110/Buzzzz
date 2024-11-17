import { Carousel, DownloadSection, HeroSection } from 'entities/component'
import { Services } from './Services'
import { BuzWorking } from './BuzWorking'
import { HomeWrapperStyled } from './styles.component'
import { WhyChooseUs } from './WhyChoose'
import { OurPeopleSection } from './OurPeople'

export const Home = () => {
  return (
    <div style={{ gap: '100px', display: 'flex', flexDirection: 'column' }}>
      <HeroSection />
      <HomeWrapperStyled>
        <BuzWorking />
        <Services />
        <WhyChooseUs />
      </HomeWrapperStyled>
      <DownloadSection />
      <HomeWrapperStyled>
        <OurPeopleSection />
      </HomeWrapperStyled>
    </div>
  )
}

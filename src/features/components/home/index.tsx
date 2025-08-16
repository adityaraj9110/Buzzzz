import {
  ComingSoon,
  DownloadSection,
  HeroSection,
  WhyChooseUs,
} from 'entities/component'
import { Services } from './Services'
import { BuzWorking } from './BuzWorking'
import { HomeWrapperStyled } from './styles.component'
import { OurPeopleSection } from './OurPeople'
import { ReferAndEarn } from './ReferAndEarn'
import { whyChooseUseCardData } from 'features/model'
import { useScreenSize } from 'shared/hooks'

export const Home = () => {
  const { smallScreen } = useScreenSize()
  return (
    <div
      style={{
        gap: '100px',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <HeroSection />
      <HomeWrapperStyled>
        <BuzWorking />
        <Services />
        <WhyChooseUs data={whyChooseUseCardData} />
      </HomeWrapperStyled>
      {/* FIXME: Will be shown later when there will be images */}
      {/* <DownloadSection /> */}
      <HomeWrapperStyled>
        <OurPeopleSection />
        <ReferAndEarn />
        <ComingSoon />
      </HomeWrapperStyled>
    </div>
  )
}

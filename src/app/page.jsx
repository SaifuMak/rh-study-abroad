import { sansita } from './fonts';
import Banner from './components/home/Banner';
import About from './components/home/About';
import StudyAbroadStats from './components/home/StudyAbroadStats';
import UnlockingDoorSection from './components/home/UnlockingDoorSection';
import CountriesList from './components/home/CountriesList';
import ReviewsSection from './components/home/ReviewsSection';
export default function Home() {

  return (
    <div className=" overflow-x-hidden">
      <Banner />
      <About />
      <StudyAbroadStats/>
      <UnlockingDoorSection/>
      <CountriesList />
      <ReviewsSection/>
    </div>
  );
}

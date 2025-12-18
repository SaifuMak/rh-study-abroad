import { sansita } from './fonts';
import Banner from './components/home/Banner';
import About from './components/home/About';
import StudyAbroadStats from './components/home/StudyAbroadStats';
import UnlockingDoorSection from './components/home/UnlockingDoorSection';

export default function Home() {

  return (
    <div className="">
      <Banner />
      <About />
      <StudyAbroadStats/>
      <UnlockingDoorSection/>
    </div>
  );
}

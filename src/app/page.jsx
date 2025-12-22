'use client';
import { sansita } from './fonts';
import Banner from './components/home/Banner';
import About from './components/home/About';
import StudyAbroadStats from './components/home/StudyAbroadStats';
import UnlockingDoorSection from './components/home/UnlockingDoorSection';
import CountriesList from './components/home/CountriesList';
import ReviewsSection from './components/home/ReviewsSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Testimonials from './components/home/Testimonials';

export default function Home() {

  return (
    <SmoothScroll>
      <div className=" overflow-x-hidden">
        <Banner />
        <About />
        <StudyAbroadStats/>
        <UnlockingDoorSection/>
        <CountriesList />
        <Testimonials/>
        <ReviewsSection/>
        <ContactSection/>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

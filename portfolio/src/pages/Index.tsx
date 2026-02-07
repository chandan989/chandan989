import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Profile />
        <Projects />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

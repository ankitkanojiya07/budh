import Image from 'next/image';
import TourCard from './TourCard';
import TourCarousel from './TourCarousel';
import HeroForm from './hero-form';
import {  IconCircleArrowRight } from '@tabler/icons-react';

const tourData = [
  {
    image: "/hero2/p1.jpg",
    title: "Trip To Bodh Gaya",
    peopleCount: "31 people going",
    imagePosition: "60.55%_88.33%",
    imageSize: "136.94%_138.96%"
  },
  {
    image: "/hero2/p2.jpg",
    title: "Trip To Mathura",
    peopleCount: "27 people going",
    imagePosition: "46.67%_73.08%",
    imageSize: "136.94%_116.88%"
  },
  {
    image: "/hero2/p1.jpg",
    title: "Trip To McLeodganj",
    peopleCount: "45 people going",
    imagePosition: "60.55%_88.33%",
    imageSize: "136.94%_138.96%"
  },
  {
    image: "/hero2/p2.jpg",
    title: "Trip To Sanchi Stupa",
    peopleCount: "38 people going",
    imagePosition: "46.67%_73.08%",
    imageSize: "136.94%_116.88%"
  },
  {
    image: "/hero2/p3.jpg",
    title: "Trip To Tawang",
    peopleCount: "33 people going",
    imagePosition: "21.24%_84.09%",
    imageSize: "154.31%_128.57%"
  },
  {
    image: "/hero2/p3.jpg",
    title: "Trip To India",
    peopleCount: "20 people going",
    imagePosition: "21.24%_84.09%",
    imageSize: "154.31%_128.57%"
  }
];

export default function Hero3() {
  return (
    <div className="relative w-full min-h-screen h-full overflow-hidden">
      <div className="absolute pointer-events-none select-none inset-0 w-full h-full">
        <Image
          src={"/hero-section.png"}
          alt="Hero Section"
          width={2000}
          height={2000}
          className="object-cover select-none pointer-events-none size-full"
        />
      </div>
      <div className="relative pt-30 min-h-screen z-10 max-w-[1400px] max-sm:px-4 md:px-5 mx-auto flex flex-col justify-center h-full ">
        <div className="flex flex-col gap-6">
          {/* popular tour bar */}
          <div className="flex flex-col max-sm:w-full max-w-xl w-full gap-4 items-center justify-center relative">
            {/* tags lines - moved closer to cards and centered */}
            <div className="flex text-white gap-1.5 font-lora uppercase font-medium justify-center">
              <p>Sanctuaries</p>
              <p>|</p>
              <p>Plains</p>
              <p>|</p>
              <p>Pilgrimages</p>
              <p>|</p>
              <p>Bliss</p>
            </div>
            {/* Arrow button removed 
            <div className="flex items-center gap-2 justify-between w-full">
              <h3 className="text-2xl font-semibold uppercase text-white">
                Most Popular
              </h3>
              <button className="rounded-full">
                <span className='sr-only'>next</span>
                <IconCircleArrowRight className="size-6 text-white" />
              </button>
            </div>
            */}

            <TourCarousel tours={tourData} className="w-full" />
          </div>

          <div className="w-full flex justify-center">
            <HeroForm />
          </div>
        </div>
      </div>
    </div>
  );
}

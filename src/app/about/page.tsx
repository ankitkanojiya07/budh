import {Timeline, TimelineEntry } from "@/components/Timeline";
import lifeOfBuddhaDataImporter from '@/content-data/life-of-buddha-data/lifeOfBuddhaDataImporter';

const Page = () => {
    const lifeData = lifeOfBuddhaDataImporter();

    const ordered = [
        lifeData.birth,
        lifeData.childhood,
        lifeData.fourEncounter,
        lifeData.departure,
        lifeData.enlightenment,
        lifeData.teachings,
        lifeData.parinirvana
    ];
    const imgs = [
      "/journey/23.jpg",
      "/journey/24.jpg",
      "/journey/26.jpg",
      "/journey/32.jpg",
      "/journey/23.jpg",
      "/journey/24.jpg",
      "/journey/26.jpg",
      "/journey/32.jpg",
    ];

    const timelineData: TimelineEntry[] = ordered.map((entry,idx) => ({
      title: entry.name,
      circleImg: imgs[idx],
      img: imgs[idx],
      content: (
        <div className="space-y-4 text-neutral-700">
          {Array.isArray(entry.para) &&
            entry.para.map((p: string, idx: number) => (
              <p
                key={idx}
                className="md:text-[1vw] sm:text-md leading-relaxed text-justify"
              >
                {p}
              </p>
            ))}
        </div>
      ),
    }));

    return (
      <main className="pt-28 bg-gradient-to-b from-orange-50 via-amber-25 to-yellow-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center flex-col py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl font-cinzel-decorative mb-4 text-black font-semibold dark:text-white max-w-4xl">
            From Prince to Buddha
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 font-lora text-sm md:text-base max-w-3xl text-center">
            A royal life surrendered, a spiritual quest embraced—Buddha’s
            transformation reveals that true freedom lies not in power, but in
            understanding and liberation.
          </p>
        </div>
        <Timeline data={timelineData} />
      </main>
    );
};

export default Page;
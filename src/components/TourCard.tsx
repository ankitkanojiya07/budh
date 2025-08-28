import { IconUser } from "@tabler/icons-react";
import Image from "next/image";

interface TourCardProps {
  image: string;
  title: string;
  peopleCount: string;
  imagePosition?: string;
  imageSize?: string;
}

export default function TourCard({ 
  image, 
  title, 
  peopleCount, 
  imagePosition = "60.55%_88.33%", 
  imageSize = "136.94%_138.96%" 
}: TourCardProps) {
  // const imgFrame = "http://localhost:3845/assets/e67d0e78f8fd41164cd47d9e008781ee7336b896.svg";

  return (
    <div className="w-full flex flex-col gap-2 p-2 shadow-2xl bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white">
      <div className="w-full h-40 overflow-hidden shadow-2xl rounded-lg">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-semibold text-[#023F76]">{title}</h3>
        <p className="text-sm text-[#023F76] flex items-center gap-1">
          <IconUser className="size-4" />
          {peopleCount}
        </p>
      </div>
    </div>
  );
}
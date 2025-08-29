"use client";

import { IconCalendar, IconChevronDown, IconHome2, IconHomeBitcoin, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

// Icon assets from Figma design
const imgHomeLine = "http://localhost:3845/assets/9bdc09bd2cb6bd1a234eb5881849cdb3884cc40e.svg";
const imgArrowDropDownLine = "http://localhost:3845/assets/881c5608519c381578418dbd4b4ecfeeed29342e.svg";
const imgCalendarLine = "http://localhost:3845/assets/c2aca80158a7146cd0ea5a7bd8b2e8ab2c867ef4.svg";
const imgUser3Line1 = "http://localhost:3845/assets/42c86a46e0ef96b09c80f2b34d192a775238016b.svg";

interface FormData {
  accommodation: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function HeroForm() {
  const [formData, setFormData] = useState<FormData>({
    accommodation: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div>
      {/* 
      Accommodation Form - Commented Out
      
      <form onSubmit={handleSubmit} className="relative bg-transparent rounded-xl px-3 py-2">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          Form Fields
          <div className="flex flex-col flex-1 w-full lg:flex-row gap-6 items-center">
            Accommodation Field
            <div className="flex gap-2 w-full items-center">
              <div>
                <IconHome2 className='size-8 opacity-50'/>
              </div>
              <div className="flex w-full flex-col  flex-1">
                <label className="text-sm font-medium text-[#3e4958]">
                  Accommodation
                </label>
                <input
                  type="text"
                  value={formData.accommodation}
                  onChange={(e) => handleInputChange('accommodation', e.target.value)}
                  placeholder="Enter location or property"
                  className="font-medium text-base text-[#3e4958] bg-transparent border-none outline-none w-full placeholder:text-sm placeholder:font-medium"
                />
              </div>
            </div>

            Divider - White line
            <div className="hidden lg:block bg-white h-[70px] w-[0.728px] opacity-50" />

            Check-in Field
            <div className="flex w-full gap-2 items-center">
              <div>
                <IconCalendar className='size-8 opacity-50'/>
              </div>
              <div className="flex  flex-col  flex-1">
                <label className="text-sm font-medium text-[#3e4958]">
                  Check-in
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="font-bold text-sm text-[#3e4958] bg-transparent border-none outline-none w-full"
                />
              </div>
            </div>

            Divider - White line
            <div className="hidden lg:block bg-white h-[70px] w-[0.728px] opacity-50" />

            Check-out Field
            <div className="flex w-full gap-2 items-center">
              <div>
                <IconCalendar className='size-8 opacity-50'/>
              </div>
              <div className="flex w-full flex-col gap-2 flex-1">
                <label className="text-sm text-[#3e4958]">
                  Check-out
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="font-bold text-sm text-[#3e4958] bg-transparent border-none outline-none w-full"
                />
              </div>
            </div>

            Divider - White line
            <div className="hidden lg:block bg-white h-[70px] w-[0.728px] opacity-50" />

            Guests Field
            <div className="flex w-full gap-2 items-center">
              <div>
                <IconUser className='size-8 opacity-50'/>
              </div>
              <div className="flex w-full  flex-col  flex-1">
                <label className="text-sm font-medium text-[#3e4958]">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="font-medium text-sm text-[#3e4958] bg-transparent border-none outline-none w-full"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          Search Button
          <button
            type="submit"
            className="bg-[#e7ac72] p-4 max-w-[175px] w-full rounded-xl font-bold text-lg text-white hover:bg-[#d19a5f] transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </form>
      */}
    </div>
  );
}
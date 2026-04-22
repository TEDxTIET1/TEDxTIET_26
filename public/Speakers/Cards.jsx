import React from 'react';

const speakers = [
  {
    name: "DIKSHANT",
    title: "Singer-songwriter",
    quote: "\"\"",
    image: "/Speakers/Dikshant.JPG"
  },
  {
    name: "HARINI SIVAKUMAR",
    title: "Entrepreneur",
    quote: "\"\"",
    image: "/Speakers/harini.JPG"
  },
  {
    name: "MUKTI GAUTAM",
    title: "Influencer",
    quote: "\"\"",
    image: "/Speakers/mukti (2).JPG"
  },
  {
    name: "KESHAV SADHNA",
    title: "Actor",
    quote: "\"\"",
    image: "/Speakers/keshav.JPG"
  },
  {
    name: "SIFAT KHURANA",
    title: "Entrepreneur",
    quote: "\"\"",
    image: "/Speakers/sifat.jpg"
  },
  {
    name: "DRISHYAA DUGGAL",
    title: "Cyberpsychology Evangelist",
    quote: "\"Rethinking the Mind in the age of the Algorithm.\"",
    image: "/Speakers/drishyaa.jpg"
  },
  {
    name: "PRATEEK SETHI",
    title: "Film Producer",
    quote: "\"I am an explorer. The new excites me, the old fascinates me, the present captivates me and the future makes me smile.\"",
    image: "/Speakers/prateek.jpg"
  },
  {
    name: "TAPESH KUMAR",
    title: "Pilot",
    quote: "\"Come Fly With Me.\"",
    image: "/Speakers/tapesh.jpg"
  },
  {
    name: "PRITIKA SINGH",
    title: "Founder, CEO",
    quote: "\"You Don't Need to Push Harder. Most people were taught that success requires constant pushing. More effort. More discipline\"",
    image: "/Speakers/pritika.jpg"
  },
  {
    name: "AMARABHA BANERJEE",
    title: "Singer-songwriter",
    quote: "\"\"",
    image: "/Speakers/amarabha.jpg"
  }
];

export default function Cards() {
  return (
    <div className="relative bg-black text-white w-full py-24 z-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#bc001e]/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-[#bc001e]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Spotlight Section */}
        <section className="px-6 md:px-12 mb-16">
          <div className="max-w-7xl mx-auto border-l-4 border-[#eb0028] pl-6 py-4">
            <span className="text-[#eb0028] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Curation Series 01</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              ARCHIVE OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">VOICES</span>
            </h2>
            <p className="max-w-2xl text-stone-400 text-lg leading-relaxed">
              A visual retrospective of the thinkers, builders, and dreamers who have graced the TEDx stage. Explore the legacy of "Ideas Worth Spreading."
            </p>
          </div>
        </section>

        {/* Past Speakers Slider Wrapper */}
        <section className="relative overflow-hidden group">
          {/* Carousel Track */}
          <div className="flex w-max animate-marquee">
            {[...speakers, ...speakers].map((speaker, index) => (
              <div key={index} className="w-[260px] mr-8 flex-shrink-0 group/card cursor-pointer">
                <div className="relative w-full h-[420px] overflow-hidden rounded-lg bg-zinc-900 flex items-center justify-center mb-5">
                  <img
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top grayscale group-hover/card:grayscale-0 transition-all duration-700 ease-in-out"
                    src={speaker.image}
                  />
                  {speaker.quote && speaker.quote !== "\"\"" && (
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                      <p className="text-zinc-100 text-sm italic font-medium leading-relaxed transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                        {speaker.quote}
                      </p>
                    </div>
                  )}
                </div>
                <div className="px-2">
                  <div className="h-1 w-12 bg-[#eb0028] mb-3 transition-all group-hover/card:w-full duration-500"></div>
                  <h3 className="text-xl font-black tracking-tighter mb-1 uppercase whitespace-nowrap overflow-hidden text-ellipsis">{speaker.name}</h3>
                  <p className="text-[#eb0028] text-xs font-bold tracking-widest uppercase">{speaker.title}</p>
                </div>
              </div>
            ))}
          </div>


        </section>
      </div>
    </div>
  );
}

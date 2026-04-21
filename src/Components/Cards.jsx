// import React, { useRef } from 'react';

// const speakers = [
//   {
//     name: "NIKHIL KAMATH",
//     title: "Co-Founder, Zerodha",
//     quote: "\"The days of four-year college courses are over. Speed is the only currency.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6lHJUkstw3vArxUWZGHDuZ7GcM4vBm73Vnaw9jmv5DpzbYUSk7fZK8mZLb0kbKZ1GUSzZEY4jBcD_qoP9lxHpE5VhVvMUrNu1rsTnWuZxoQoT-0VLVW-NqqUNUkfK6oxqD3-5mwq7sIcabfqVLbpGfpc4IX8oStZt6SwwRv3DJvSlAhGJgxZbC7Bv5lUVWI35hViLrUnOHrxNXHxPb56cOuTZWQHHClqoYgnID1_rmtTIAIbIBC50iN2wS1cgwyFdGuBRzKP2g"
//   },
//   {
//     name: "SARAH CHEN",
//     title: "AI Ethicist",
//     quote: "\"The future isn't something we enter; it's something we create together.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5aiI10WKWgUaoP500yG-0MM6xBChJhTH4KSEamnVZw7DDDmP4oQS74anAMIbW9jjguJ2NKSeQq-z7SirLbOpBuwTgwVuwNF_C27M2yhaog3HrEhe9kScwkxvK3l0ufyvrL7GRG7TGEHjoBXIJhf89bdktP9WXKPTqAPtSMYN7eWBly6nclb5B6LJ9SQ0Zb23He0r7vsNwrCQMP5gKXj3GY4U_N1vKO7EmBUgNQjCAnxG9WamKgFZgzNI1LtVK7AUyl4kIjWmjFQ"
//   },
//   {
//     name: "MARCUS THORNE",
//     title: "Urban Architect",
//     quote: "\"Redesigning the heart of the modern metropolis through human empathy.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTS5ZBuHAtU0PPFVhFdpGrzPHQjns2yCwdmOT_8U67Qc_57V0widiG8UMoViNNSndcc4GIc1dw785EHP5z4pn7D4ZXqgBNKyDL2y4hO5Ust-3Tf_cy2TUAkheS9kWutv47QMZYksqjW-m8dCQ_7Y9L0YOyKYpghkS321NWBlupeNcydwiLFKpzPAajbojahz90ZDHiH58kqQeSgOtM4iMuiNsuJlBwyU-gVBWMJ6v6M8_3qZbJWN2g0KkCgswC1nUGspbXNfBZhA"
//   },
//   {
//     name: "ELENA VANCE",
//     title: "Neural Ethicist",
//     quote: "\"The interface is no longer a tool; it's a conversation with our inner self.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs6LQrh8UU5fd-tsDSDOABtkhzWySjEaLlzV0LBzD3BhmZ-IX9k7PsiQqO3an8voWUcxkaxkMK2eEVCQNVCYrxreR0mQ_4CgxR8s6hS5xy9Kewb1ob0dyuicWCqrHA92wEDg0XwLSxdFrm7Xb5dwDMQ4f9yt18Fx5wtP8_vEeT0C9N2TiD_eRRyVmvYCq2755KhK8NUjZyhED7TjDZFJC-haX9aVo0AiI8fRp7nOZ9P2NWrtMl_PwcVNQRmcRRj4NkxNQhWw8Efg"
//   },
//   {
//     name: "DR. ARIS THORNE",
//     title: "Bio-Ethicist",
//     quote: "\"The code of life is written in the margins of our failures.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQZRIVdhe5ZtWv4LuvcHMiclxFvqL4oi1XPEKuLA3Av83xm2Wq2y5MpCjWus-ZnOr_5IUDKsgUJ7mkiRB7hzTxU9CWKqveCl9TYqrgsSByJ-06zsvM7yNe6x2a2AHinCxwybqrM94jsWNvVjzimvYpNDF_IEBNgFHuYT1hIwngEv2WRxERKnFIDsqukG6dLhi1coouxhae_kVx7cSYjpyulLmvYV09PBV4DKD8qAXfiAUj7ohEu4rcmPuPjUlbF-T6a68EGm8y0g"
//   },
//   {
//     name: "JULIAN ROSS",
//     title: "Philosopher",
//     quote: "\"Luxury is the silence between noise in an over-stimulated world.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs-oXofsjiqYcueyrO4MT7Boue1u-SHGZzLfoIrSn3XhvUavr94pUyhNN-wlNybzPv6O2Hwg-R9UTxKcj4ZDZpw4KpJ8Tb7V4bET7mLjeDoynNJXCwa9NuJmMW9ZnyONW2G6YgPJ9HVnvYBGIeqTKMD7LlCbij-WpbPFep3f3ftBI4KTL1U6x9Gn_uXj6x2Q-G-zv9Tae003El3ZfzNekLak8Ol4IKqbs56_iM1ZC1AKA0nukWnuYupV93n78ms_AJVdLcytmWxg"
//   },
//   {
//     name: "AMARA OKAFOR",
//     title: "Human Rights Advocate",
//     quote: "\"Every voice is a revolution waiting for its moment.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAydbx5eo4kDwuFBa9qsD0pzgcriYtMIaaYnN1whpPQT1y4bDJgtxIM5SRFxH_GaM4bILEnJcqwIuu6apwdsC8enBr4WD5hVa5r6_ocoP7-ezBPJCp2R4zefBCU0XH3VGXIIvm18pspxM7hA_uDHdzI511fLDmZegJQa92CBGLaDE4HjUE1TfQNbip5znZAE6wTHarMJcbOvukqwbPdsEw0nOAVPvngMlzr-AtjUJmevM4od59XSScJtO7rObzvPSLR5Vat__SYQw"
//   },
//   {
//     name: "KENJI SATO",
//     title: "Kinetic Typographer",
//     quote: "\"Words move even when they are still, carrying the weight of history.\"",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoKeV_t_DZ7mS_EOSqDkVxVsKZmisd0wRPjS5UECUIaCWM2rh3Mfe8L0KdlX1e1V3PZYiFy0ZqomqpQbCKVeUvBjZVc8I5J7xeOsrDerF-QNcjFwHbAET7zS_3IKJls5C-SzAlRnpDrDjVzjOw3HGsTmzvxHlz4liTUDxqwALTUmBJhPecG5mp1etXCq2YoG8XcoVQlvoIrqMS1ERMS6sFDmA3cXYPiHM6S_b_ivFeIaWy9mmpLEmghFypWmhrwcxIWt7Qw-9NpQ"
//   }
// ];

// export default function Cards() {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative bg-black text-white w-full py-24 z-10 overflow-hidden">
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       {/* Background Decoration */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#bc001e]/10 blur-[120px] rounded-full"></div>
//         <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-[#bc001e]/5 blur-[120px] rounded-full"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Hero Spotlight Section */}
//         <section className="px-6 md:px-12 mb-16">
//           <div className="max-w-7xl mx-auto border-l-4 border-[#eb0028] pl-6 py-4">
//             <span className="text-[#eb0028] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Curation Series 01</span>
//             <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
//               ARCHIVE OF <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">VOICES</span>
//             </h2>
//             <p className="max-w-2xl text-stone-400 text-lg leading-relaxed">
//               A visual retrospective of the thinkers, builders, and dreamers who have graced the TEDx stage. Explore the legacy of "Ideas Worth Spreading."
//             </p>
//           </div>
//         </section>

//         {/* Past Speakers Slider Wrapper */}
//         <section className="relative overflow-hidden group">
//           {/* Navigation Controls */}
//           <div className="absolute inset-y-0 left-0 z-20 flex items-center px-4 pointer-events-none md:px-12">
//             <button
//               onClick={scrollLeft}
//               className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white pointer-events-auto hover:bg-[#eb0028] transition-all active:scale-90"
//             >
//               <span className="material-symbols-outlined">chevron_left</span>
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 z-20 flex items-center px-4 pointer-events-none md:px-12">
//             <button
//               onClick={scrollRight}
//               className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white pointer-events-auto hover:bg-[#eb0028] transition-all active:scale-90"
//             >
//               <span className="material-symbols-outlined">chevron_right</span>
//             </button>
//           </div>

//           {/* Carousel Track */}
//           <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 px-6 md:px-12 scroll-smooth">
//             {speakers.map((speaker, index) => (
//               <div key={index} className="min-w-[85vw] md:min-w-[400px] snap-center flex-shrink-0">
//                 <div className="relative aspect-[9/12] overflow-hidden rounded-lg group/card">
//                   <img
//                     alt={speaker.name}
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover/card:scale-100"
//                     src={speaker.image}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
//                   <div className="absolute bottom-0 left-0 p-8 w-full">
//                     <div className="h-1 w-12 bg-[#eb0028] mb-4 transition-all group-hover/card:w-full duration-500"></div>
//                     <h3 className="text-3xl font-black tracking-tighter mb-1 uppercase">{speaker.name}</h3>
//                     <p className="text-[#eb0028] text-xs font-bold tracking-widest uppercase mb-4">{speaker.title}</p>
//                     <p className="text-zinc-300 text-sm italic font-medium leading-relaxed opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
//                       {speaker.quote}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Scroll Progress Indicator */}
//           <div className="mt-12 flex justify-center gap-3">
//             <div className="w-12 h-1 bg-[#eb0028] rounded-full"></div>
//             <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
//             <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
//             <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResponsiveCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cards = [
    {
      id: 1,
      title: "Nikhil Kamath",
      text: "“The days of four-year college courses are over. Lifelong learning is the new norm—for everyone.”",
      // author: "Nikhil Kamath",
      handle: "@nikhilkamathco",
      image: "/spk4.png",
      caption: "Co-Founder Zerodha",
    },
    {
      id: 2,
      title: "Keshav Sadhna",
      text: "“Dreams don’t work unless you do. Consistency is the only way to turn passion into reality.” ",
      // author: "Keshav Sadhna",
      handle: "@keshavsadhna",
      image: "/spk2.jpeg",
      caption: "Indian actor and model",
    },
    {
      id: 3,
      title: "Harini Sivakumar",
      text: "“Every big change starts with small steps. Believe in yourself, even when no one else does.”",
      // author: "Harini Sivakumar",
      handle: "@harini_sivakumar",
      image: "/spk3.jpeg",
      caption: "Founder and CEO of Earth Rhythm",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: isMobile ? "5px" : "24px",
    backgroundColor: "black",
    fontFamily: "Helvetica, Inter Light, Arial, sans-serif",
  };

  const carouselStyle = {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    minHeight: isMobile ? "500px" : "60vh",
  };

  const slidesContainerStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    height: "100%",
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const slideStyle = {
    width: "100%",
    flexShrink: 0,
    height: "100%",
  };

  const slideContentStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    height: "100%",
    minHeight: isMobile ? "500px" : "500px",
  };

  const textSectionStyle = {
    width: isMobile ? "100%" : "70%",
    padding: isMobile ? "20px" : "32px",
    paddingLeft: isMobile ? "20px" : "80px",
    paddingRight: isMobile ? "20px" : "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    height: "100%",
    overflow: "visible",
    order: isMobile ? 2 : 1,
  };

  const quoteBackgroundStyle = {
    position: "absolute",
    top: isMobile ? "-80px" : "-130px",
    left: "10px",
    width: isMobile ? "120px" : "200px",
    height: isMobile ? "190px" : "300px",
    zIndex: 1,
    pointerEvents: "none",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "scale(0.8) rotate(-15deg)"
      : "scale(1) rotate(0deg)",
    transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  const contentStyle = {
    marginBottom: "24px",
    position: "relative",
    zIndex: 10,
  };

  const headingStyle = {
    fontSize: isMobile ? "1.25rem" : isTablet ? "1.75rem" : "2rem",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#374151",
    lineHeight: 1.4,
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(30px) scale(0.95)"
      : "translateY(0) scale(1)",
    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "200ms",
  };

  const bodyTextStyle = {
    color: "#374151",
    fontSize: isMobile ? "1rem" : isTablet ? "1.25rem" : "1.5rem",
    lineHeight: 1.7,
    marginBottom: "28px",
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(25px) translateX(-10px)"
      : "translateY(0) translateX(0)",
    transition: "all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    transitionDelay: isAnimating ? "0ms" : "600ms",
  };

  const authorStyle = {
    color: "#374151",
    fontSize: "1rem",
    position: "relative",
    zIndex: 20,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "translateY(20px) rotate(-2deg)"
      : "translateY(0) rotate(0deg)",
    transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "1000ms",
  };

  const authorNameStyle = {
    fontWeight: "600",
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    marginBottom: "6px",
    transform: isAnimating ? "scale(0.95)" : "scale(1)",
    transition: "transform 0.5s ease-out",
    transitionDelay: isAnimating ? "0ms" : "1100ms",
  };

  const authorHandleStyle = {
    color: "#6b7280",
    fontSize: isMobile ? "0.7rem" : "0.75rem",
    transform: isAnimating ? "translateX(-5px)" : "translateX(0)",
    transition: "transform 0.6s ease-out",
    transitionDelay: isAnimating ? "0ms" : "1200ms",
  };

  const imageSectionStyle = {
    width: isMobile ? "100%" : "50%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "12px" : "12px",
    flexDirection: "column",
    order: isMobile ? 1 : 2,
  };

  const squareImageStyle = {
    width: isMobile ? "280px" : isTablet ? "350px" : "460px",
    height: isMobile ? "300px" : isTablet ? "380px" : "480px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: isAnimating
      ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    border: "4px solid white",
    position: "relative",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating
      ? "scale(0.85) translateX(20px)"
      : "scale(1) translateX(0)",
    transition: "all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transitionDelay: isAnimating ? "0ms" : "300ms",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const captionStyle = {
    position: "absolute",
    bottom: "0",
    left: "25%",
    right: "0",
    textAlign: "center",
    fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.45rem",
    fontWeight: "700",
    color: "rgba(55, 65, 81, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    backdropFilter: "blur(100px)",
    padding: "12px 16px",
    borderTopLeftRadius: "9px",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateX(100%)" : "translateX(0)",
    transition: "all 1s cubic-bezier(0.34, 0.56, 0.64, 0.9)",
    transitionDelay: isAnimating ? "0ms" : "400ms",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    backgroundColor: "rgba(234, 22, 22, 0.8)",
    border: "none",
    padding: "1px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 0.56, 0.64, 0.9)",
    fontSize: "1.5rem",
    color: "white",
    zIndex: 100,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    width: isMobile ? "30px" : "35px",
    height: isMobile ? "40px" : "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftNavButtonStyle = {
    ...navButtonStyle,
    left: isMobile ? "12px" : "24px",
  };

  const rightNavButtonStyle = {
    ...navButtonStyle,
    right: isMobile ? "12px" : "24px",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    gap: "8px",
  };

  const dotStyle = {
    width: isMobile ? "10px" : "12px",
    height: isMobile ? "10px" : "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: "#ef4444",
    transform: "scale(1.25)",
  };

  const inactiveDotStyle = {
    ...dotStyle,
    backgroundColor: "#d1d5db",
  };

  const counterStyle = {
    textAlign: "center",
    marginTop: "16px",
    color: "#6b7280",
    fontSize: isMobile ? "0.875rem" : "1rem",
  };

  const activeCounterStyle = {
    fontWeight: "600",
    color: "#ef4444",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        minWidth: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={containerStyle}>
        <h1
          style={{
            fontFamily: "Myfont2, sans-serif",
            color: 'red',
            fontSize: '4rem'
          }}
        >
          Past Speakers
        </h1>

        <style>
          {`
    @font-face {
      font-family: "Myfont2";
      src: url(data:font/opentype;base64,PUT-YOUR-BASE64-HERE) format("opentype");
    }
  `}
        </style>

        <div style={carouselStyle}>
          <button
            onClick={prevSlide}
            style={leftNavButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = " scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = " scale(1)";
            }}
          >
            <ChevronLeft size={isMobile ? 16 : 24} color="white" />
          </button>

          <button
            onClick={nextSlide}
            style={rightNavButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = " scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = " scale(1)";
            }}
          >
            <ChevronRight size={isMobile ? 16 : 24} color="white" />
          </button>

          <div style={slidesContainerStyle}>
            {cards.map((testimonial) => (
              <div key={testimonial.id} style={slideStyle}>
                <div style={slideContentStyle}>
                  <div style={textSectionStyle}>
                    <div style={quoteBackgroundStyle}>
                      <img
                        src="/quote.svg"
                        alt=""
                        style={{
                          width: isMobile ? "120px" : "200px",
                          height: isMobile ? "120px" : "200px",
                        }}
                      />
                    </div>
                    <div style={contentStyle}>
                      <h3 style={headingStyle}>{testimonial.title}</h3>

                      <p style={bodyTextStyle}>{testimonial.text}</p>
                      <div style={authorStyle}>
                        <p style={authorNameStyle}>{testimonial.author}</p>
                        <p style={authorHandleStyle}>{testimonial.handle}</p>
                      </div>
                    </div>
                  </div>
                  <div style={imageSectionStyle}>
                    <div style={squareImageStyle}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        style={imageStyle}
                        onError={(e) => {
                          e.target.style.background =
                            "linear-gradient(135deg, #fed7aa, #fef3c7, #bbf7d0)";
                          e.target.style.display = "flex";
                          e.target.style.alignItems = "center";
                          e.target.style.justifyContent = "center";
                          e.target.innerHTML = "👥";
                          e.target.style.fontSize = isMobile ? "3rem" : "4rem";
                        }}
                      />
                      <div style={captionStyle}>{testimonial.caption}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={dotsContainerStyle}>
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={index === currentIndex ? activeDotStyle : inactiveDotStyle}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.4)")}
              onMouseLeave={(e) =>
              (e.target.style.transform =
                index === currentIndex ? "scale(1.25)" : "scale(1)")
              }
            />
          ))}
        </div>

        <div style={counterStyle}>
          <span style={activeCounterStyle}>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          {" • "}
          <span>{String(cards.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}

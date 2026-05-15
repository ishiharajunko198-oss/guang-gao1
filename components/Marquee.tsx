import React from 'react';
import ANKERLogo from '/assets/affiliated/ANKER-logo.png';
import AUKEYLogo from '/assets/affiliated/AUKEY_logo.jpg';
import DJILogo from '/assets/affiliated/dji_logo.jpg';
import SHEINLogo from '/assets/affiliated/shein-logo.png';
import HisenseLogo from '/assets/affiliated/hisense.jpg';
import VivoLogo from '/assets/affiliated/vivo_logo.png';
import TCLLogo from '/assets/affiliated/tcl_logo.png';
import XGIMILogo from '/assets/affiliated/XGIMI-Logo.png';
import Insta360Logo from '/assets/affiliated/Insta360\'s_logo.jpg';
import PioneerLogo from '/assets/affiliated/pioneer.jpg';

type Logo = {
  src: string;
  alt: string;
  adjust?: React.CSSProperties;
};

const logos: Logo[] = [
  { src: ANKERLogo, alt: 'ANKER' },
  { src: AUKEYLogo, alt: 'AUKEY', adjust: { translate: '0 -4px' } },
  { src: DJILogo, alt: 'DJI', adjust: { maxHeight: '45px' } },
  { src: SHEINLogo, alt: 'SHEIN', adjust: { maxHeight: '30px'} },
  { src: HisenseLogo, alt: 'Hisense' },
  { src: VivoLogo, alt: 'Vivo' },
  { src: TCLLogo, alt: 'TCL' },
  { src: XGIMILogo, alt: 'XGIMI', adjust: { maxHeight: '60px' } },
  { src: Insta360Logo, alt: 'Insta360' },
  { src: PioneerLogo, alt: 'Pioneer', adjust: { translate: '0 -2px' }  },
];

const Marquee: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden -mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-[1.2rem] xs:text-[1.35rem] sm:text-5xl font-black text-jp-navy whitespace-nowrap">
            導入企業
          </h2>
          <div className="w-16 h-1.5 bg-[#ff9900] mx-auto mt-10 rounded-full" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex">
            <div className="flex flex-nowrap gap-16 items-center animate-marquee flex-shrink-0 pr-16">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  style={logo.adjust}
                  className="max-h-8 md:max-h-8 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-nowrap gap-16 items-center animate-marquee flex-shrink-0 pr-16">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  style={logo.adjust}
                  className="max-h-8 md:max-h-8 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;

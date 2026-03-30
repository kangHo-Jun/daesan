import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Directions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapElementRef = useRef<HTMLDivElement>(null);
  const infoBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=2d7a1f292b2843acdf9d63b5c8ba8d5c&libraries=services&autoload=false';
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map');
        if (!container) return;

        const position = new window.kakao.maps.LatLng(37.3943, 126.9568);
        const map = new window.kakao.maps.Map(container, {
          center: position,
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({
          position,
          map,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:8px 14px;font-size:13px;font-weight:700;color:#123628;font-family:Pretendard,sans-serif;">(주)대산</div>',
        });
        infowindow.open(map, marker);
      });
    };
    document.head.appendChild(script);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );

      // Map
      gsap.fromTo(mapContainerRef.current,
        { opacity: 0, scale: 0.98 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          delay: 0.2,
          scrollTrigger: {
            trigger: mapContainerRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );

      // Info Bar
      gsap.fromTo(infoBarRef.current,
        { opacity: 0, y: 10 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.4,
          scrollTrigger: {
            trigger: infoBarRef.current,
            start: 'top 90%',
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section 
      id="directions"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="mb-4 font-[700] leading-[1.3] text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
            찾아오시는 길
          </h2>
          <p className="text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            본사 및 물류센터 안내
          </p>
        </div>

        <div ref={mapContainerRef} className="mb-6">
          <div
            id="kakao-map"
            ref={mapElementRef}
            style={{
              width: '100%',
              height: '450px',
              borderRadius: '10px',
              border: '1px solid rgba(201,168,76,0.2)',
              overflow: 'hidden',
            }}
          />
        </div>

        <div 
          ref={infoBarRef}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-[8px] border border-[#1a3a28]/10 bg-white px-[20px] py-[14px]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[rgba(26,58,40,0.7)]">경기도 안양시 동안구 관악대로 279</span>
          </div>
          <div className="hidden h-[12px] w-[1px] bg-[#1a3a28]/10 md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[rgba(26,58,40,0.7)]">031-388-3833</span>
          </div>
          <div className="hidden h-[12px] w-[1px] bg-[#1a3a28]/10 md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[rgba(26,58,40,0.7)]">ds-cjh@daesan.biz</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const THUMBNAIL_URL = 'https://tv.naver.com/embed/96658718';
const MODAL_VIDEO_URL = 'https://www.youtube.com/embed/tJ_8JRkG3JI';

export default function SupplyChain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLButtonElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headerRef.current, thumbnailRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const autoplayTimer = window.setTimeout(() => {
      setIframeSrc(`${MODAL_VIDEO_URL}?autoplay=1&mute=1`);
    }, 1000);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([modalBackdropRef.current, modalDialogRef.current], { clearProps: 'all' });
    } else {
      gsap.set(modalBackdropRef.current, { opacity: 0 });
      gsap.set(modalDialogRef.current, { opacity: 0, scale: 0.98 });

      gsap.to(modalBackdropRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });

      gsap.to(modalDialogRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    }

    return () => {
      window.clearTimeout(autoplayTimer);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIframeSrc('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !modalBackdropRef.current || !modalDialogRef.current) {
      setIframeSrc('');
      setIsModalOpen(false);
      return;
    }

    gsap.to(modalDialogRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.2,
      ease: 'power2.in',
    });

    gsap.to(modalBackdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setIframeSrc('');
        setIsModalOpen(false);
      },
    });
  };

  return (
    <>
      <section id="supply-chain" ref={sectionRef} className="relative overflow-hidden bg-[#f5f0e8] px-[40px] py-[80px]">
        <div className="mx-auto max-w-[1100px]">
          <div ref={headerRef} className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 font-[700] leading-[1.3] tracking-tight text-[#1a3a28]" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: '38px' }}>
              모든 자재를 한곳에서 한번에 주문
            </h2>
            <p className="text-[16px] font-normal leading-[1.75] text-[rgba(26,58,40,0.6)]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              기초부터 마감까지, 한 번의 발주로 해결합니다
            </p>
          </div>

          <button
            ref={thumbnailRef}
            type="button"
            onClick={openModal}
            aria-label="올인원 영상 재생"
            className="group relative mx-auto block w-full max-w-[1100px] cursor-pointer overflow-hidden rounded-[18px] border border-[#1a3a28]/10 bg-white text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f0e8] hover:border-[#C9A84C]/50"
          >
            <div className="pointer-events-none relative aspect-video w-full overflow-hidden bg-[#e8e0d4]">
              <iframe
                title="올인원 영상 썸네일"
                src={`${THUMBNAIL_URL}?autoPlay=false&mute=true`}
                className="absolute inset-0 h-full w-full scale-[1.02]"
                loading="lazy"
                tabIndex={-1}
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,240,232,0.1)_0%,rgba(245,240,232,0)_54%,rgba(245,240,232,0.9)_100%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[rgba(201,168,76,0.92)] transition-transform duration-300 group-hover:scale-105">
                  <div className="ml-1 h-0 w-0 border-y-[11px] border-y-transparent border-l-[18px] border-l-white" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-6 pb-6 pt-16">
                <div>

                </div>
                <span className="hidden rounded-full border border-[#1a3a28]/10 px-4 py-2 text-[11px] font-semibold text-[rgba(26,58,40,0.68)] md:inline-flex">
                  영상 재생
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div
          ref={modalBackdropRef}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(0,0,0,0.85)] px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label="대산 올인원 서비스 영상"
          onClick={closeModal}
        >
          <div ref={modalDialogRef} className="relative w-full max-w-[860px]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeModal}
              aria-label="영상 닫기"
              className="absolute -top-12 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-[8px] bg-black">
              <iframe
                title="대산 올인원 서비스 영상"
                src={iframeSrc}
                className="h-full w-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Directions() {
  return (
    <section id="directions" className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="aspect-video lg:aspect-square bg-bg rounded-[40px] overflow-hidden border border-border relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.817312373954!2d127.0276197!3d37.5550778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca30000000001%3A0x0!2z64yA7IKw!5e0!3m2!1sko!2skr!4v1710260000000!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div>
            <span className="text-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">Directions</span>
            <h2 className="text-4xl font-bold text-dark mb-12 tracking-tight">찾아오시는 길</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-2">본사 및 물류센터</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    경기도 광주시 초월읍 경충대로 1234-56<br />
                    대산 우드랜드 통합 물류 센터
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-2">대표 번호</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    1588-0000 (평일 08:00 - 18:00)
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-2">영업 시간</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    평일: 07:30 - 18:00<br />
                    토요일: 07:30 - 15:00 (일요일 휴무)
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-bg rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-2">이메일 문의</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    contact@daesanwood.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';

// 랜딩페이지용 - 깔끔한 흰색 배경
export default function LandingKineticGrid() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  // 설정값 - 여기를 수정하면 스타일 변경
  const gridSize = 40;          // 점 간격
  const dotRadius = 2;          // 기본 점 크기
  const maxDistance = 180;      // 마우스 영향 범위
  const maxScale = 3;           // 최대 확대
  const moveAmount = 15;        // 점이 움직이는 정도

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    const animate = () => {
      // 흰색 배경
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 그리드 그리기
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // 마우스 근처: 진한 색상, 크게, 움직임
            const influence = 1 - (distance / maxDistance);
            const scale = 1 + (influence * maxScale);
            const opacity = 0.2 + (influence * 0.6);
            
            // 마우스 방향으로 이동
            const offsetX = (dx / distance) * influence * moveAmount;
            const offsetY = (dy / distance) * influence * moveAmount;
            
            ctx.beginPath();
            ctx.arc(
              x + offsetX, 
              y + offsetY, 
              dotRadius * scale, 
              0, 
              Math.PI * 2
            );
            // 파란색 계열
            ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.fill();
          } else {
            // 멀리: 회색, 작게
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(156, 163, 175, 0.25)';
            ctx.fill();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mousePos]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <canvas 
        ref={canvasRef}
        style={{ 
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      
      {/* 랜딩페이지 콘텐츠는 여기에 */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          대산우드랜드
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#64748b',
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          건축자재 유통의 새로운 기준
        </p>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#2563eb',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#1d4ed8';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 12px rgba(37, 99, 235, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#2563eb';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 6px rgba(37, 99, 235, 0.2)';
        }}>
          지금 시작하기
        </button>
      </div>
    </div>
  );
}


// 버전 2: 더 부드러운 그라데이션 스타일
export function LandingKineticGridSoft() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  const gridSize = 35;
  const dotRadius = 2.5;
  const maxDistance = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const influence = 1 - (distance / maxDistance);
            const scale = 1 + (influence * 2.5);
            
            // 그라데이션 효과 (파랑에서 보라로)
            const hue = 220 - (influence * 40); // 220(파랑) -> 180(청록)
            const saturation = 60 + (influence * 30);
            const lightness = 45 + (influence * 10);
            const opacity = 0.2 + (influence * 0.5);
            
            const offsetX = (dx / distance) * influence * 12;
            const offsetY = (dy / distance) * influence * 12;
            
            // 글로우 효과
            ctx.shadowBlur = 15 * influence;
            ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * 0.5})`;
            
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, dotRadius * scale, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
            ctx.fill();
          } else {
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(203, 213, 225, 0.3)';
            ctx.fill();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <canvas 
        ref={canvasRef}
        style={{ 
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
    </div>
  );
}


// 버전 3: 미니멀 스타일 (가장 심플)
export function LandingKineticGridMinimal() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  const gridSize = 50;
  const dotRadius = 1.5;
  const maxDistance = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const influence = 1 - (distance / maxDistance);
            const scale = 1 + (influence * 4);
            const opacity = 0.15 + (influence * 0.65);
            
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(148, 163, 184, 0.2)';
            ctx.fill();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <canvas 
        ref={canvasRef}
        style={{ 
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
    </div>
  );
}

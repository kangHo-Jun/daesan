import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // 쿼리 파라미터 추출 및 기본값 설정
        const productName = searchParams.get('name') || 'HDF';
        const productDensity = searchParams.get('density') || '850kg/㎥+';
        const grade = searchParams.get('grade') || 'E1';
        const strengthValue = searchParams.get('strength') || '35 N/㎟';

        return new ImageResponse(
            (
                <div style={{
                    width: '800px',
                    height: '2200px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}>
                    {/* SECTION 1 — Hero Card */}
                    <div style={{ position: 'absolute', left: '0px', top: '0px', width: '800px', height: '420px', backgroundColor: '#F5F0E8', borderRadius: '20px', display: 'flex' }}>
                        {/* product_image (placeholder-like div for now as fallback) */}
                        <div style={{ position: 'absolute', left: '0px', top: '0px', width: '380px', height: '420px', backgroundColor: '#C9B896', borderRadius: '20px 0 0 20px', display: 'flex' }} />

                        <div style={{ position: 'absolute', left: '410px', top: '140px', width: '340px', fontSize: '52px', fontWeight: 'bold', color: '#1A1A1A', display: 'flex' }}>
                            {productName}
                        </div>

                        <div style={{ position: 'absolute', left: '410px', top: '210px', width: '340px', fontSize: '28px', color: '#333333', display: 'flex' }}>
                            {productDensity}
                        </div>

                        {/* grade_badge_circle */}
                        <div style={{ position: 'absolute', left: '680px', top: '290px', width: '72px', height: '72px', backgroundColor: '#2E8B57', borderRadius: '50%', display: 'flex' }} />

                        <div style={{ position: 'absolute', left: '680px', top: '300px', width: '72px', fontSize: '26px', fontWeight: 'bold', color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {grade}
                        </div>

                        <div style={{ position: 'absolute', left: '660px', top: '370px', width: '120px', fontSize: '14px', color: '#555555', display: 'flex', justifyContent: 'center' }}>
                            친환경 인공
                        </div>
                    </div>

                    {/* SECTION 2 — Visual Insight Graphic */}
                    <div style={{ position: 'absolute', left: '0px', top: '460px', width: '800px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '18px', display: 'flex' }}>
                            Visual Insight Graphic
                        </div>

                        <div style={{ display: 'flex', gap: '40px' }}>
                            {/* compare_background area */}
                            <div style={{ width: '500px', height: '280px', backgroundColor: '#F0EDE6', borderRadius: '12px', padding: '10px', display: 'flex', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '10px', top: '10px', fontSize: '15px', color: '#555555', display: 'flex' }}>일반 MDF</div>
                                <div style={{ position: 'absolute', left: '10px', top: '40px', width: '220px', height: '220px', backgroundColor: '#DDD', borderRadius: '8px', display: 'flex' }} />

                                <div style={{ position: 'absolute', left: '260px', top: '10px', fontSize: '15px', color: '#555555', display: 'flex' }}>고밀도 HDF</div>
                                <div style={{ position: 'absolute', left: '260px', top: '40px', width: '220px', height: '220px', backgroundColor: '#2d5a3d', opacity: 0.1, borderRadius: '8px', display: 'flex' }} />
                            </div>

                            {/* Chart area (using simple SVG for Donut) */}
                            <div style={{ position: 'relative', width: '240px', height: '240px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg width="240" height="240" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="#EEE" strokeWidth="15" />
                                    {/* 75% blue arc */}
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="#2196F3" strokeWidth="15" strokeDasharray="188.5 251.3" transform="rotate(-90 50 50)" />
                                    {/* 10% black arc */}
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="15" strokeDasharray="25.1 251.3" transform="rotate(180 50 50)" />
                                </svg>
                                <div style={{ position: 'absolute', top: '5px', width: '160px', fontSize: '14px', color: '#555555', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>밀도 높음</div>
                                <div style={{ position: 'absolute', top: '95px', width: '160px', fontSize: '18px', fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>휨 강도</div>
                                <div style={{ position: 'absolute', top: '125px', width: '160px', fontSize: '16px', color: '#555555', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{strengthValue}</div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3 — Usage Guide Card */}
                    <div style={{ position: 'absolute', left: '0px', top: '830px', width: '800px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '18px', display: 'flex' }}>
                            Usage Guide Card
                        </div>

                        <div style={{ display: 'flex', gap: '40px' }}>
                            <div style={{ width: '240px', height: '220px', backgroundColor: '#F0EDE6', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '60px', marginBottom: '10px' }}>🪑</span>
                                <span style={{ fontSize: '20px', color: '#333333', fontWeight: 'bold' }}>가구재</span>
                            </div>

                            <div style={{ width: '240px', height: '220px', backgroundColor: '#F0EDE6', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '60px', marginBottom: '10px' }}>📐</span>
                                <span style={{ fontSize: '20px', color: '#333333', fontWeight: 'bold' }}>마루판</span>
                            </div>

                            <div style={{ width: '240px', height: '220px', backgroundColor: '#F0EDE6', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '60px', marginBottom: '10px' }}>🧱</span>
                                <span style={{ fontSize: '20px', color: '#333333', fontWeight: 'bold' }}>건축 내장재</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer or Bottom Padding */}
                    <div style={{ position: 'absolute', left: '0px', top: '1100px', width: '800px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #EEE' }}>
                        <span style={{ color: '#AAA', fontSize: '14px' }}>ZART CONST. | HDF INFOGRAPHIC</span>
                    </div>
                </div>
            ),
            {
                width: 800,
                height: 2200,
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate image: ${e.message}`, { status: 500 });
    }
}

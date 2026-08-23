import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#12120f', color: '#d8ff48', fontSize: 27, fontWeight: 800, letterSpacing: '-3px' }}>
      AM<span style={{ color: '#f15a29' }}>.</span>
    </div>,
    size,
  );
}

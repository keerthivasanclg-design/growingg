import React from 'react';

interface GrowingLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
}

export const GrowingLogo: React.FC<GrowingLogoProps> = ({
  className = '',
  size = 36,
  showText = false,
  textColor = 'text-white',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Exact geometric SVG reproduction of the 'growing' circular G logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        {/* Brand circle with exact color #2b3785 */}
        <circle cx="50" cy="50" r="48" fill="#2b3785" />
        
        {/* Precision stylized 'G' glyph with arrow/notch center */}
        <path
          d="M 68 28
             C 63 21 54 18 45 18
             C 27.5 18 14 32.2 14 50
             C 14 67.8 27.5 82 45 82
             C 62 82 74 71 78.5 56
             L 78.5 51
             L 47 51
             L 64 61
             C 60 67 53 70 45 70
             C 33.5 70 25.5 61 25.5 50
             C 25.5 39 33.5 30 45 30
             C 52 30 58.5 33.5 62.5 38.5
             Z"
          fill="#FFFFFF"
        />
      </svg>

      {showText && (
        <span className={`font-black tracking-tight text-xl lowercase ${textColor}`}>
          growing<span className="text-[#2b3785]">.</span>
        </span>
      )}
    </div>
  );
};

export default GrowingLogo;

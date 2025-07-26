export default function KandyanCurvyDivider() {
  return (
    <div className="w-full flex justify-center my-8 px-4" aria-hidden="true">
      <svg
        width="400"
        height="40"
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full"
      >
        <defs>
          <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>
        </defs>

        {/* Left curved line, now ends closer to flower */}
        <path
          d="M10 20 Q 100 5, 160 20"
          stroke="url(#gold-grad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right curved line, starts closer to flower */}
        <path
          d="M240 20 Q 300 35, 390 20"
          stroke="url(#gold-grad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Kandyan flower in center */}
        <g transform="translate(200, 20)">
          {[...Array(6)].map((_, i) => {
            const angle = (360 / 6) * i;
            return (
              <ellipse
                key={i}
                cx={0}
                cy={-8}
                rx={6}
                ry={12}
                fill="url(#gold-grad)"
                stroke="#B8860B"
                strokeWidth="1"
                transform={`rotate(${angle})`}
              />
            );
          })}
          <circle cx="0" cy="0" r="6" fill="#B8860B" />
        </g>
      </svg>
    </div>
  );
}

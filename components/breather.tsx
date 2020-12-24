//metrics from
//https://betterme.world/articles/meditation-breathing-techniques/
export const Breather = ({
  size,
  clock,
}: {
  size: number,
  clock: number,
}) => {

  if (size > 500) {
    size = 500
  }

  return (
    <div>
      <svg id="core" height={size} width={size}>
        <defs>
          <radialGradient id="GradientReflect"
                r={.5}
                spreadMethod="reflect">
            <stop offset="20%" stopColor="#B2D0C6="/>
            <stop offset="30%" stopColor="rgba(221,182,227,1)"/>
            <stop offset="70%" stopColor="#4f9ec0"/>
            <animate attributeName="r"
              begin="0.5s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values=".515;1.5;.515"
              keyTimes="0;0.5;1"
              dur="7s"
              repeatCount="6"
            />
          </radialGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 10}
          stroke="url(#GradientReflect)"
          strokeWidth={size / 10}
          fill="transparent"
          strokeOpacity="1"
        >
        <animate id="fadein"
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.5s"
          begin="0s"
        />
          {/* Grow the radius */}
        <animate
          attributeName="r"
          begin="0.5s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values={`${size / 10 };${size / 2.5};${size / 10 }`}
          keyTimes="0;0.5;1"
          dur="7s"
          repeatCount="6"
          />

        <animate id="growRing"
          attributeName="stroke-width"
          begin="0.5s"
          calcMode="spline"
          keySplines="0.3 0 1 1;0.3 0 1 1"
          values={`${size / 10 };${size / 13};${size / 10 }`}
          keyTimes="0;0.5;1"
          dur="7s"
          repeatCount="6"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0.1"
          dur="2.5s"
          begin="growRing.end"
        />
        </circle>
      </svg>
      <footer>
        fast charging {Math.round(Math.abs(clock) / 45 * 100) }%
      </footer>
    </div>
  )
}
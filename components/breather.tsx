//metrics from
//https://betterme.world/articles/meditation-breathing-techniques/
export const Breather = ({
  size,
  flow,
}: {
  size: number,
  flow: number,
}) => {

  return (
    <svg id="core" height={size} width={size}>
      <defs>
        <radialGradient id="GradientReflect"
              r={.5}
              spreadMethod="reflect">
          <stop offset="20%" stopColor="#B2D0C6"/>
          <stop offset="30%" stopColor="rgba(221,182,227,1)"/>
          <stop offset="70%" stopColor="#4f9ec0"/>
          <animate attributeName="r"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values=".515;1.5;.515"
            keyTimes="0;0.5;1"
            dur="7s"
            repeatCount="10"
          />
        </radialGradient>
      </defs>

      <circle
        cx={size / 2}
        cy={size / 2}
        r={100}
        stroke="url(#GradientReflect)"
        strokeWidth={60}
        fill="transparent"
      >
        {/* Grow the radius */}
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
        values="100;200;100"
        keyTimes="0;0.5;1"
        dur="7s"
        repeatCount="10"
        />

      <animate
        attributeName="stroke-width"
        begin="0s"
        calcMode="spline"
        keySplines="0.3 0 1 1;0.3 0 1 1"
        values="80;70;80"
        keyTimes="0;0.5;1"
        dur="7s"
        repeatCount="10"
      />
      <animate
        attributeName="stroke-width"
        begin="0s"
        calcMode="spline"
        keySplines="0.3 0 1 1;0.3 0 1 1"
        values="80;70;80"
        keyTimes="0;0.5;1"
        dur="7s"
        repeatCount="10"
      />
      </circle>
    </svg>
  )
}
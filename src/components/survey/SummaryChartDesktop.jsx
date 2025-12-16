import React from "react";
import ArrowAsset from "../../assets/Arrow 1.svg";
import VectorTick from "../../assets/Vector 2.svg";

const remToPx = (rem) => rem * 16;
const SCALE = 1.5;

const BOX_WIDTH = remToPx(22 * SCALE);
const BOX_HEIGHT = remToPx(13.1332 * SCALE);
const BAR_WIDTH = remToPx(1.975 * SCALE);
const MAX_BAR_HEIGHT = remToPx(7.8125 * SCALE);
const Y_ARROW_LENGTH = remToPx(9.2391 * SCALE);
const X_ARROW_LENGTH = remToPx(16.8416 * SCALE);

const LEFT_MARGIN = 50 * SCALE;
const RIGHT_MARGIN = 30 * SCALE;
const BOTTOM_MARGIN = 38 * SCALE;
const GAP_ADJUSTMENT = 6 * SCALE;

export default function SummaryChartDesktop({ sectionAverages }) {
  const data = [
    { name: "חגים ומועדים משמעותיים", value: sectionAverages.holidays || 0 },
    { name: "אירועי חברה", value: sectionAverages.companyEvents || 0 },
    { name: "אירועים אישיים בחיי העובד", value: sectionAverages.personalEvents || 0 },
    { name: "ציון דרך בקריירה", value: sectionAverages.careerMilestone || 0 },
  ];

  const maxValue = 5;

  const yAxisBottom = BOX_HEIGHT - BOTTOM_MARGIN;
  const yAxisTop = yAxisBottom - MAX_BAR_HEIGHT;
  const chartStartX = LEFT_MARGIN + 15 * SCALE;
  const chartWidth = BOX_WIDTH - chartStartX - RIGHT_MARGIN;
  const gap = (chartWidth - BAR_WIDTH * data.length) / (data.length - 1) - GAP_ADJUSTMENT;

  const getBarColor = (value) => {
    if (value === 0) return "rgba(217, 217, 217, 0.3)";
    if (value <= 2) return "#A17D62";
    if (value <= 3) return "rgba(0, 160, 191, 0.6)";
    if (value <= 4) return "#00A0BF";
    if (value < 5) return "#BADBC9";
    return "#91C8A9";
  };

  const yTicks = [1, 2, 3, 4, 5];

  return (
    <div className="hidden md:flex justify-center mt-2" style={{ width: "100%" }}>
      <svg
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        viewBox={`0 0 ${BOX_WIDTH} ${BOX_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        dir="rtl"
      >
        {/* Axes lines */}
        <line
          x1={LEFT_MARGIN}
          y1={yAxisBottom}
          x2={LEFT_MARGIN}
          y2={yAxisTop}
          stroke="#79BF98"
          strokeWidth={1.5}
        />
        <line
          x1={LEFT_MARGIN}
          y1={yAxisBottom}
          x2={LEFT_MARGIN + X_ARROW_LENGTH}
          y2={yAxisBottom}
          stroke="#79BF98"
          strokeWidth={1.75}
        />

        {/* Axes arrows */}
        <g transform={`translate(${LEFT_MARGIN - 5.5 * SCALE} ${yAxisTop - 25 * SCALE})`}>
          <image href={ArrowAsset} width={12 * SCALE} height={Y_ARROW_LENGTH - 12} />
        </g>

        <g
          transform={`translate(${LEFT_MARGIN + X_ARROW_LENGTH} ${yAxisBottom - 6 * SCALE}) rotate(90)`}
        >
          <image href={ArrowAsset} width={13 * SCALE} height={Y_ARROW_LENGTH} />
        </g>

        {/* Y-axis label */}
        <text
          x={LEFT_MARGIN}
          y={yAxisTop -30 * SCALE}
          fill="#79BF98"
          fontSize={remToPx(0.5 * SCALE)}
          fontWeight={700}
          textAnchor="middle"
        >
          ממוצע בשלות
        </text>

        {/* X-axis label */}
        <text
          x={LEFT_MARGIN + X_ARROW_LENGTH + 10 * SCALE}
          y={yAxisBottom + 1 * SCALE}
          fill="#79BF98"
          fontSize={remToPx(0.5 * SCALE)}
          fontWeight={700}
          textAnchor="end"
        >
          פרק
        </text>

        {/* Y-axis ticks */}
        {yTicks.map((tick) => {
          const yPos = yAxisBottom - (tick / maxValue) * MAX_BAR_HEIGHT;
          return (
            <g key={tick}>
              <image
                href={VectorTick}
                x={LEFT_MARGIN - 9 * SCALE}
                y={yPos - 10 * SCALE}
                width={10 * SCALE}
                height={20 * SCALE}
              />
              <text
                x={LEFT_MARGIN - 20 * SCALE}
                y={yPos + 3 * SCALE}
                fill="#79BF98"
                fontSize={remToPx(0.625 * SCALE)}
                textAnchor="end"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((item, index) => {
          const x = chartStartX + index * (BAR_WIDTH + gap);
          const height = item.value > 0 ? (item.value / maxValue) * MAX_BAR_HEIGHT : 0;
          const y = yAxisBottom - height;
          return (
            <g key={item.name}>
              <rect
                x={x + 5 * SCALE}
                y={yAxisTop}
                width={BAR_WIDTH}
                height={MAX_BAR_HEIGHT}
                fill="#D9D9D94D"
              />
              <rect
                x={x + 5 * SCALE}
                y={y}
                width={BAR_WIDTH}
                height={height}
                fill={getBarColor(item.value)}
              />
              <foreignObject
                x={x - 5 + BAR_WIDTH / 2 - remToPx(1.48603 * SCALE)}
                y={yAxisBottom + 8 * SCALE}
                width={remToPx(4 * SCALE)}
                height={remToPx(3.8315 * SCALE)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    fontSize: `${0.5 * SCALE}rem`,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: `${0.5625 * SCALE}rem`,
                    color: "#79BF98",
                    direction: "rtl",
                  }}
                >
                  {item.name.split(" ").map((word) => (
                    <span key={`${item.name}-${word}`}>{word}&ensp;</span>
                  ))}
                </div>
              </foreignObject>
              <text
                x={x + 5 * SCALE + BAR_WIDTH / 2}
                y={y - 10 * SCALE}
                fill="#79BF98"
                fontSize={remToPx(0.5 * SCALE)}
                textAnchor="middle"
              >
                {item.value?.toFixed ? item.value.toFixed(1) : item.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

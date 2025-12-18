import React from "react";
import ArrowAsset from "../../assets/Arrow 1.svg";
import VectorTick from "../../assets/Vector 2.svg";

const remToPx = (rem) => rem * 16;
const BOX_WIDTH = remToPx(21.4);
const BOX_HEIGHT = remToPx(12.1332);
const BAR_WIDTH = remToPx(1.875);
const MAX_BAR_HEIGHT = remToPx(7.8125);
const Y_ARROW_LENGTH = remToPx(9.2391);
const X_ARROW_LENGTH = remToPx(16.8416);

export default function SummaryChart({ sectionAverages }) {
  const data = [
    { name: "חגים ומועדים משמעותיים", value: sectionAverages.holidays || 0 },
    { name: "אירועי חברה", value: sectionAverages.companyEvents || 0 },
    { name: "אירועים אישיים בחיי העובד", value: sectionAverages.personalEvents || 0 },
    { name: "ציון דרך בקריירה", value: sectionAverages.careerMilestone || 0 },
  ];

  const maxValue = 5;
  const leftMargin = 50;
  const rightMargin = 30;
  const bottomMargin = 38;
  const yAxisBottom = BOX_HEIGHT - bottomMargin;
  const yAxisTop = yAxisBottom - MAX_BAR_HEIGHT;
  const chartStartX = leftMargin + 15;
  const chartWidth = BOX_WIDTH - chartStartX - rightMargin;
  const gap = (chartWidth - BAR_WIDTH * data.length) / (data.length - 1) - 6;

  const getBarColor = (value) => {
    if (value === 0) return "rgba(217, 217, 217, 0.3)";
    if (value < 2) return "#A17D62";
    if (value < 3) return "rgba(0, 160, 191, 0.6)";
    if (value < 4) return "#00A0BF";
    if (value < 5) return "#BADBC9";
    return "#91C8A9";
  };

  const yTicks = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center mt-2" style={{ width: "100%"}}>
      <svg
        width={BOX_WIDTH}
        height={BOX_HEIGHT}
        viewBox={`0 0 ${BOX_WIDTH} ${BOX_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        dir="rtl"
      >
        {/* Axes lines */}
        <line
          x1={leftMargin}
          y1={yAxisBottom}
          x2={leftMargin}
          y2={yAxisTop}
          stroke="#79BF98"
          strokeWidth={1}
        />
        <line
          x1={leftMargin}
          y1={yAxisBottom}
          x2={leftMargin + X_ARROW_LENGTH}
          y2={yAxisBottom}
          stroke="#79BF98"
          strokeWidth={1.1}
        />

        {/* Axes arrows */}
        <g
          transform={`translate(${leftMargin - 5} ${yAxisTop - 15})`}
        >
          <image href={ArrowAsset} width={10} height={Y_ARROW_LENGTH - 12} />
        </g>

        <g transform={`translate(${leftMargin + X_ARROW_LENGTH} ${
          yAxisBottom - 5
        }) rotate(90)`}>
          <image href={ArrowAsset} width={11} height={Y_ARROW_LENGTH } />
        </g>

        {/* Y-axis label */}
        <text
          x={leftMargin }
          y={yAxisTop - 20}
          fill="#79BF98"
          fontSize={remToPx(0.5)}
          fontWeight={700}
          textAnchor="middle"
        >
          ממוצע בשלות
        </text>

        {/* X-axis label */}
        <text
          x={leftMargin + X_ARROW_LENGTH + 3}
          y={yAxisBottom }
          fill="#79BF98"
          fontSize={remToPx(0.5)}
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
                x={leftMargin - 8}
                y={yPos - 6}
                width={8}
                height={12}
              />
              <text
                x={leftMargin - 15}
                y={yPos + 4}
                fill="#79BF98"
                fontSize={remToPx(0.625)}
                lineHeight={remToPx(0.9375)}
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
          const height =
            item.value > 0 ? (item.value / maxValue) * MAX_BAR_HEIGHT : 0;
          const y = yAxisBottom - height;
          return (
            <g key={item.name}>
              <rect
                x={x+10}
                y={yAxisTop}
                width={BAR_WIDTH}
                height={MAX_BAR_HEIGHT}
                fill="#D9D9D94D"
                // rx={4}
              />
              <rect
                x={x+10}
                y={y}
                width={BAR_WIDTH}
                height={height}
                fill={getBarColor(item.value)}
                
              />
              <foreignObject
                x={x + BAR_WIDTH / 2 - remToPx(1.48603)}
                y={yAxisBottom + 4}
                width={remToPx(4)}
                height={remToPx(3.8315)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    fontSize: "0.5rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "0.5625rem",
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
                x={x + 10 + BAR_WIDTH / 2}
                y={y - 5}
                fill="#79BF98"
                fontSize={remToPx(0.5)}
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

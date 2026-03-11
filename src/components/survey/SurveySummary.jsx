import React from "react";
import ScoreExplanation from "./ScoreExplanation";
import SummaryChart from "./SummaryChart";
import SummaryChartDesktop from "./SummaryChartDesktop";
import MegaphoneIcon from "../../assets/megaphone 1.svg";

export default function SurveySummary({ sectionAverages }) {
  return (
    <div className="w-full">
      {/* Green line */}
      <div 
        className="w-full"
        style={{ backgroundColor: '#79BF98', height: '0.3125rem' }}
      />

      

      {/* Background container for explanations and chart */}
      <div 
        className=" px-[35px] py-6 rounded-lg"
        style={{ backgroundColor: 'rgba(121, 191, 152, 0.05)' }}
      >
        {/* Header */}
        <h2 
          className="text-right px-[0px] font-bold text-[0.875rem] md:text-[1.25rem] md:leading-[1.5rem]"
          style={{ 
            color: '#0A476D', 
            marginBottom: '15px'
          }}
        >
          היכן הארגון שלך נמצא?
        </h2>
        {/* Score explanations */}
        <ScoreExplanation />

        {/* Summary chart */}
        <div className="md:hidden">
          <SummaryChart sectionAverages={sectionAverages} />
        </div>
        <div className="hidden md:block h-[25rem]">
          <SummaryChartDesktop sectionAverages={sectionAverages} />
        </div>
      </div>

      {/* Bullets after chart */}
      <div className="flex mt-4 overflow-hidden" style={{ direction: "rtl" }}>
        {/* Right: solid navy icon block */}
        <div
          className="flex items-center justify-center flex-shrink-0 px-4"
          style={{ backgroundColor: '#0A476D' }}
        >
          <img src={MegaphoneIcon} alt="Megaphone" style={{ width: '1.25rem', height: '1.25rem' }} />
        </div>
        {/* Left: 15% navy text block */}
        <div
          className="flex-1 px-4 py-3 space-y-2"
          style={{ backgroundColor: 'rgba(10, 71, 109, 0.15)' }}
        >
          <p className="text-right leading-relaxed text-[0.75rem] md:text-[1rem] font-normal" style={{ color: '#0A476D' }}>
            לאחר זיהוי התחומים בהם כדאי להעמיק או לשפר את היישום בפועל, תוכלו להיעזר בפרקים 2 עד 5 שלהלן המציעים כלים, עקרונות ודוגמאות שיעזרו לכם לפתח סל רווחה מגוון ומותאם תרבותית – צעד אחר צעד.
          </p>
          <p className="text-right leading-relaxed text-[0.75rem] md:text-[1rem] font-normal" style={{ color: '#0A476D' }}>
            במידה והציונים ברוב הצירים נמוכים, או אם ברצונכם לבנות תכנית עבודה שלמה ולזהות את צעדיה, מומלץ להיעזר בפרק 6, הכולל מפת דרכים בת 7 צעדים ליצירת סל רווחה מגוון ומותאם תרבותית, שיאפשר לכם לבחור נקודת התחלה ולהתקדם בצורה מדורגת וריאלית.
          </p>
        </div>
      </div>

      {/* Bottom green line */}
      <div 
        className="w-full mt-4"
        style={{ backgroundColor: '#79BF98', height: '5px' }}
      />
    </div>
  );
}

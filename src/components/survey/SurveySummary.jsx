import React from "react";
import ScoreExplanation from "./ScoreExplanation";
import SummaryChart from "./SummaryChart";
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
          className="text-right px-[0px]"
          style={{ 
            color: '#0A476D', 
            fontSize: '0.75rem', 
            fontStyle:'bold',
            fontWeight: '700',
            marginBottom: '15px'
          }}
        >
          היכן הארגון שלך נמצא?
        </h2>
        {/* Score explanations */}
        <ScoreExplanation />

        {/* Summary chart */}
        <SummaryChart sectionAverages={sectionAverages} />
      </div>

      {/* Bullets after chart */}
      <div className="px-[25px] mt-4 text-right space-y-2" style={{ color: '#79BF98', fontSize: '0.625rem', fontWeight:'400' }} dir="rtl">
        <div className="flex items-start gap-2">
          <img src={MegaphoneIcon} alt="Megaphone" className="w-3 h-3 mt-1" />
          <p>לאחר זיהוי התחומים בהם כדאי להעמיק או לשפר את היישום בפועל, תוכלו להיעזר בפרקים 2 עד 5 שלהלן המציעים כלים, עקרונות ודוגמאות שיעזרו לכם לפתח סל רווחה מגוון ומותאם תרבותית – צעד אחר צעד.</p>
        </div>
        <div className="flex items-start gap-2">
          <img src={MegaphoneIcon} alt="Megaphone" className="w-3 h-3 mt-1" />
          <p>במידה והציונים ברוב הצירים נמוכים, או אם ברצונכם לבנות תכנית עבודה שלמה ולזהות את צעדיה, מומלץ להיעזר בפרק 6, הכולל מפת דרכים בת 7 צעדים ליצירת סל רווחה מגוון ומותאם תרבותית, שיאפשר לכם לבחור נקודת התחלה ולהתקדם בצורה מדורגת וריאלית.</p>
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

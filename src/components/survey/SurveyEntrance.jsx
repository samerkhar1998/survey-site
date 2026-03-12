import React from "react";
import CoImpactLogo from "../../assets/CoImpact Logo.svg";
import BannerRectangle from "../../assets/Rectangle 1.svg";
import Title1 from "../../assets/Title1.svg";
import CommentsIcon from "../../assets/Comments.svg";
import EllipseDot from "../../assets/Ellipse 1.svg";


export default function SurveyEntrance({ onStart }) {
  return (
    <div id="intro" className="w-[100%] max-w-[1200px] mx-auto px-[25px] pt-[53px] m"
      style={{
        paddingLeft: "35px",
        paddingRight: "35px",
        paddingTop: "35px",
        paddingBottom: "0px",}}>
      {/* A. Logo */}
      <div className="flex justify-center">
        <img
          src={CoImpactLogo}
          alt="Co-Impact Logo"
          className="w-[10.125rem] h-[5.125rem] md:w-[13rem] md:h-[5.25rem] object-contain"
        />
      </div>

      {/* B. Banner */}
      <div className="relative mt-[20px] w-full h-[3.25rem] md:h-[5rem]" style={{ maxWidth: '100%' }}>
        <img
          src={BannerRectangle}
          alt="Banner"
          className="w-full h-full object-fill"
          style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center px-4 md:px-10 text-center font-black"
          style={{ color: "#0A476D", fontSize: "1.3125rem", lineHeight: "1.375rem" }}
        >
          <span
            className="px-2 md:px-[4rem] md:text-[1.875rem] md:leading-[1.05]"
          >
            כלים להתאמת סל
            <span className="hidden md:block">רווחה לכלל העובדים</span>
            <span className="block md:hidden">רווחה לכלל העובדים</span>
          </span>
        </div>
      </div>

      {/* C. Paragraph */}
      <div className="mt-[23px] w-full">
        <p 
          className="text-right leading-relaxed md:leading-[1.5rem] text-sm md:text-[1rem]"
          style={{ color: '#5B4B43' }}
        >
          <span className="font-bold" style={{ color: "#0A476D" }}>סל רווחה מותאם תרבותית – </span><span className="font-black" style={{ color: "#0A476D" }}>למה כדאי?</span>
          <br />
          <div className="text-[0.75rem] md:text-[1rem]" style={{marginBottom: '5px'}}> בחברות רבות קיימת עדיין תפיסה של One Size Fits All בתחום הרווחה הארגונית. אולם בפועל, לעובדים שונים יש צרכים מגוונים, נקודות מבט שונות, ותגובות רגשיות שונות לאותם גירויים או יוזמות.</div>
          
          <div className="text-[0.75rem] md:text-[1rem]" style={{marginBottom: '5px'}}>  תחום הרווחה נוגע ישירות בכל עובד ועובדת ברמה האישית, הקבוצתית והארגונית. כאשר הוא מותאם למאפיינים ולצרכים של אוכלוסיות מגוונות, הוא יכול לשמש כלי משמעותי לעידוד מוטיבציה, שימור עובדים, הגברת תחושת השייכות וחיזוק ערכי הסובלנות והוגנות. כל אלה משפיעים באופן ישיר גם על הרווחיות והביצועים הארגוניים <a href="https://co-impact.org.il/calculator/" target="_blank" rel="noopener noreferrer" style={{ color: '#006FFF', textDecoration: 'underline' }}>(ע"פ מחקר ומחשבון הפוטנציאל הכלכלי של העסקה מגוונת-TASC)</a> סל רווחה מותאם תרבותית מעביר לעובדים מסר ברור: הארגון רואה אותם, מבין את צרכיהם ומעריך את הייחודיות שלהם. כך הוא מחזק את תחושת השייכות, מעודד גיבוש צוותי, ומעורר "גאוות יחידה".</div>
        </p>


        {/* Recommendation with icon */}
        {/* Recommendation with icon */}
        <div
          className="flex mt-4 overflow-hidden"
          style={{ direction: "rtl" }}
        >
          {/* Right: solid green icon block */}
          <div
            className="flex items-center justify-center flex-shrink-0 px-4"
            style={{ backgroundColor: '#79BF98' }}
          >
            <img
              src={CommentsIcon}
              alt="Comments"
              style={{ width: '1.25rem', height: '1.25rem' }}
            />
          </div>
          {/* Left: 30% green text block */}
          <div
            className="flex-1 px-4 py-3"
            style={{ backgroundColor: 'rgba(121, 191, 152, 0.3)' }}
          >
            <p className="text-right leading-relaxed text-[0.75rem] md:text-[1rem] font-normal" style={{ color: '#0A476D' }}>
              <span className="font-bold">המלצה גורפת</span> – לשלב עובדים מתרבויות שונות בקבלת החלטות לגבי האירועים והפעילויות השונות
            </p>
          </div>
        </div>
      </div>

      {/* Blue line with dot */}
      <div className="mt-8 -mx-[25px]">
        <div className="relative" style={{ height: '2px' }}>
          <img
            src={EllipseDot}
            alt=""
            className="absolute"
            style={{
              width: '0.75rem',
              height: '0.75rem',
              left: '27px',
              top: '50%',
              transform: 'translateY(-50%)',
              
              
            }}
          />
          <div className="absolute" style={{ backgroundColor: '#0A476D', height: '2px', left: '37px', right: '-10px', top: '0' }} />
        </div>
      </div>

    </div>
    
  );
}

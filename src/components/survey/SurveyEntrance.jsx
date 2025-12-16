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
          className="object-contain"
          style={{ width: '8.125rem', height: '2.125rem' }}
        />
      </div>

      {/* B. Banner */}
      <div className="relative mt-[20px] w-full" style={{ maxWidth: '100%', height: '3.25rem' }}>
        <img
          src={BannerRectangle}
          alt="Banner"
          className="w-full h-full object-contain"
          style={{ borderTopLeftRadius: 0, borderBottomRightRadius: 0 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={Title1}
            alt="Title"
            style={{ width: "12.9375rem", height: "2rem" }}
          />
        </div>
      </div>

      {/* C. Paragraph */}
      <div className="mt-[23px] w-full">
        <p 
          className="text-right leading-relaxed text-sm"
          style={{ color: '#5B4B43' }}
        >
          <span className="font-bold" style={{ color: "#0A476D", fontSize: "0.875rem" }}>סל רווחה מותאם תרבותית – </span><span className="font-black" style={{ color: "#0A476D", fontSize: "0.875rem" }}>למה כדאי?</span>
          <br />
          <div style={{marginBottom: '5px', fontSize: '0.75rem'}}> בחברות רבות קיימת עדיין תפיסה של One Size Fits All בתחום הרווחה הארגונית. אולם בפועל, לעובדים שונים יש צרכים מגוונים, נקודות מבט שונות, ותגובות רגשיות שונות לאותם גירויים או יוזמות.</div>
          
          <div style={{marginBottom: '5px',fontSize: '0.75rem'}}>  תחום הרווחה נוגע ישירות בכל עובד ועובדת ברמה האישית, הקבוצתית והארגונית. כאשר הוא מותאם למאפיינים ולצרכים של אוכלוסיות מגוונות, הוא יכול לשמש כלי משמעותי לעידוד מוטיבציה, שימור עובדים, הגברת תחושת השייכות וחיזוק ערכי הסובלנות והוגנות. כל אלה משפיעים באופן ישיר גם על הרווחיות והביצועים הארגוניים <a href="https://co-impact.org.il/calculator/" target="_blank" rel="noopener noreferrer" style={{ color: '#006FFF', textDecoration: 'underline' }}>(ע"פ מחקר ומחשבון הפוטנציאל הכלכלי של העסקה מגוונת-TASC)</a> סל רווחה מותאם תרבותית מעביר לעובדים מסר ברור: הארגון רואה אותם, מבין את צרכיהם ומעריך את הייחודיות שלהם. כך הוא מחזק את תחושת השייכות, מעודד גיבוש צוותי, ומעורר "גאוות יחידה".</div>
        </p>

        {/* Recommendation with icon - Desktop */}
        <div className="hidden md:flex items-start gap-2 mt-4" style={{ color: '#79BF98', fontSize: '0.625rem', fontWeight:'400' }}>
          <img
            src={CommentsIcon}
            alt="Comments"
            className="w-3 h-3 mt-1"
          />
          <p className="text-right text-sm leading-relaxed" style={{ fontSize: "0.75rem" }}>
            <span className="font-bold">המלצה גורפת</span> – לשלב עובדים מתרבויות שונות בקבלת החלטות לגבי האירועים והפעילויות השונות
          </p>
        </div>

        {/* Recommendation with icon - Mobile */}
        <div className="md:hidden mt-4" style={{ color: '#79BF98', fontSize: '0.625rem', fontWeight:'400' }}>
          <p
            className="flex items-start gap-2 text-right text-sm leading-relaxed"
            style={{ fontSize: "0.75rem" }}
            dir="rtl"
          >
            <span className="font-bold flex items-center gap-1">
              המלצה גורפת
              <img
                src={CommentsIcon}
                alt=""
                className="w-3 h-3 flex-shrink-0"
              />
            </span>
            – לשלב עובדים מתרבויות שונות בקבלת
            <br />
            החלטות לגבי האירועים והפעילויות השונות
          </p>
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

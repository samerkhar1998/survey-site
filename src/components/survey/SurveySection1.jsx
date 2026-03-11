import React, { useState } from "react";
import QuestionSection from "./QuestionSection";
import SurveySummary from "./SurveySummary";
import SectionRectangle from "../../assets/Section rectangle.svg";
import AccuracyIcon from "../../assets/Accuracy.svg";
import OperaGlasses from "../../assets/Opera Glasses.svg";
import SearchIcon from "../../assets/search icon.svg";
import CalendarIcon from "../../assets/calendar 1.svg";
import BusinessPlanIcon from "../../assets/business-plan 1.svg";

const holidaysQuestions = [
"עד כמה הארגון מכיר ומתייחס לכלל חגי האוכלוסיות השונות?",
"עד כמה פעילויות סביב חגים מתוכננות כך שכלל העובדים יכולים להשתתף ולהרגיש בנוח?",
"עד כמה הארגון מנצל חגים מגוונים ליצירת הזדמנות ללמידה הדדית והיכרות תרבותית?",
"עד כמה הארגון מכיר ומציין מועדים משמעותיים לכלל האוכלוסיות, ומגלה רגישות סביב ימים בעלי מטען רגשי ולאומי, באופן התורם לשיח מכבד ולשמירה על אקלים ארגוני מיטיב?"];


const companyEventsQuestions = [
"עד כמה מתחשבים בהבדלים תרבותיים (דת, מגדר, תחבורה, אוכל, שעות פעילות, מיקום וכו') בעת תכנון אירועי חברה?",
"עד כמה משתפים עובדים ממגוון תרבויות בתכנון ובחשיבה על אירועים?",
"עד כמה המסרים והברכות באירועים כוללים ערכים של גיוון, הכלה, וכבוד הדדי?"];


const personalEventsQuestions = [
"עד כמה קיימת מדיניות שוויונית להתייחסות לאירועי חיים שונים (לידות, חתונות, אבל וכו׳?)",
"עד כמה יש לארגון (צוות מש״א, מנהלי צוותים מגוונים ועוד) ידע והבנה של ההבדלים התרבותיים בנוגע לאירועים אלו?",
"עד כמה ניתנת לעובד/ת האפשרות לבחור את אופן הציון או המתנה המתאימים לו/ה תרבותית?"];


const careerMilestoneQuestions = [
"עד כמה תהליכי הקליטה, קידום, ותק ופרידה מותאמים למגוון התרבותי של העובדים (לפי קודים תרבותיים ושפה)?",
"עד כמה הארגון מודע להבדלים תרבותיים בהקשר של קידום עצמי, גישה למכרזים וכיו \"ב?",
"עד כמה הארגון מבטא הוקרה באופן שוויוני, רגיש תרבותית ומכבד?",
"עד כמה קיימת מדיניות או נוהל מוסדר לציון אירועים בקריירה תוך התייחסות להבדלים תרבותיים?"];


export default function SurveySection1() {
  const [sectionAverages, setSectionAverages] = useState({
    holidays: 0,
    companyEvents: 0,
    personalEvents: 0,
    careerMilestone: 0
  });

  const handleAverageChange = (section, average) => {
    setSectionAverages((prev) => ({
      ...prev,
      [section]: average
    }));
  };

	  return (
	    <div id="section1" className="w-[100%] max-w-[1200px] mx-auto px-[35px] pt-[20px]">
	      {/* 1. Header */}
	      <p
	        className="text-right font-bold text-[0.875rem] md:text-[1rem]"
	        style={{ color: '#0A476D' }}
	      >
	        המדריך שלפניך כולל <span style={{ fontWeight: 900 }}>שישה פרקים:</span>
	      </p>

	      {/* 2. Chapters description */}
	      <div className="mt-2 space-y-2" style={{ direction: 'rtl', color: '#5B4B43' }}>
	        <div className="flex items-start gap-2">
	          <img src={SearchIcon} alt="" className="flex-shrink-0 mt-1" style={{ width: '1.25rem', height: '1.25rem' }} />
	          <p className="text-right text-[0.75rem] md:text-[1rem]">הראשון: "בחן את עצמך" – מידת בשלות הארגון בתחום הרווחה המגוונת בארבעה צירים.</p>
	        </div>
	        <div className="flex items-start gap-2">
	          <img src={CalendarIcon} alt="" className="flex-shrink-0 mt-1" style={{ width: '1.25rem', height: '1.25rem' }} />
	          <p className="text-right text-[0.75rem] md:text-[1rem]"><span>ארבעת הפרקים הנוספים</span> עוסקים בארבעת הצירים הנ"ל שהם עולמות תוכן שונים של רווחה ארגונית, וכוללים עקרונות מנחים, צעדים ופרקטיקות ליישום.</p>
	        </div>
	        <div className="flex items-start gap-2">
	          <img src={BusinessPlanIcon} alt="" className="flex-shrink-0 mt-1" style={{ width: '1.25rem', height: '1.25rem' }} />
	          <p className="text-right text-[0.75rem] md:text-[1rem]"><span>פרק שישי:</span> מפת דרכים ליצירת סל רווחה ארגוני שלם מותאם תרבותית.</p>
	        </div>
	      </div>

      {/* 3. Rectangle Banner */}
      <div
        className="relative w-[19.25rem] md:w-[23.25rem]"
        style={{
          height: '3.95rem',
          marginTop: '1.25rem',
          right: '-35px'
        }}
      >
        <img
          src={SectionRectangle}
          alt="Banner"
          className="w-full h-full object-cover"
          style={{
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "60px",
          }}
        />

        <div
          className="text-right leading-tight absolute inset-0 flex flex-col items-end justify-center"
          style={{
            color: '#0A476D',
            width: '100%',
            textAlign: 'right',
            paddingInline: '1rem'
          }}
        >
          <span className="text-lg text-[0.75rem] md:text-[1rem]" style={{ textAlign: 'right', width: '100%'}}>
            <span className="font-black text-[0.825rem] md:text-[1.25rem]">פרק 1:</span>{" "}
            <span className="font-bold text-[0.75rem] md:text-[1rem]">בחן את עצמך</span>
          </span>
          <span className="text-sm font-normal text-[0.75rem] md:text-[1rem]" style={{ textAlign: 'right', width: '100%'}}>
            עד כמה סל הרווחה שלנו מותאם סובלנות והוגנות
          </span>
        </div>
      </div>

      {/* 4. Accuracy Icon + מטרת הפרק */}
	      <div className="flex items-start gap-2 mt-[20px]">
	        <img
	          src={AccuracyIcon}
	          alt="Accuracy"
          className="w-5 h-5 mt-1 flex-shrink-0"
          style={{
            marginTop: '0px'
          }}
           />

	        <span
	          className="text-right text-sm leading-relaxed md:leading-[1.5rem]"
	          style={{
	            color: '#5B4B43',
	            
	          }}
	        >
	          <span className="font-bold text-[0.75rem] md:text-[1rem]">מטרת הפרק: </span> 
	          <span className="fonr-normal text-[0.75rem] md:text-[1rem]">להזמין אותך — נציג.ת מש"א, רווחה או גורם מוביל בתחום להתבוננות פנימית על סל הרווחה הקיים בארגון, ובחינה באיזו מידה הוא מגלם עקרונות של סובלנות, הוגנות והכלה תרבותית.</span>

	          <div className="text-[0.75rem] md:text-[1rem]" style={{marginTop: '5px' }}>המטרה היא לא לשפוט, אלא להבין את נקודת הפתיחה של הארגון, לזהות חוזקות, פערים והזדמנויות לשיפור.</div>
	          
	        </span>
	      </div>

      {/* 5. איך עושים את זה? */}
      <p className="text-right text-sm font-bold mt-4 text-[0.75rem] md:text-[1rem]" style={{ color: '#5B4B43', marginTop: '10px' }}>
        איך עושים את זה?
      </p>

	      {/* 6. Description list */}
	      <ol className="text-right text-sm mt-2 list-decimal list-outside pr-4" style={{ color: '#5B4B43', marginTop: '0px' }}>
	        <li className="text-[0.75rem] md:text-[1rem]" style={{marginBottom: '5px'}}>
	          טבלת הבחינה העצמית בנויה סביב ארבעה צירים מרכזיים, המשקפים את עולמות הרווחה בארגון:
	          <div className="flex mt-2" style={{ direction: 'rtl' }}>
	            <ul className="list-disc  mr-4" style={{ flex: '1 1 30%' }}>
	              <li>חגים ומועדים משמעותיים</li>
	              <li>אירועי חברה</li>
	            </ul>
	            <ul className="list-disc  mr-4" style={{ flex: '1 1 30%' }}>
	              <li>אירועים אישיים בחיי העובד</li>
	              <li>ציוני דרך בקריירה</li>
	            </ul>
	          </div>
	        </li>
	        <li className="text-[0.75rem] md:text-[1rem]">לכל ציר מספר שאלות מנחות.</li>
	        <li className="text-[0.75rem] md:text-[1rem]">דרגו כל היגד בסולם של 1 עד 5 בהתאם למידת היישום בארגון שלכם: כאשר 1 = רמה התחלתית, ו- 5 = יישום מתקדם ומשולב בתרבות הארגונית.</li>
	      </ol>

      {/* 7. Opera glasses + בחן/י את עצמך */}
      <div className="flex items-start gap-2 mt-4">
        <img
          src={OperaGlasses}
          alt="Opera Glasses"
          className="w-5 h-5 mt-1 flex-shrink-0"
          style={{
            width:'2.125rem',
            height:'2.125rem',
            marginTop:'0.5rem'
          }} />
        <div className="flex-column">
          <p className="text-right text-sm font-bold text-[0.75rem] md:text-[1rem]" style={{ color: '#5B4B43', marginTop: '5px' }}>
          בחן/י את עצמך:
	          </p>
	          {/* 8. Scale description */}
	          <p className="text-right text-sm mt-2 text-[0.75rem] md:text-[1rem]" style={{ color: '#5B4B43', marginTop: '5px' }}>
	            1= בכלל לא | 5 = מאד
	          </p>
	        </div>
	        
	      </div>

      
      
      {/* Questions Section - חגים ומועדים */}
      <div className="mt-6 -mx-[35px]">
        <QuestionSection
          title="חגים ומועדים משמעותיים"
          questions={holidaysQuestions}
          onAverageChange={(avg) => handleAverageChange('holidays', avg)} />

      </div>

      {/* Questions Section - אירועי חברה */}
      <div className="mt-4 -mx-[35px]">
        <QuestionSection
          title="אירועי חברה"
          questions={companyEventsQuestions}
          onAverageChange={(avg) => handleAverageChange('companyEvents', avg)} />

      </div>

      {/* Questions Section - אירועים אישיים */}
      <div className="mt-4 -mx-[35px]">
        <QuestionSection
          title="אירועים אישיים בחיי העובד"
          questions={personalEventsQuestions}
          onAverageChange={(avg) => handleAverageChange('personalEvents', avg)} />

      </div>

      {/* Questions Section - ציון דרך בקריירה */}
      <div className="mt-4 -mx-[35px]">
        <QuestionSection
          title="ציון דרך בקריירה"
          questions={careerMilestoneQuestions}
          onAverageChange={(avg) => handleAverageChange('careerMilestone', avg)} />

      </div>

      {/* Summary Section */}
      <div className=" -mx-[35px]" style={{marginTop: '0px'}}>
        <SurveySummary sectionAverages={sectionAverages} />
      </div>
    </div>);

}

import React from "react";
import CardCarousel from "./CardCarousel";
import SurveyCard from "./SurveyCard";
import CompanyEventCard from "./CompanyEventCard";
import EventPlanningCard from "./EventPlanningCard";
import LifeEventCard from "./LifeEventCard";
import MourningCard from "./MourningCard";
import CulturalEventCard from "./CulturalEventCard";
import { X } from "lucide-react";

export default function SurveySection2() {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto px-[25px] pt-[20px]">
      {/* Banner */}
      <div
        id="section2"
        className="relative ml-auto"
        style={{ width: '19.25rem', height: '2.5rem', marginTop: '5px', right: '-25px' }}
      >
        <img
          src="/src/assets/Section rectangle.svg"
          alt="Banner"
          className="w-full h-full object-cover"
          style={{
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "60px",
            
          }}
        />
        <div
          className="absolute inset-0 leading-tight items-end justify-center text-right"
          style={{ color: '#0A476D', width: '-webkit-fill-available', textAlign: 'right', fontWeight:'700', fontSize:'0.75rem',marginTop:'0.5rem', paddingTop:'0.25rem' }}
        >
          <span className="font-black" style={{ textAlign: 'right', width: '-webkit-fill-available', paddingRight:'35px', fontWeight:'900', fontSize:'0.825rem'}}>פרק 2: </span>חגים ומועדים/ימים משמעותיים
        </div>
      </div>

      {/* מטרת הפרק */}
      <div className="flex items-start gap-2 mt-4">
        <img
          src="/src/assets/Accuracy.svg"
          alt="Accuracy"
          className="w-5 h-5 mt-1 flex-shrink-0"
          style={{
            widows:'1.25rem',
            height:'1.0625rem'
          }}
        />
        <div className="text-right text-sm leading-relaxed" style={{ marginTop:'2px',color: '#5B4B43', fontSize:'0.75rem', transform:'translateX(1.5rem)' }}>
          <p>
            <span className="font-bold" style={{marginRight:'1.25rem'}}> מטרת הפרק:</span> לחזק את תחושת השייכות של העובדים (הערבים וכלל האוכלוסיות) לארגון, לתרבות הארגונית ולמרחב המשותף, באמצעות ציון חגים וימים משמעותיים באופן מכבד, הוגן סובלני, מגוון ומותאם תרבותית.
          </p>
          <p className="mt-3">
            ציון חגים וימים משמעותיים מהווה הזדמנות להכניס "צבע" וחיות לארגון, לעודד היכרות בין עובדים מרקעים שונים, ולהגביר הערכה הדדית וחיבור חברתי.
          </p>
        </div>
      </div>

      {/* עקרונות מנחים */}
      <p className="text-right text-sm font-bold mt-6" style={{ color: '#5B4B43', fontSize:'0.75rem' }}>
        עקרונות מנחים:
      </p>

      {/* Two column bullets */}
      <div className="flex gap-6 mt-3" style={{ direction: 'rtl' }}>
        {/* Right column */}
        <div className="flex-1">
          <ul className="text-right text-sm list-disc list-inside" style={{ color: '#5B4B43', fontSize: '0.75rem' }}>
            <li>
              <a href="https://diversityisrael.org.il/calendar25-26/" target="_blank" rel="noopener noreferrer" style={{ color: '#006FFF', textDecoration: 'underline' }}>הטמעת לוח שנה מגוון</a>
              {' '}הכולל חגים לכלל הדתות וימים חשובים לכלל האוכלוסיות – מומלץ להטמעה בקרב צוות מש"א וגיוס, מנהלים לצוותים מגוונים ולהנהלת הארגון.
            </li>
          </ul>
        </div>
        {/* Left column */}
        <div className="flex-1">
          <ul className="text-right text-sm list-disc list-inside" style={{ color: '#5B4B43', fontSize: '0.75rem' }}>
            <li>
              <span>חשוב לתכנן את הפעילויות מראש,</span>
              {' '}ולנצל מועדים שבהם ניתן לשלב ולחגוג חגים של תרבויות שונות, כבסיס לחוויה ארגונית משותפת
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom recommendation */}
      <div className="flex items-start gap-2 mt-6" style={{ color: '#79BF98' }}>
        <span style={{ fontSize: '0.75rem', marginTop:'0.3rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
        <p className="text-right text-sm leading-relaxed">
          <span style={{
            fontSize:'0.75rem',
            fontWeight:'400'
          }}>יש ליישם את הרעיונות ככל שהם נהוגים בארגון גם לכלל האוכלוסייה</span>
        </p>
      </div>

      {/* Cultural Event Cards */}
      <div className="mt-6">
        <CardCarousel>
          <CulturalEventCard
            title="ברכות לרגל החגים של החברה הערבית לכלל עובדי החברה"
            purpose={["חיזוק תחושת הערכה ושייכות", "העלאת מודעות של כלל העובדים/ות בנוגע לחגים מגוונים ולתשומת הלב שהארגון מייחס לנושא"]}
            responsibleParties={['ברכה מהמנכ"ל/ דמות בכירה בארגון', "ברכות מנהלים ישירים לעובדים שלהם", 'ברכות מצוות מש"א לעובדים']}
            notes='מומלץ שהברכה לחגים של החברה הערבית תכלול מסר בשפה הערבית, ולבחון הזדמנויות לחבר ברכה משותפת לכלל העובדים עבור חגים החלים באותה תקופה.'
          />

          <CulturalEventCard
            title="ציון ימים משמעותיים"
            purpose="חיבור לערכים אוניברסליים וחיזוק מחוברות"
            responsibleParties='צוות מש"א'
            notes='מומלץ לבחור ימים משמעותיים המחברים בין כלל העובדים, ובהם ימים בעלי חשיבות בחברה הערבית – כמו "יום האם", בו נהוג לחלק פרח וברכה לאימהות ולסבתות. דוגמאות נוספות: יום האם(בסמוך ליום האישה הבינלאומי), "יום הגיוון הבינלאומי" ו"היום למאבק בגזענות".'
          />

          <CulturalEventCard
            title="הרצאה/ סדנא/ פעילות להעלאת מודעות והיכרות עם החגים/ הימים המשמעותיים השונים"
            purpose={["העמקת הידע התרבותי ההדדי והגברת שיח פתוח בין עובדים מתרבויות שונות", "מתן חשיבות ארגונית לנושא"]}
            responsibleParties='מחלקת הדרכה, צוות מש"א, עובדים מכלל האוכלוסיות'
            notes='הרצאה או פעילות להעלאת מודעות לחגים וימים משמעותיים מאפשרת לעובדים להיות "שגרירים" של תרבותם, מחזקת את תחושת השייכות, ונותנת במה לעובדים להציג את החגים או הימים החשובים להם.'
          />

          <CulturalEventCard
            title="חלוקת ממתקים/ שוקולדים /הפתעות לציון חג או אירוע"
            purpose="יצירת אווירה חגיגית ושיתוף שמחה סביב אירוע משותף"
            responsibleParties="צוות רווחה, מנהלים ישירים"
            notes="לוודא שהשוקולד אינו מכיל אלכוהול עבור עובדים מוסלמים, ניתן להגישו באריזות יפות וממותגות להגברת תחושת הכבוד וההוקרה."
          />

          <CulturalEventCard
            title="חלוקת מתנות לחגים"
            purpose="מתן תחושת כבוד והוקרה, חיזוק תחושת הגאווה לעובדים הערבים"
            responsibleParties="צוות רווחה, רכש, קבוצת מיקוד"
            notes="יש להימנע מאלכוהול כמתנה לעובדים מוסלמים. מתנה נתפסת לעתים כהבעת הערכה וכמקור לכבוד וגאווה של העובד מול משפחתו, לכן עדיף לבחור במתנות מוחשיות עם נראות המשלבות מסר חברתי תוך שמירה על שווי המתנה השווה למתנות לעובדים אחרים."
          />

          <CulturalEventCard
            title="קישוט המרחב הארגוני"
            subtitle="בחגים שונים כמו עץ אשוח בכריסמס, או פנסי רמדאן בתחילת רמדאן"
            purpose="יצירת אווירה חגיגית, הכרה בגיוון התרבותי, חיזוק תחושת שייכות של עובדים חוגגים מתרבויות שונות"
            responsibleParties="צוות רווחה, נציגי עובדים מגוונים"
            notes="להציג את קישוט המרחב הארגוני כקישוט עונתי/מסורתי ולא דתי בלבד, עם סמלים כלליים (כמו כוכבים ואורות) כדי לשמור על תחושת הכלה. ניתן לרכוש את הקישוטים בערים שונות כגון חיפה, נצרת, שפרעם ויפו."
          />
        </CardCarousel>
      </div>

      <div style={{ color: '#5B4B43',fontSize:'0.75rem', lineHeight:'1rem', fontWeight:'400'}}>ניתן לגלול הצידה על מנת לראות חגים ופעילויות נוספים</div>

      {/* Blue line with dot */}
      <div className="mt-8 -mx-[25px]">
        <div className="relative" style={{ height: '2px' }}>
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: '#0A476D',
              left: '25px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <div className="absolute" style={{ backgroundColor: '#0A476D', height: '2px', left: '37px', right: '0', top: '0' }} />
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="mt-8 ">
        <CardCarousel>
          <SurveyCard
            title="רמדאן"
            sections={[
              {
                label: "פעילות:",
                content: "ארוחת איפטאר באחד מ- 30 ימי חודש רמדאן"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "בזמן התכנון חשוב לשלב רגישות לנושא האוכל (חלאל) ותכנון במועד המתאים לאחר שקיעת השמש. ניתן להזמין אוכל מספקים מהחברה הערבית."
              }
            ]}
          />
          <SurveyCard
            title="רמדאן"
            sections={[
              {
                label: "פעילות:",
                content: "סיור לילות רמדאן"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "התאמת הסיור גם למי שאינו חוגג. ניתן להציגו כפעילות תרבותית; הסיורים יכולות להתקיים ביישובים שונים, כגון כפר קאסם, ג'לג'וליה ועוד"
              }
            ]}
          />
          <SurveyCard
            title="עיד אל - פיטר (חג סיום חודש רמדאן)"
            sections={[
              {
                label: "פעילות:",
                content: "ברכה בערבית ומתנה"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "החג אורך שלושה ימים לאחר חודש רמדאן, לכן מומלץ להימנע מאירועים ארגוניים בתקופה זו ולהקפיד על הימנעות מאלכוהול (ובשר חזיר). מומלץ לשלוח ברכה אישית (גם בערבית) מדמות בכירה בארגון. לשקול מתנה סמלית כמו מארז תמרים או ממתקים מסורתיים."
              }
            ]}
          />
          <SurveyCard
            title="עיד אלאדחא"
            sections={[
              {
                label: "פעילות:",
                content: "ברכה בערבית, קישוט המרחב הארגוני"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "החג הוא של מוסלמים ודרוזים ואורך ארבעה ימים. הוא נחשב לחג הגדול של המוסלמים, ולכן שליחת ברכה בערבית נחשבת חשובה במיוחד. עובדים דרוזים דתיים במהלך 10 הימים הקדושים שלפני תחילת החג נדרשים לצאת מוקדם מהעבודה כדי להספיק לתפילות החג. חשוב שהארגון יכיר בכך, ניתן לשקול מתנה מתאימה לציון האירוע."
              }
            ]}
          />
          <SurveyCard
            title="חג הנבי שועייב"
            sections={[
              {
                label: "פעילות:",
                content: "ברכה, קישוט וכיבוד מסורתי"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "החג אורך ארבעה ימים, מ-25 ועד 28 באפריל בכל שנה, ומצוין בקרב הקהילה הדרוזית. נהוג לשלוח ברכות חג ולהציע כיבוד מסורתי כגון עוגיות. בחג זה עולים הדרוזים ברגל לקברו של הנבי שועייב עם דגל הדרוזים, ולכן חשוב במיוחד להציג ביום החג את דגל הקהילה כהכרה וסמל לזהות ולמסורת."
              }
            ]}
          />
          <SurveyCard
            title="כריסמס"
            sections={[
              {
                label: "פעילות:",
                content: "סיור וביקור בכריסמס מרקט"
              },
              {
                label: "דגשים תרבותיים והערות:",
                content: "התאמת הסיור גם למי שאינו חוגג. ניתן להציגו כפעילות תרבותית; הסיורים יכולים להתקיים ביישובים שונים, כגון נצרת, שפרעם, תרשיחא ועוד"
              }
            ]}
          />
        </CardCarousel>
      </div>

      {/* Additional recommendations after cards */}
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.25rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem', transform: 'translateX(1.25rem)' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;בעת תכנון פעילות לחג, יש לערב לכך נציגות מש"א והרווחה, גם מנהלים מצוותים מגוונים, ועובדים שחוגגים את החג, במטרה לחזק את תחושת השייכות של העובדים לארגון ולקבל מהם הערות וטיפים.
          </p>
        </div>

        <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem', transform: 'translateX(1.25rem)' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;מומלץ לתכנן את ציון החגים מראש ולבסוך לחבר בין החגים החלים בסמוך, באמצעות ברכה משותפת, חלוקת מתנות מותאמות לפי חגא (באותו שווי), או קישוט כולל: למשל: חנוכה וכריסטמס, ראש השנה היהודי והנוצרי, פסח ופסחא.
          </p>
        </div>

        <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem', transform: 'translateX(1.25rem)' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;חשוב לתכנן את החופשות בהתאם ללוחות החגים של העובדים השונים, כך שתתאפשר להם מנוחה וחגיגה בהתאם למסורתם ותרבותם, ותישמר תחושת ההתחשבות והשוויון בארגון.
          </p>
        </div>
      </div>

      {/* Bottom green line */}
      <div className="mt-8 -mx-[25px]">
        <div className="w-full" style={{ backgroundColor: '#79BF98', height: '0.3125rem' }} />
      </div>

      {/* Section 3: Company Events */}
      <div id="section3" className="mt-8">
        {/* Banner */}
        <div className="relative ml-auto mb-6" style={{ width: '19.25rem', height: '2.5rem', marginTop: '1.25rem', right: '-25px' }}>
          <img
            src="/src/assets/Section rectangle.svg"
            alt="Banner"
            className="w-full h-full object-cover"
            style={{
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "60px",
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-end text-right"
            style={{ color: '#0A476D', width: '-webkit-fill-available', textAlign: 'right', fontSize:'0.825rem' }}
          >
            <span className="font-black text-sm" style={{ textAlign: 'right', width: '-webkit-fill-available' , paddingRight: '25px'}}>פרק 3
              <span className="font-bold" >: אירועי חברה וגיבושי צוות</span>
              

            </span>
          </div>
        </div>

        {/* מטרת הפרק */}
        <div className="flex items-start gap-2 mt-6">
          <img
            src="/src/assets/Accuracy.svg"
            alt="Accuracy"
            className="w-5 h-5 flex-shrink-0"
          />
          <div className="text-right text-sm leading-relaxed" style={{ color: '#5B4B43', transform:'TranslateX(1.5rem', fontSize:'0.75rem' }}>
            <span className="font-bold">   &ensp;&ensp;&ensp;  מטרת הפרק:</span> לטפח חיבור חברתי, שיתוף פעולה "גאוות יחידה" בין העובדים, ובמקביל לחזק את הזהות הארגונית באמצעות אירועי חברה ופעילויות גיבוש מגוונות. המתוכננות בקרישות תרבותית ובאופן שמאפשר לכל עובד ועובדת להשתתף ולהרגיש חלק מהחוויה המשותפת, לחזק את היכרות האישית ולעודד שיתוף פעולה ותחושת מחויבות הדדית בין העובדים לארגון.
          </div>
        </div>

        {/* Bullets */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
            <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
            <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem', transform: 'translateX(1.5rem)' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;
  אירועי צוות ואירועי חברה הם מרכיב מרכזי בתרבות הארגונית, אך מטרותיהם שונות ומשלימות: השילוב ביניהם מטפח גם לכידות פנים - צוותית וגם שייכות ארגונית רחבה.          </p>
          </div>

          <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "3.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem', transform: 'translateX(1.35rem)' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;
אירוע צוות מוצלח הוא תוצאה של עבודת גיבוש והכנה מוקדמת- הבנת הצרכים, שיתוף בתכנון ויצירת תנאים המאפשרים השתתפות נוחה לכל העובדים, ובכך מחזק היכרות, אמון ושיתוף פעולה. לעומתו, אירוע חברה מחזק זהות ארגונית, תחושת קהילה ו"גאוות יחידה" באמצעות חוויה רחבה ורגישה תרבותית.            </p>
          </div>
        </div>

        {/* עקרונות מנחים */}
        <p className="text-right text-sm font-bold mt-6" style={{ color: '#5B4B43', fontSize:'0.75rem', lineHeight:'0.9375rem', fontWeight:'700' }}>
          עקרונות מנחים לאירועי חברה/ צוות עבודה/ אירוע מצומצם:
        </p>

        {/* Company Event Cards Carousel */}
        <div className="mt-6 ">
          <CardCarousel>
            <CompanyEventCard
              title="הקמת צוות משימה מגוון"
              goal="לעודד שיתופיות, יצירתיות, גמישות מחשבתית והבנת צרכים שונים של העובדים משתתפי האירוע."
              highlights="הרכיבו צוות קטן הכולל עובדים ממגרב האוכלוסיות בארגון (עובדים מהחברה הערבית, נשים, עובדים ממפריפריה, חרדים, בעלי מוגבלויות וכו״) שיקחו חלק בתכנון ובבחירת סוג האירוע, המיקום, הכיבוד וכו״."
              eventType="חברה/ צוות."
            />

            <CompanyEventCard
              title="תכנון מועד האירוע"
              goal="לוודא שלכל העובדים קיימת הזדמנות להשתתף ולהרגיש בנוח"
              highlights={[
                "לתאם מול לוח חגים מגוון: לשים לב לסמיכות מתאימה לימי חג או ימים משמעותיים (ראה/י פרק 2)",
                "לבחור שעות נוחות: יש עובדים/ות שפעילות בשעות מאוחרות מקשה עליהם/ן, במיוחד אם גרים/ות ביישובים עם מגבלות תחבורה בלילה (תושבי הצפון והדרום לרוב)"
              ]}
              eventType="חברה/ צוות"
            />

            <CompanyEventCard
              title="התאמת הכיבוד והפעילות"
              goal="ליצור תחושת שייכות לכולם ולמנוע אי נוחות"
              highlights={[
                "כיבוד מותאם: לדאוג לחלופות שתייה ואוכל שיתאימו לכולם: שתייה לא חריפה, אוכל כשר/ חלאל.",
                "מהות הפעילות: לבחור פעילות שמזמינה את כולם: למשל, ערב קריוקי בעברית בלבד עלול לא להתאים לחלק מהעובדים; אירוע בפאב או טיול בבריכה עשויים להרתיע עובדות/ עובדים שלא ירגישו בנוח להיות בבגד ים בציבור או בחברת מי שלובש בגד ים"
              ]}
              eventType="חברה/ צוות"
            />

            <CompanyEventCard
              title="ווידוא השתתפות כל העובדים"
              goal="לאפשר הזדמנות להשתתפות מלאה ושוויונית"
              highlights="על מנהל/ת הצוות לשים לב לכל הניואנסים ולייצר כמה שיותר תנאים המאפשרים השתתפות נוחה לכלל העובדים. לוודא שתנאי האירוע מתאימים."
              eventType="צוות"
            />

            <CompanyEventCard
              title="שימוש במובילים פנימיים – חבר מביא חבר"
              goal="לעודד הגעה, מעורבות ותחושת קהילה"
              highlights="עובדים מהחברה הערבית או מקבוצות מגוונות יכולים לעודד את עמיתיהם להגיע ולהרגיש חלק מהאירוע. מעורבות של עובדים מובילים תורמת לתחושת השייכות ולהצלחת האירוע"
              eventType="צוות"
            />

            <CompanyEventCard
              title="פתיחת האירוע עם מסר מאחד"
              goal="לעודד הגעה, מעורבות ותחושת קהילה"
              highlights='מומלץ לפתוח את אירועי החברה בדברי ברכה מהמנכ״ל/ית או מדמות ניהולית בכירה, המחזקים את תחושת השייכות והביטחון בפרט לעובדים הערבים, ומשדרים כי סובלנות והוגנות הם ערכים מרכזיים בארגון. בתקופות רגישות – כגון מלחמה, מצב ביטחוני, מועדים ״רגישים״, משבר ציבורי או בחירות לכנסת – דברי הנהלה הכוללים מסרים של כבוד הדדי, שותפות וסולידריות, כמו גם הצבת גבולות ברורים במקרי הצורך לגבי אופן דיבור והתנהגות שהנהלת הארגון מצפה להם, יכולים לשמש עוגן מחזק ומגבש עבור כלל העובדים.'
              eventType="חברה"
            />
          </CardCarousel>
        </div>

        {/* Additional recommendations after cards */}
        <div className="mt-6 space-y-4" style={{marginTop:'0px'}}>
          <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.5rem)' }}>&nbsp;&nbsp;&nbsp;
 כאשר הנהלה חוזרת על מסרים מגבשים של סובלנות והוגנות בעקביות, הם מחלחלים כלפי מטה ומסייעים לעצב תרבות ארגונית סובלנית ומחבקת.          </p>
        </div>

          <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
          <span style={{ fontSize: '0.75rem',width: "3.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
          <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.25rem)' }}>&nbsp;&nbsp;&nbsp;&nbsp;
מומלץ לנהל שיח פתוח עם עובדים מהחברה הערבית בעת תכנון האירוע, כדי להבין צרכים ומגבלות            (זמנים, מיקום, אוכל, אופי הפעילות) ולתאם ציפיות מראש. חשוב להבהיר כי ייתכן שהאירוע לא יתאים במלואו לכל צורך, אך נעשה מאמץ למצוא פתרונות מותאמים וכי השתתפות כלל חברי הצוות משמעותית להצלחת האירוע לעצם ההשתדלות יש ערך רב.          </p>
          </div>
        </div>

          {/* Planning considerations section */}
          <div className="mt-8 -mx-[25px]">
          {/* Blue line with dot */}
          <div className="relative" style={{ height: '2px' }}>
            <div
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: '#0A476D',
                left: '25px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
            <div className="absolute" style={{ backgroundColor: '#0A476D', height: '2px', left: '37px', right: '0', top: '0' }} />
          </div>

          {/* Content box */}
          <div className="px-[25px] py-6 pb-0">
            <p className="text-right text-sm leading-relaxed" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
              תכנון שאינו מתחשב במאפייני האוכלוסיות עלול להביא לתחושת הדרה או לפגיעה בשייכות לחברה ואף לתוצאה ההפוכה מהכוונה של המארגנים. למשל:
            </p>

            <ul className="text-right text-sm list-disc list-inside mt-3 space-y-2" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }} dir="rtl">
              <li>
                חברה שקיימה אירוע חברה באילת במהלך חודש רמדאן, לא אפשר השתתפות העובדים המוסלמים.
              </li>
              <li>
                חברה אחרת שקיימה אירוע בתקופת בין הצרים, מנעה השתתפות של עובדים חרדים.
              </li>
            </ul>

            <p className="text-right text-sm font-bold mt-4" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
              דוגמאות ופרקטיקה לשימוש בעת תכנון אירועים:
            </p>
            </div>
            </div>

            {/* Event Planning Cards Carousel */}
            <div className="mt-5">
              <CardCarousel>
                <EventPlanningCard
                  title="טקס עובדים מצטיינים"
                  sections={[
                    {
                      label: "המלצות לתכנון:",
                      items: [
                        "לבחור מועד שאינו נופל על חגים או מועדים רגישים.",
                        "לדאוג שתהיה הוקרה מכבדת ובעלת ערך תרבותי מותאם לכל המשתתפים – יש עובדים שמעריכים הוקרה פומבית, ויש שיעדיפו הוקרה אישית.",
                        "לפתוח את האירוע בדברי הנהלה הכוללים מסרים של אחדות, הכלה וכבוד הדדי."
                      ]
                    },
                    {
                      label: "שאלות מנחות:",
                      items: [
                        "האם הטקס מנוהל באופן המותאם למגוון תרבויות?",
                        "האם בטקס יש ייצוג לאוכלוסיות מגוונות?",
                        "איזו הוקרה נותנים?",
                        "האם מבטאים הערכה וכבוד באופן ובמידה שיוערכו ע״י עובדים ערבים?"
                      ]
                    }
                  ]}
                />
                <EventPlanningCard
                  title="יום גיבוש צוות"
                  sections={[
                    {
                      label: "המלצות לתכנון:",
                      items: [
                        "להקים צוות משימה מגוון שיבחן האם סוג הפעילות, המיקום, מתאימים לכל המשתתפים.",
                        "חשוב להימנע מפעילויות העלולות ליצור אי־נוחות (למשל בילוי בפאב, לבוש לא מותאם, או שירים בשפה אחת בלבד)."
                      ]
                    },
                    {
                      label: "שאלות מנחות:",
                      items: [
                        "האם כלל חברי הצוות יוכלו להשתתף בנוחות?",
                        "האם האירוע מתחשב במגבלות של תחבורה, דת ומגדר?",
                        "האם נבחנה אפשרות לשלב היכרות בין־תרבותית כחלק מהפעילות?"
                      ]
                    }
                  ]}
                />
                <EventPlanningCard
                  title="יום גיבוש חברה"
                  sections={[
                    {
                      label: "המלצות לתכנון:",
                      items: [
                        "לתכנן את יום הגיבוש כך שישקף את ערכי הארגון ויחזק את תחושת ה\"אנחנו\" תוך כיבוד המגוון התרבותי.",
                        "לבחור תאריך שלא נופל על ימי חג או צום ולוודא שכלל האוכלוסיות יוכלו להשתתף."
                      ]
                    },
                    {
                      label: "שאלות מנחות:",
                      items: [
                        "האם תאריך ומיקום האירוע נוחים לכלל העובדים?",
                        "האם ההנהלה משדרת מסר מאחד וברור על חשיבות הגיוון וההכלה?",
                        "האם קיימת התייחסות שווה לכלל העובדים באירוע?"
                      ]
                    }
                  ]}
                />
                <EventPlanningCard
                  title="ימי משפחה"
                  sections={[
                    {
                      label: "המלצות לתכנון:",
                      items: [
                        "לבחור מיקום נגיש לכלל העובדים (לקחת בחשבון עובדים מהפריפריה).",
                        "לדאוג לאוכל מגוון: כשר, חלאל וללא אלכוהול.",
                        "לתכנן פעילויות ניטרליות מבחינה תרבותית",
                        "לשלב תוכן קצר או ברכה (בשפות שונות) המעבירה ערכים של משפחתיות, חיבור וגיוון תרבותי.",
                        "מומלץ לשלב פעילות המתקיימת גם בשפה הערבית, במיוחד כאשר מדובר בפעילות לילדי העובדים והמשפחות מהחברה הערבית."
                      ]
                    },
                    {
                      label: "שאלות מנחות:",
                      items: [
                        "האם נלקחו בחשבון הצרכים הלוגיסטיים של כלל העובדים?",
                        "האם האוכל והשתייה מתאימים לכל המשתתפים?",
                        "האם יש ייצוג של משפחות מגוונות בפעילויות?",
                        "איך האירוע משקף את ערכי הארגון בנושא סובלנות והוגנות?"
                      ]
                    }
                  ]}
                />
              </CardCarousel>
              </div>

              {/* Green line separator */}
              <div className="mt-8 -mx-[25px]">
              <div className="w-full" style={{ backgroundColor: '#79BF98', height: '5px' }} />
              </div>

              {/* Section 4: Personal Events */}
              <div id="section4" className="mt-8">
              {/* Banner */}
              <div className="relative ml-auto mb-6" style={{ width: '19.25rem', height: '2.5rem', marginTop: '1.25rem', right: '-25px' }}>
                <img
                  src="/src/assets/Section rectangle.svg"
                  alt="Banner"
                  className="w-full h-full object-cover"
                  style={{
                    borderBottomRightRadius: "0px",
                    borderTopLeftRadius: "60px",
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-end text-right"
                  style={{ color: '#0A476D', width: '-webkit-fill-available', textAlign: 'right', fontSize:'0.75rem' }}
                >
                  <span className="font-black text-sm" style={{ textAlign: 'right', width: '-webkit-fill-available' , paddingRight: '25px'}}>פרק 4
                    <span className="font-bold" >: אירועים אישיים בחיי העובד</span>
                    

                  </span>
                </div>
              </div>

              
              {/* מטרת הפרק */}
              <div className="flex items-start gap-2 mt-6">
                <img
                  src="/src/assets/Accuracy.svg"
                  alt="Accuracy"
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-right text-sm leading-relaxed" style={{ color: '#5B4B43', transform:'TranslateX(1.5rem', fontSize:'0.75rem' }}>
                  <span className="font-bold">  &nbsp;&nbsp;&nbsp;&nbsp;   מטרת הפרק:</span>
לחזק את תחושת השייכות, ההערכה והאנושיות כלפי העובדים באמצעות התייחסות רגישה ומותאמת תרבותית לאירועים המרכזיים בחייהם ובחיי משפחתם, כך שכל עובד יחוש כי הארגון רואה אותו כאדם שלם, עם עולם אישי וקהילתי ולא רק כעובד. בפרט, לעובדים מהחברה הערבית יש ייחודיות וקודים תרבותיים חשובים, שהבנתם והכרה בהם על ידי הארגון חיונית לחיזוק תחושת המחוברות והגאווה שלהם כלפי מקום העבודה.                </div>
              </div>

              {/* Green paragraph */}
              <div className="flex items-start gap-2 mt-[10px]" style={{ color: '#79BF98' }}>
                <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.15rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.25rem)' }}>&nbsp;&nbsp;&nbsp;&nbsp;
      להבנה זו חשיבות מיוחדת עבור עובדים מהחברה הערבית, המאופיינת בתרבות קולקטיביסטית, שבה תחושת הכלל            (המשפחה) והמעמד של העובד בעיני סביבתו משפיעים באופן ישיר על תחושת המחוברות והגאווה שלו כלפי היותו חלק ממקום עבודה מסוים, ובסופו של דבר גם על שימורו בארגון.</p>
              </div>

              {/* הקדמה */}
              <div className="text-right text-sm leading-relaxed mt-[10px]" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                <span className="font-bold">הקדמה:</span> אירועים בחיי העובד מהווים נקודות מגע חשובות במיוחד בין הארגון לאדם – רגעים של שמחה, שינוי או קושי, שבהם ניתן לבטא תשומת לב אנושית ומכבדת. התייחסות כזו מעצימה את תחושת ההוגנות והערבות ההדדית בארגון, והיא חלק מתרבות ארגונית רואה, מחבקת ומכבדת.
                <div className="mt-[5px]">
                על מנת להבטיח תחושת שוויון והכלה, מומלץ ליצור איזון והתאמה בין מספר וסוגי האירועים הזוכים להתייחסות. כך למשל, אם הארגון נוהג לציין אירועי חיים דתיים יהודיים (כגון בר מצווה או ברית), ניתן לייצר הקבלה והתייחסות לאירועים דומים בקרב בני דתות אחרות. האיזון הזה מאפשר לעובדים מכלל התרבויות לחוש כי הארגון רואה בהם ובמשפחותיהם שווים, ומכבד את נקודות הציון הייחודיות בתרבותם.
                </div>
              </div>

              {/* Example box */}
              <div className="mt-6  mx-[-25px] px-[25px] py-4" style={{ backgroundColor: 'rgba(10, 71, 109, 0.1)'}}>
                <p className="text-right text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize:'0.75rem'}}>
                  <span className="font-bold" style={{ color: '#79BF98' }}>לדוגמה:</span>
                  <span style={{ color: '#5B4B43' }}> האירוע המקביל לבר מצווה יכול להיות המעבר מבית הספר היסודי לחטיבת הביניים — שלב חיים משמעותי לילד ולמשפחתו.</span>
                </p>
              </div>

              {/* Table intro */}
              <div className="text-right text-sm leading-relaxed mt-[10px]" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                טבלת אירועי חיים בדתות השונות, הטבלה שלהלן מציגה את עיקרי אירועי החיים המרכזיים בדתות השונות ומאפייניהם, ומטרתה לסייע באופן ההתייחסות ובזיהוי נקודות דמיון / יצירת הקבלה בין אירועים דתיים ואישיים במעגל חיי העובד והמשפחה בתרבויות השונות.
              </div>

              {/* Life Events Cards Carousel */}
              <div className="mt-6">
                <CardCarousel>
                  <LifeEventCard
                    title="לידה (תקופה ראשונה ללידה)"
                    sections={[
                      {
                        label: "יהדות:",
                        content: "ברית"
                      },
                      {
                        label: "דרוזים:",
                        content: [
                          "ברית – מתנה נהוגה כסף.",
                          "טקס 40 יום לאחר הלידה. התייחסות: מתנה ליולדת או לתינוק."
                        ]
                      },
                      {
                        label: "איסלם:",
                        content: [
                          "ברית – מתנה נהוגה כסף.",
                          'טקס ה־"עַקִּיקַה" — טקס דתי לרגל הולדת הילד. באירוע זה מדגישים נתינה, ולכן לא מקובל לתת כסף כמתנה. מומלץ להעניק מתנה סמלית ומתאימה ליולדת או לתינוק.'
                        ]
                      },
                      {
                        label: "נצרות:",
                        content: "הטבלה – מתנה נהוגה כסף."
                      }
                    ]}
                  />

                  <LifeEventCard
                    title="מצוות/ נעורים"
                    sections={[
                      {
                        label: "יהדות:",
                        content: "בר מצווה - התייחסות: כסף תלושים, ברכה לבר מצווה."
                      },
                      {
                        label: "דרוזים:",
                        content: [
                          "לחילוניים – מעבר לחטיבה: התייחסות: כסף, תלושים, ברכה למעבר לחטיבה.",
                          "דתיים מקיימים טקס דתי (לגבר בן 16, לאישה בת 15) – התייחסות: כסף, ברכה."
                        ]
                      },
                      {
                        label: "איסלם:",
                        content: "מעבר לחטיבה - התייחסות: כסף, תלושים, ברכה למעבר לחטיבה."
                      },
                      {
                        label: "נצרות:",
                        content: "טקס התבגרות - קונפורמציה התייחסות: כסף, תלושים, ברכה."
                      }
                    ]}
                  />

                  <LifeEventCard
                    title="גיוס/סיום תיכון"
                    sections={[
                      {
                        label: "יהדות | דרוזים:",
                        content: "גיוס - התייחסות: ברכה, תיק."
                      },
                      {
                        label: "איסלם | נצרות:",
                        content: "סיום לימודים - התייחסות: ברכה, מתנת סיום תיכון."
                      },
                      {
                        label: "לימודים גבוהים",
                        content: ""
                      },
                      {
                        label: "יהדות | דרוזים | איסלם | נצרות:",
                        content: "לימודים גבוהים של ילדים – יעוץ בנושא התנהלות כלכלית נכונה, הענקת מלגות."
                      }
                    ]}
                  />

                  <LifeEventCard
                    title="אירוסין"
                    sections={[
                      {
                        label: "יהדות:",
                        content: "מומלץ להתייחס ולהעניק ברכה לעובדים עבורם הטקס בעל משמעות."
                      },
                      {
                        label: "דרוזים | איסלם | נצרות:",
                        content: "חשיבות גבוהה לחגיגת האירוסין של עובדים או ילדיהם, המהווה אירוע משמעותי ולעיתים מתקיים זמן רב לפני החתונה עצמה - מומלץ להתייחס לאירוע ולתת ברכה."
                      },
                      {
                        label: "חתונה",
                        content: ""
                      },
                      {
                        label: "יהדות | דרוזים | איסלם | נצרות:",
                        content: "התייחסות: הענקת כסף/ימי חופש/מתנה. בנוסף: חופשת חתונה עבור הורה/אח.ות עד שבוע ימים."
                      }
                    ]}
                  />

                  <LifeEventCard
                    title="אבל"
                    sections={[
                      {
                        label: "יהדות:",
                        content: [
                          "גלגל אבל ללוויה. יש לוודא התאמה (בקרב יוצאי אתיופיה לא נהוג גלגל אבל).",
                          "ערכת שבעה.",
                          "משך תקופת האבל עבור בן משפחה 7 ימים."
                        ]
                      },
                      {
                        label: "דרוזים:",
                        content: [
                          "גלגל אבל ללוויה (רק בשעה ההלוויה).",
                          "לניחום אבלים קפה טחון.",
                          "משך תקופת האבל וניחום האבלים 7-10 ימים."
                        ]
                      },
                      {
                        label: "איסלם:",
                        content: [
                          "גלגל אבל ללוויה.",
                          "לניחום אבלים קפה טחון או תמרים.",
                          "משך תקופת האבל וניחום האבלים 3 ימים."
                        ]
                      },
                      {
                        label: "נצרות:",
                        content: [
                          "גלגל אבל ללוויה.",
                          "לניחום אבלים לא נהוג להביא דבר.",
                          "משך תקופת האבל וניחום האבלים 3-4 ימים.",
                          "בחלק מעדות הנצרות מתקיימת תפילה ביום ה-40 לאחר הפטירה. יום זה חשוב עבור קרובי משפחה מדרגה ראשונה."
                        ]
                      }
                    ]}
                  />
                </CardCarousel>
              </div>

              {/* Additional note after cards */}
              <div className="flex items-start gap-2 mt-[10px]" style={{ color: '#79BF98' }}>
                <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.25rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.25rem)' }}>&nbsp;&nbsp;&nbsp;&nbsp;
על הארגון והמנהלים להכיר את מנהגי האבלות של הדתות והעדות השונות, כדי לנהוג ברגישות ולמנוע מצבים מביכים. לדוגמה, מנהלים שהגיעו להלוויה של עובד ממוצא אתיופי עם גלגל אבל, מחווה שנתפסת בעדה כמנהג נוצרי ומעליב, יכלו להימנע מכך באמצעות היכרות מוקדמת עם הנורמות התרבותיות.                </p>
              </div>

              
              {/* Blue line with dot */}
              <div className="mt-8 -mx-[25px]">
                <div className="relative" style={{ height: '2px' }}>
                  <div
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: '#0A476D',
                      left: '25px',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  />
                  <div className="absolute" style={{ backgroundColor: '#0A476D', height: '2px', left: '37px', right: '0', top: '0' }} />
                </div>

                {/* Text below line */}
                <div className="px-[25px] pt-6">
                  <p className="text-right text-sm leading-relaxed" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                    הרחבה על ההבדלים בנושא האבל בדעות השונות בחברה הערבית:
                  </p>
                </div>
              </div>
                    
              {/* Mourning Cards Carousel */}
              <div className="mt-6">
                <CardCarousel>
                  <MourningCard
                    title="משך תקופת האבל"
                    sections={[
                      {
                        label: "דרוזים | איסלם | נצרות:",
                        content: "בחברה הערבית, גם במקרה של פטירת סבא, דוד או דודה, אף על פי שאינם נחשבים לקרבה ראשונה, נהוג להשתתף באבל במשך שלושה ימים."
                      },
                      {
                        label: "מקום ההתכנסות",
                        content: ""
                      },
                      {
                        label: "דרוזים | איסלם | נצרות:",
                        content: "בשלושת ימי האבל הראשונים - בבית המשפחה או באולם אבלים, לאחריהם בבית המשפחה בלבד."
                      },
                      {
                        label: "איסלם:",
                        content: "בשלושת ימי האבל הראשונים מתקיים בבית אלשעב (העם), לאחריהם בבית המשפחה בלבד."
                      },
                      {
                        label: "נצרות:",
                        content: "בשלושת–ארבעת ימי האבל הראשונים נהוג להשתתף בבית המשפחה או באולם בית אבלים (לרוב צמוד לכנסייה), ולאחריהם – בבית המשפחה בלבד."
                      }
                    ]}
                  />

                  <MourningCard
                    title="הפרדת גברים- נשים"
                    sections={[
                      {
                        label: "דרוזים | איסלם:",
                        content: "גברים ונשים יושבים במתחמים נפרדים. אישה מנחמת תוכל לגשת למתחם הנשים. גבר מנחם יוכל לגשת למתחם הגברים. לצורך ניחום העובד או העובדת האבלים במקרה שהממונה לא יוכל להיכנס לאחד המתחמים – יצור קשר עם העובד/ת והם יצאו ויפגשו את הממונה מחוץ למתחם."
                      },
                      {
                        label: "נצרות:",
                        content: 'בד"כ יושבים גברים ונשים באותו המתחם, לעיתים קיימת הפרדה של מחיצה. אין מניעה לעבור בין שני המתחמים לצורך ניחום העובד/ת.'
                      },
                      {
                        label: "הופעה במהלך הניחומים",
                        content: ""
                      },
                      {
                        label: "איסלם | נצרות:",
                        content: "לבוש צנוע."
                      },
                      {
                        label: "דרוזים:",
                        content: "לבוש צנוע – במתחם הניחומים (בית אלשעב) של הנשים הדרוזיות מנחמים בלבוש ארוך."
                      }
                    ]}
                  />

                  <MourningCard
                    title="כללי נימוס"
                    sections={[
                      {
                        label: "איסלם | דרוזים:",
                        content: "לחיצת יד מקובלת ברוב המקרים, אך יש לנהוג בזהירות – גבר לא ילחץ יד לאישה דתייה. ניתן להביע תנחומים בהנחת כף היד על הלב/חזה. ממונה גבר לא יחבק ולא ינשק עובדת מתאבלת ובהתאמה לא ממונה אישה, אך היא כן יכולה לנשק ולחבק עובדת אישה."
                      },
                      {
                        label: "נצרות:",
                        content: "עדיפות ללחיצת יד אך אין מגבלה לגבי חיבוק ונשיקה בין גברים ונשים (תלוי במידת הקרבה בין הממונה והעובד/ת)."
                      },
                      {
                        label: "מודעות אבל",
                        content: ""
                      },
                      {
                        label: "דרוזים | איסלם | נצרות:",
                        content: 'אם הארגון נוהג לפרסם מודעת אבלים בעיתונות הארצית, אז מומלץ לפרסם במקביל ובערבית מודעה באחד משלושת העיתונים המרכזיים בחברה הערבית: "כל-אלערב," "אל-סנארה," "פנורמה". אצל הדרוזים נהוג לפרסם בערוצים פנימיים של העדה, כמו קבוצות ווצאפ מקומיות – מומלץ להתייעץ עם העובד.'
                      }
                    ]}
                  />

                  <MourningCard
                    title="תיאום ביקור עם אבל/ה"
                    sections={[
                      {
                        label: "דרוזים | איסלם | נצרות:",
                        content: "מומלץ מאוד ליצור קשר עם העובד/ת ולעדכן על רצונכם להגיע לניחום אבלים. העובד/ת יכולים לכוון אתכם לשעה המתאימה להגעה כולל אפשרות לפגוש אתכם בביתו ולא באולם בית האבלים."
                      }
                    ]}
                  />
                </CardCarousel>
              </div>

              {/* רגעי משבר משפחתיים */}
              <div className="mt-[10px]">
                <p className="text-right text-sm font-bold" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                  רגעי משבר משפחתיים:
                </p>

                <p className="text-right text-sm leading-relaxed mt-3" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif' }}>
                  באופן כללי, עובדים ממעמד סוציו-אקונומי נמוך נתקלים בשיעורים יותר גבוהים במשברים אישיים ומשפחתיים כגון קשיים ככלכליים, שיקולים, גירושין או מצבי אלימות. חשוב שהארגון יכיר בכך, יכיר את המציאות (למשל תקופות של אלימות נרחבת יותר) ויספק ברגישות, ייצע תמיכה מותאמת וישמור על כבוד ופרטיותו של העובד.
                </p>

                <div className="flex items-start gap-2 mt-[10px]" style={{ color: '#79BF98' }}>
                <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.25rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.9rem)' }}>&nbsp;&nbsp;&nbsp;&nbsp;
בחברות בהן שיעור גדול יחסית של עובדים מאוכלוסיות רווחה, מומלץ לשלב במקום העבודה עו״ס שמכיר את כלל האוכלוסיות, לטיפול וסיוע.      </p>
              </div>
              </div>

              {/* Bottom green line */}
              <div className="mt-8 -mx-[25px]">
                <div className="w-full" style={{ backgroundColor: '#79BF98', height: '5px' }} />
              </div>

              {/* Section 5: Career Milestones */}
              <div id="section5" className="mt-[5px]">
                {/* Banner */}
                <div className="relative ml-auto mb-6" style={{ width: '19.25rem', height: '2.5rem', marginTop: '1.25rem', right: '-25px' }}>
                  <img src="/src/assets/Section rectangle.svg" alt="Banner" className="w-full h-full object-cover" style={{borderBottomRightRadius: "0px",borderTopLeftRadius: "60px",}}/>
                  <div className="absolute inset-0 flex items-center justify-end text-right"
                    style={{ color: '#0A476D', width: '-webkit-fill-available', textAlign: 'right', fontSize:'0.75rem' }}
                  >
                    <span className="font-black text-sm" style={{ textAlign: 'right', width: '-webkit-fill-available' , paddingRight: '25px'}}>פרק 5
                      <span className="font-bold" >: ציון דרך בקריירה</span>
                    </span>
                  </div>
                </div>

                {/* מטרת הפרק */}
                <div className="flex items-start gap-2 mt-6">
                <img
                  src="/src/assets/Accuracy.svg"
                  alt="Accuracy"
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-right text-sm leading-relaxed" style={{ color: '#5B4B43', transform:'TranslateX(1.5rem', fontSize:'0.75rem' }}>
                  <span className="font-bold">   &nbsp;&nbsp;&nbsp;  מטרת הפרק:</span>
מטרת הפרק: לטפח תחושת שייכות, מחוברות והוקרה בקרב כלל העובדים, תוך ציון רגעי מפתח משמעותיים בקריירה באופן שוויוני, מכבד ורגיש תרבותית, המחזק את תחושת הערך של כל עובד באופן מותאם במרחב הארגוני.</div>
              </div>

                {/* Green bullet */}
                <div className="flex items-start gap-2 mt-[10px]" style={{ color: '#79BF98' }}>
                  <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.15rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                  <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.25rem)'}}>&nbsp;&nbsp;&nbsp;&nbsp;
כוונת הארגון בהוקרת עובדים היא חיובית, אך הוקרה שאינה מותאמת לקודים התרבותיים עלולה לעורר מבוכה ואי-נוחות, להפוך לחוויה שלילית ולהגביר תחושת ניכור, במקום לחזק את תחושת  הבית והשייכות. </p>
                </div>

                {/* הקדמה */}
                <div className="text-right text-sm leading-relaxed mt-[5px]" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                  <span className="font-bold">הקדמה:</span> ציון דרך בקריירה הוא חלק חשוב ממסע העובד בארגון, הרגעים המשמעותיים – החל מיום הראשון בעבודה, דרך קידום, קידום, ותק ועד לפרידה – הם נקודות מפתח לביטוי הערכה ולחיזוק המחוברות הארגונית. כאשר ארגון מקפיד לציין אירועים אלה בצורה שוויונית ורגישה, הוא מעביר מסר ברור של כבוד לכל עובד באשר הוא, ומחזק את תחושת "כולנו חלק מהארגון". בתרבות מגוונת, לציון כזה יש משמעות כפולה – הוא מאפשר לכל עובד לראות את עצמו כחלק מהסיפור הארגוני, ומדגיש את הערכים של הכלה, הוקרה וזיווג אנושי.
                </div>

                {/* Blue heading */}
                <p className="text-right text-sm font-bold mt-6" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:"0.75rem" }}>
                  דוגמאות ופרקטיקה לשימוש בעת תכנון אירועי ציון דרך בקריירה של עובד מהחברה הערבית:
                </p>

                {/* Career Milestone Cards Carousel */}
                <div className="mt-6 ">
                  <CardCarousel>
                    <EventPlanningCard
                      title="יום ראשון בעבודה/ יום אוריינטציה"
                      sections={[
                        {
                          label: "המלצות לתכנון:",
                          items: [
                            "יש לוודא כי מתנה, ברכה או ערכת קליטה מותאמות לכלל העובדים; שהמסרים בברכה שוויוניים, כוללים ואינם נושאים אופי שעלול להתפרש כפוגעני.",
                            "לשקול אפשרות שהמתנה תכלול מילת ברכה בשפת האם של העובד החדש.",
                            "מומלץ כי יום האוריינטציה יתייחס לנושא הגיוון ולמדיניות החברה בנושא וכן לשקול הפקת חומרים מסוימים בערבית במידת הצורך להנגשה והבנה טובה יותר."
                          ]
                        },
                        {
                          label: "שאלות מנחות:",
                          items: [
                            "האם ערכת הקליטה משקפת את הגיוון הארגוני? עד כמה יש ייצוג של אוכלוסיות מגוונות בחומרים המוצגים/מחולקים לעובדים החדשים, ועד כמה החומרים מונגשים תרבותית ושפתית לעובדים הערבים?",
                            "האם קיימת התייחסות לערכי סובלנות והוגנות כבר ביום הראשון?",
                            "האם יום האוריינטציה יגרום גם למי שאינו מגיע מחברת הרוב לחוש רצוי ובנוח?",
                            "במידה וקיימת מתנה: האם היא מותאמת לכלל העובדים?"
                          ]
                        },
                        {
                          label: "הערות:",
                          items: [
                            "מומלץ לשלב ברכה אישית מהמנהל הישיר או נציג בכיר. מומלץ לשלב עובד ותיק ומנוסה כחונך מלווה, בעדיפות גבוהה לעובד מהחברה הערבית, לפחות בליווי החברתי של העובד החדש בימים הראשונים.",
                            'המלצות לתכני חוברת קליטה: הפקה בערבית ובעברית, שילוב מפת התמצאות, מוקדי עניין, מבנה ארגוני, לוח חופשות שנתי, לוח שנה מגוון, הטבות (כמו ביטוח בריאות, מתנות, אירועי חברה,) דגשי בטיחות וכיו"ב.'
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="ציון ותק"
                      sections={[
                        {
                          label: "המלצות לתכנון:",
                          items: [
                            "לוודא כי המתנות מותאמות לגיל, מגדר, אורח חיים ורקע תרבותי של העובדים. מומלץ להזמין את בני משפחת העובד לאירוע ציון ותק, להוספת כבוד ותחושת משמעות לעובד."
                          ]
                        },
                        {
                          label: "שאלות מנחות:",
                          items: [
                            "כיצד אנו יוצרים תחושת גאווה משפחתית סביב ותק?",
                            "האם ההוקרה נגישה ומכבדת את כלל המשתתפים?"
                          ]
                        },
                        {
                          label: "הערות:",
                          items: [
                            "חשוב לוודא שהאירוע מתוזמן כך שיתאפשר לכולם להשתתף, ללא חפיפה לתקופות רגישות (חגים, צום וכו')."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="ציון קידום בתפקיד"
                      sections={[
                        {
                          label: "המלצות לתכנון:",
                          items: [
                            "את הקידום חשוב לציין באופן שמכבד את העובד/ת ומדגיש את תרומתו לארגון, תוך התאמת המסרים לכלל העובדים ושילוב ערכים של סובלנות והוגנות. מומלץ לכלול דברי ברכה מההנהלה. בקרב עובדים מהחברה הערבית, שכיחות צניעות טבעית והימנעות מהצגה עצמית, לכן חשוב שהמנהל הישיר יבליט עבורם את ההישגים, התרומה וההערכה, באופן המחזק גאווה ושייכות ובתיאום עימם."
                          ]
                        },
                        {
                          label: "שאלות מנחות:",
                          items: [
                            "האם המתנה מותאמת?",
                            "איזו הוקרה תהיה ראויה גם בעיני העובד?",
                            "האם האירוע מותאם למאפיינים התרבותיים של העובד? האם ניתן ליצור התאמות שיהפכו את האירוע למוערך יותר (השתתפות המשפחה, התאמת התפריט, מוזיקה וכו')",
                            "האם יש במהלך היום התייחסות לגיוון בתור ערך או למדיניות הגיוון בחברה ומשמעותה?"
                          ]
                        },
                        {
                          label: "הערות:",
                          items: [
                            "ניתן לשלב טקס קצר בצוות או באירוע רחב יותר, לפי הנהוג בחברה. חשוב לשמור על צניעות הטון ולהימנע ממסרים שעלולים להתפרש כהעדפה תרבותית או מגזרית."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="פרידה מהעובד"
                      sections={[
                        {
                          label: "המלצות לתכנון:",
                          items: [
                            "יש להתאים את אופי אירוע הפרידה והמתנה למאפייניו של העובד/ת, מתוך רגישות תרבותית ואישית. מומלץ להתייעץ מראש עם עובדים קרובים אליו בנוגע למתנה או לסגנון האירוע."
                          ]
                        },
                        {
                          label: "שאלות מנחות:",
                          items: [
                            "האם אופי הפרידה משדר כבוד והערכה אמיתיים?",
                            "האם נבדקה התאמה תרבותית של המתנה והמקום?"
                          ]
                        },
                        {
                          label: "הערות:",
                          items: [
                            "עובד שאנו נפרדים ממנו, נשאר שגריר של החברה. בידינו במידה מסוימת להשפיע אם יהיה שגריר טוב או רע.",
                            "להימנע ממתנות הכוללות סמלים דתיים או אלכוהול לעובדים מוסלמים; ניתן לשלב דברי תודה אישיים מהמנהל והצוות."
                          ]
                        }
                      ]}
                    />
                  </CardCarousel>
                </div>

                {/* Green bullet recommendation */}
                <div className="flex items-start gap-2 mt-[10px]" style={{ color: '#79BF98' }}>
                <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.15rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem',transform: 'translateX(1.25rem)' }}>&nbsp;&nbsp;&nbsp;&nbsp;
בעת השתתפות עובד מהחברה הערבית בתכנית "חבר מביא חבר", מומלץ שהתגמול יתאים לציפיות ולמאפייני כלל העובדים. אפשר לתת מענק כספי, שוברים או תעודת הוקרה, כדי לחזק מעורבות קהילתית ולעודד גיוס מגוון.</p>
              </div>

                {/* Green line separator */}
                <div className="mt-8 -mx-[25px]">
                  <div className="w-full" style={{ backgroundColor: '#79BF98', height: '5px' }} />
                </div>
              </div>

              {/* Section 6: Welfare Program Implementation Guide */}
              <div id="section6" className="mt-8">
                {/* Banner */}
                <div className="relative ml-auto mb-6" style={{ width: '21.25rem', height: '3rem', marginTop: '1.25rem', right: '-25px' }}>
                  <img src="/src/assets/Section rectangle.svg" alt="Banner" className="w-full h-full object-cover" style={{borderBottomRightRadius: "0px",borderTopLeftRadius: "60px",}}/>
                  <div className="absolute inset-0 flex items-center justify-end text-right"
                    style={{ color: '#0A476D', width: '-webkit-fill-available', textAlign: 'right', fontSize:'0.75rem' }}
                  >
                    <span className="font-black text-sm" style={{ textAlign: 'right', width: '-webkit-fill-available' , paddingRight: '25px'}}>פרק 6:
                      
                      <span className="font-bold" > מפת דרכים ליצירת סל רווחה ארגוני מותאם תרבותית</span>

                    </span>
                  </div>
                </div>

                {/* מטרת הפרק */}
                <div className="flex items-start gap-2 mt-6">
                <img
                  src="/src/assets/Accuracy.svg"
                  alt="Accuracy"
                  className="w-5 h-5 flex-shrink-0"
                />
                <div className="text-right text-sm leading-relaxed" style={{ color: '#5B4B43', transform:'TranslateX(1.5rem', fontSize:'0.75rem' }}>
                  <span className="font-bold">  &ensp;&ensp;&ensp; מטרת הפרק: </span>
 לספק מפת דרכים סדורה בת 7 צעדים, ליצירת סל רווחה מגוון ומותאם תרבותית. הפרק מאפשר לארגון לבחור את נקודת ההתחלה הרלוונטית עבורו, בהתאם למצבו הנוכחי, ולפעול בצורה מדורגת, ריאלית ומותאמת לקצבו הפנימי.</div>
              </div>

                {/* הקדמה */}
                <div className="text-right text-sm leading-relaxed mt-[5px]" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                  <span className="font-bold">הקדמה:</span> התאמה תרבותית של סל הרווחה הארגוני יכול גם להיות פרויקט רוחבי בארגון, שעצם קיומו ואופן ביצועו מעבירים מסרים לגבי התפיסה הארגונית של סובלנות והוגנות. הפרויקט יכול להיות תהליך מובנה עם תכנית עבודה, יעדים, מדיניות, מיקוד ופעולות שטח, מחויבות ניהולית, Owner לתכלול ויישום ואחראים ייעודיים ללווי תהליך ההתאמה, בחירת אתר יישום ראשוני (בארגון גדול ומבוזר) וכיו"ב. 
                </div>

                {/* Additional intro paragraph */}
                <div className="text-right text-sm leading-relaxed mt-[10px]" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif', fontSize:"0.75rem" }}>
                  להלן <span className="font-bold">מדריך להתאמת טל הרווחה הארגוני יישומו (7 צעדים)</span>. ניתן להשתמש רק בחלק מהצעדים – אם צעד מסוים כבר מיושם בארגון, ניתן לדלג לצעד הבא.
                </div>

                {/* Implementation Cards Carousel */}
                <div className="mt-6">
                  <CardCarousel>
                    <EventPlanningCard
                      title="מיפוי גורמים מרכזיים להובלת הפרויקט"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            'מיפוי אנשי הנהלה, מנהלים כולל מנהלי צוותים מגוונים וחברי צוות מש״א האחראים על התווית מדיניות הרווחה בארגון ו/או יישומה בשטח.'
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "מנהלים במטה, מש״א, צוות רווחה, מנהלי צוותים."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            "מומלץ שצוות מש״א ייקח אחריות על צעד זה.",
                            "חשוב לכלול מנהלים אחראיים על צוותים מגוונים."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="התנעה ורתימה"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            "שיחות רתימה עם הגורמים שמופו ופעילות התנעה ורתימה חווייתית כמו:",
                            "סיור בחברה הערבית.",
                            "מפגש השראה עם עובדים מהחברה הערבית בארגון או מחוץ לו.",
                            "חשיפה לסביבה ארגונית מגוונת ומכילה(לארגון אחר או מחלקה בחברה עצמה מגוונת ומכילה)."
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "מש״א, צוות רווחה, מנהלי צוותים מגוונים, מנהלים במטה (מומלץ בהתייעצות עם קו אימפקט)."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            "ליצור חוויה המדגישה את חדוות הגיוון והתועלות ממנו.",
                            "חשוב לוודא השתתפות נציגות מכלל הגורמים שמופו."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="הקמת צוות מוביל"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            "הצוות יפעל לגיבוש התכנית, או לקבלת החלטות על פרקטיקות מגוונות לכלל האוכלוסיות (במידת הצורך). מיפוי חוויות וצרכים, חשיבה על התאמת פרקטיקות בתחום, סיוע בגיבוש תכנית רווחה מגוונת, ומעקב אחרי יישום התכנית בשטח."
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "מנהלים במטה (אחראים על המדיניות בארגון), מנהלי צוותים מגוונים, נציגי מש״א ורווחה, עובדים ערבים, נציג ועד עובדים, נציגי אוכלוסיות מגוונות נוספות."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            'צוות מוביל יורכב ע״י ה- Owner של הנושא ויכלול נציגים שהשתתפו בפעילות ההתנעה.',
                            "חשוב לקבוע פגישות תקופתיות לצוות המוביל."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="מיפוי פרקטיקות רווחה"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            'מיפוי פרקטיקות רווחה, אפשרי באמצעות שולחנות עגולים/קבוצות מיקוד/ שיחות אישיות וכיו"ב, במטרה למפות תחומי אחריות, פעילויות קיימות וזיהוי פערים.'
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "הצוות המוביל."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            "ניתן למפות, ללמוד ולאמץ התאמות שנעשו בארגון/ באתרים/ בצוותים מגוונים / בארגונים דומים אחרים."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="גיבוש תכנית רווחה שנתית"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            "גיבוש תכנית רווחה ארגונית שנתית מגוונת."
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "צוות מש״א ורווחה, בסיוע הצוות המוביל."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            "לכלול פרקטיקות מוכחות ולקחים מהעבר.",
                            "להיעזר בקיט זה שמכיל רעיונות ופרקטיקות מוכחות ליישום."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="בחירת אתר פיילוט ליישום (לארגונים עם יותר מאתר אחד/ארגונים גדולים)"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            "מומלץ לבחור את האתר על סמך מספר קריטריונים: צורך בהתאמת סל הרווחה למימוש תועלת, מספר העובדים הערבים באתר והיכולת ללמוד מהניסיון באתר ולמנף למידה לאתרים אחרים/ למטה."
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "הצוות המוביל, נציגות מש״א באתר, מנהלים באתר שנבחר (מנהלים רתומים שיהוו שגרירים)."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            "חושב לרתום אנשים בשטח שיוכלו להיות שגרירים של הפעילויות באתר שנבחר.",
                            "למקסם למידה והטמעה עתידית."
                          ]
                        }
                      ]}
                    />

                    <EventPlanningCard
                      title="הפקת לקחים שנתית"
                      sections={[
                        {
                          label: "תיאור/דוגמאות:",
                          items: [
                            "כינוס קבוצת המיקוד לצורך סיכום שנה של סל הרווחה המותאם. מומלץ להעביר סקר לעובדים על חווית הרווחה המגוונת, או לשלב שאלות בסקר קיים לגבי שביעות רצונם מהנושא."
                          ]
                        },
                        {
                          label: "גורמים מעורבים:",
                          items: [
                            "הצוות המוביל."
                          ]
                        },
                        {
                          label: "דגשים/הערות:",
                          items: [
                            'לצד הסקר שיועבר לעובדים (אם קיים סקר) חשוב להכין דו״ח מסכם שיופץ להנהלה בנושא, במטרה להפיק לקחים ולשפר תכנית לשנה הבאה.'
                          ]
                        }
                      ]}
                    />
                  </CardCarousel>
                </div>

                {/* Final recommendation */}
                <div className="flex items-start gap-2" style={{ color: '#79BF98' }}>
                  <span style={{ fontSize: '0.75rem',width: "2.75rem", height: "2.75rem", marginTop:'0.35rem' }}><img src="/src/assets/Comments.svg" alt="Comments" style={{ width: "0.75rem", height: "0.75rem" }} /></span>
                  <p className="text-right text-sm leading-relaxed" style={{ color: '#79BF98', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                    בכל שלב ניתן ומומלץ להתייעץ עם צוות קו אימפקט להצעות ותכנון הפעילויות והרעיונות.</p>
                </div>

                {/* Green line separator */}
                <div className="mt-[5px] -mx-[25px]">
                  <div className="w-full" style={{ backgroundColor: '#79BF98', height: '5px' }} />
                </div>

                {/* Summary and Closing */}
                <div id="summary" className="mt-[10px]">
                  <h2 className="text-right text-2xl font-bold mb-[5px]" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.9375rem' }}>
                    סיכום ודברי סיום
                  </h2>

                  <div className="text-right text-sm leading-relaxed space-y-4" style={{ color: '#5B4B43', fontFamily: 'Inter, sans-serif', fontSize:'0.75rem' }}>
                    <p>
                      קיט זה נבנה כדי לספק לכם כלים מעשיים, יישומיים ומכווּנים להתמודדות עם נושאי סובלנות והוגנות בארגון. הוא כולל הנחיות, רעיונות לפעולה ודוגמאות שיישמו לכם להטמיע את הערכים הללו בכלב התרבות הארגונית ובשגרת העבודה היומיומית ואַתן מאמינים כי הוא יכול להועיל לכם.
                    </p>

                    <p>
                      חשוב לזכור כי מדיניות ארגונית ברורה בנושא סובלנות והוגנות, יחד עם אמירות עקביות של הנהלת הארגון, מתכלות משנה ומשפיעות על העובדים עד שהן הופכות לחלק בלתי נפרד מתמציאות הארגונית, עובדה זו ממחישה עד כמה הנושא חשוב ומרכזי להצלחת הארגון ולחוסנו האנושי.
                    </p>

                    <p>
                      <span className="font-bold">צוות קו אימפקט עומד לרשותכם בכל שאלה, ייעוץ או לייעוץ נוסף, לשים, לתכנון פעולות, או לחשיבה משותפת על התאמת הכלים והפרקטיקות לצרכים הייחודיים של הארגון שלכם.</span>
                    </p>

                    <p className="font-bold">
                      יחד נוכל לספור את ערכי הסובלנות והוגנות  ממילים יפות, למציאות חיה ונגשמת בכל יום עבודה.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 py-12 text-center relative" style={{ backgroundColor: '#79BF98', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
                  <p className="text-lg font-bold mb-2" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif' }}>
                    ניתן לפנות להתייעצות אל:
                  </p>
                  <p className="text-lg mb-2" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif' }}>
                    שם היועצ/ת
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#0A476D', fontFamily: 'Inter, sans-serif' }}>
                    0526489006
                  </p>
                </div>
              </div>
              </div>
              </div>
              </div>
              );
              }

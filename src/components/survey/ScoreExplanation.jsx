import React from "react";

const explanations = [
  {
    value: 1,
    color: '#B1937E',
    text: "אין התייחסות לסובלנות והוגנות בתכנון פעילויות הרווחה בציר זה, הארגון פועל באחריות מלאה (One size fits all) ואינו מתייחס לשונות בין העובדים."
  },
  {
    value: 2,
    color: 'rgba(0, 160, 191, 0.6)',
    text: "קיימת מודעות ראשונית לנושא ולצורך בשונות ובהכלה בציר זה, אך טרם נעשתה פעולה יזומה. לעיתים יש שיחות בנושא או התייחסות נקודתית ביוזמת עובד/ת או מנהל/ת ללא מדיניות או תכנון מסודר."
  },
  {
    value: 3,
    color: '#00A0BF',
    text: "קיימים ניסיונות נקודתיים להתאמות בציר זה, לרוב ביוזמה אישית (לרוב מצוות מש״א), אך אין מדיניות / עקביות."
  },
  {
    value: 4,
    color: '#A8D1BA',
    text: "עקרונות הגיוון משולבים בתהליכי התכנון והביצוע של תכנית הרווחה בציר זה. מתקיימת חשיבה מודעת על התאמה תרבותית, כולל למידה מהניסיון."
  },
  {
    value: 5,
    color: '#79BF98',
    text: "עקרונות הגיוון משולבים בתהליכי התכנון והביצוע של תכנית הרווחה בציר זה. מתקיימת חשיבה מודעת על התאמה תרבותית, כולל למידה מהניסיון."
  }
];

const ExplanationItem = ({ item }) => (
  <div className="mb-3" style={{ direction: 'rtl' }}>
    <div 
      className="font-bold mb-1 text-right"
      style={{ color: item.color, fontSize: '0.75rem', fontWeight:'700', lineHeight:'0.75rem' }}
    >
      {item.value}
    </div>
    <p className="text-right leading-relaxed" style={{ color: '#5B4B43', fontSize: '0.75rem', fontWeight: 400, lineHeight:'0.75rem' }}>
      {item.text}
    </p>
  </div>
);

export default function ScoreExplanation() {
  const rightColumn = explanations.filter(e => e.value === 1 || e.value === 2 || e.value === 3);
  const leftColumn = explanations.filter(e => e.value === 4 || e.value === 5);

  return (
    <div className="w-full" style={{ direction: 'rtl' }}>
      <div className="flex gap-8">
        {/* Right column: 1, 2, 3 */}
        <div className="flex-1">
          {rightColumn.map((item) => (
            <ExplanationItem key={item.value} item={item} />
          ))}
        </div>
        {/* Left column: 4, 5 */}
        <div className="flex-1">
          {leftColumn.map((item) => (
            <ExplanationItem key={item.value} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
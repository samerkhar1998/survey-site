import React from "react";
import SurveyEntrance from "@/components/survey/SurveyEntrance";
import SurveySection1 from "@/components/survey/SurveySection1";
import SurveySection2 from "@/components/survey/SurveySection2";
import SurveyNavigationMenu from "@/components/survey/SurveyNavigationMenu";

export default function Survey() {
  const handleStart = () => {
    // Will navigate to next step when implemented
    console.log("Start survey");
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SurveyEntrance onStart={handleStart} />
      <SurveySection1 />
      <SurveySection2 />
      <SurveyNavigationMenu />
    </div>
  );
}

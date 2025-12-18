import React from "react";
import WebsiteIcon from "../../assets/website.svg";
import InstagramIcon from "../../assets/instagram.svg";
import FacebookIcon from "../../assets/facebook.svg";

export default function SurveyFooter() {
  const textStyle = {
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "0.9375rem",
  };

  return (
    <footer className="bg-[#79BF98] text-[#0A476D] mt-12" dir="rtl">
      <div className="max-w-[1200px] mx-auto px-[25px] py-6 text-center">
        <p className="font-bold" style={textStyle}>
          ניתן לפנות להתייעצות:
        </p>
        <p className="mt-3" style={textStyle}>
          04-8888965
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-row-reverse">
          <a
            href="https://co-impact.org.il/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WebsiteIcon} alt="Website" className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/co.impact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/CollectiveImpact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

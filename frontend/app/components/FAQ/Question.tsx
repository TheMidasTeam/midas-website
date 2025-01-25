import React from "react";
import { QuestionType } from "./FAQs";
import Icon from "@/utils/Icon";

export interface QuestionProps {
  question: QuestionType;
}

export const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="QUESTION-CONTAINER border-4 p-4 rounded border-white">
      <div className="QUESTION-TOP flex items-center font-caprasimo">
        <Icon cn="w-[40px] bg-red-800" strokeWidth="2" icon="carrot"></Icon>
        <span className="">{question.question}</span>
      </div>
      <div className="QUESTION-BOTTOM flex items-center font-caprasimo">
        <p className="ANSWER ml-[40px] font-montserrat">{question.answer}</p>
      </div>
    </div>
  );
};

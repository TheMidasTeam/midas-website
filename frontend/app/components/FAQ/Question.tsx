import React from "react";
import { QuestionType } from "./FAQs";
import Icon from "@/utils/Icon";

export interface QuestionProps {
  question: QuestionType;
  isActive: boolean;
  handleToggleQuestion: (id: number) => void;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  isActive,
  handleToggleQuestion,
}) => {
  return (
    <div
      className={`QUESTION-CONTAINER w-full p-4 rounded-2xl hover:cursor-pointer border-2 ${
        isActive ? "border-white p-10" : "border-transparent"
      }`}
      onClick={() => handleToggleQuestion(question.id)}
    >
      {/* ------------------------- Question Header Start ------------------------- */}
      <div className="QUESTION-TOP flex items-center font-caprasimo">
        <Icon
          cn={`w-[80px] transition-transform duration-300 ${
            isActive ? "-rotate-180" : ""
          }`}
          strokeWidth="2"
          h="20"
          w="20"
          icon="carrot"
        ></Icon>
        <span className="text-2xl">{question.question}</span>
      </div>
      {/* ------------------------- Question Header End ------------------------- */}
      <div
        className={`QUESTION-BOTTOM items-center font-caprasimo overflow-hidden transition-all ease-in-out duration-300 ${
          isActive ? "max-h-[200px]" : "max-h-0 duration-100"
        }`}
      >
        {/* <p className="ANSWER ml-[80px] mt-4 font-montserrat">
          {question.answer}
        </p> */}
        {question.answer.map((line, index) => (
          // <p key={index} className="mt-2">
          <p key={index} className="ANSWER ml-[80px] mt-4 font-montserrat">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

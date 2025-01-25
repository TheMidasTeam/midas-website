import React from "react";
import { Question } from "./Question";

export interface QuestionType {
  id: number;
  question: string;
  answer: string;
}

export default function OfferingCards() {
  const questions: QuestionType[] = [
    {
      id: 1,
      question: "What is the cost of a website?",
      answer:
        "The cost of a website can vary depending on various factors such as the complexity of the design, the number of pages, and the features you want to include. We offer a free consultation to discuss your needs and provide you with a quote.",
    },
    {
      id: 2,
      question: "How long does it take to build a website?",
      answer:
        "The time it takes to build a website can vary depending on the size and complexity of the project. We will work with you to establish a timeline and keep you updated on the progress throughout the process.",
    },
    {
      id: 3,
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we offer maintenance services to ensure that your website is up-to-date and running smoothly. We can provide regular updates, security checks, and technical support to keep your site running smoothly.",
    },
    {
      id: 4,
      question: "Can you help with SEO?",
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 5,
      question: "Can you help with SEO?",
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 6,
      question: "Can you help with SEO?",
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 7,
      question: "Can you help with SEO?",
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
  ];

  return (
    // FAQ section
    <section className="max-w-screen-2xl w-full mx-auto py-12 px-6">
      {/* ------------------------- header start ------------------------- */}
      <div className="relative flex items-center mb-10 gap-4">
        <div className="w-[calc(90%-350px)] rounded-full h-4 bg-primary"></div>
        <h1 className="text-center text-4xl font-thin w-full">
          Frequently Asked Questions
        </h1>
        <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
      </div>
      {/* ------------------------- header end ------------------------- */}
      {/* ------------------------- content start ------------------------- */}
      <div className="flex flex-col items-center justify-center">
        <button className="mb-10 font-montserrat font-semibold py-2 px-4 bg-primary rounded text-black">
          Get in Touch
        </button>
        <div className="w-full max-w-screen-md flex flex-col items-center justify-center">
          {questions.map((question, index) => {
            console.log("question:", question);
            return <Question key={question.id} question={question} />;
          })}
        </div>
      </div>
      {/* ------------------------- content end ------------------------- */}
    </section>
  );
}

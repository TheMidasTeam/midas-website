"use client";

import React, { useState } from "react";
import { Question } from "./Question";

export interface QuestionType {
  id: number;
  question: string;
  answer: string[];
}

export default function FAQs() {
  const [activeQuestionIds, setActiveQuestionIds] = useState<Set<number>>(
    new Set()
  );
  const questions: QuestionType[] = [
    {
      id: 1,
      question: "Will my website be mobile-friendly?",
      answer: [
        `Absolutely! We design all websites to be fully responsive, ensuring a seamless experience on desktops, tablets, and smartphones.`,
      ],
    },
    {
      id: 2,
      question: "How long is the process from start to finish?",
      answer: [
        `We generally finish a website from start to finish within 2-4 weeks. 
      It all depends on how soon clients respond to our content and image requests, as well as the availability of our designers and developers.
      Sometimes it can be 2 weeks, sometimes 3.`,
      ],
    },
    {
      id: 3,
      question: "Can you help with website hosting and domain setup?",
      answer: [
        `Yes! We assist with domain registration and recommend reliable hosting providers to ensure your website is secure, fast, and always online.`,
      ],
    },
    {
      id: 4,
      question: "Do you own our domain?",
      answer: [
        `Nope, your domain is all yours. This will never change. If you choose to discontinue your hosting contract with us for any reason,
        you have full control of your domain and can point it to any other servers of your choice without any action from us.`,
      ],
    },
    {
      id: 5,
      question: "Do you offer SEO services?",
      answer: [
        `Yes, we do! But let’s be real — SEO is a long-term game, not a quick fix. If anyone promises to get you to the top of Google in a month, run the other way! 
      Good SEO takes time (typically 6-12 months) and depends on factors like competition, backlinks, and content quality.`,
        `We focus on high-quality content and proven SEO strategies to help your site rank higher organically. 
      Our approach isn’t about tricking search engines—it’s about building authority and trust with Google over time. 
      Whether you’re in a competitive market or a niche industry, we’ll craft an SEO strategy that works for you.`,
      ],
    },
    {
      id: 6,
      question: "How do I request edits to our site?",
      answer: [
        `We'll provide you with our contact information as well as a Site Edit Request Template.
        You'll be able to specify everything you need to have your site looking exactly how you want it.`,
      ],
    },
    {
      id: 7,
      question: "What happens if I need help after my website is live?",
      answer: [
        `We offer post-launch support and maintenance packages to address any issues, updates, or enhancements you may need. You can also contact us for support requests.`,
      ],
    },
  ];

  const handleToggleQuestion = (id: number) => {
    setActiveQuestionIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); // Remove if it exists
      } else {
        newSet.add(id); // Add if it doesn't exist
      }
      return newSet;
    });
  };

  return (
    // FAQ section
    <section id="FAQs" className="max-w-screen-2xl w-full mx-auto py-12 px-6">
      {/* ------------------------- header start ------------------------- */}
      <div className="relative flex items-center mb-10 gap-4">
        <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
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
        <div className="w-full max-w-screen-md flex flex-col items-center justify-center gap-2">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                question={question}
                isActive={activeQuestionIds.has(question.id)}
                handleToggleQuestion={handleToggleQuestion}
              />
            );
          })}
        </div>
      </div>
      {/* ------------------------- content end ------------------------- */}
    </section>
  );
}

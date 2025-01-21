import React from 'react';

export default function OfferingCards() {
  const FAQs = [
    {
      id: 1,
      question: 'What is the cost of a website?',
      answer:
        'The cost of a website can vary depending on various factors such as the complexity of the design, the number of pages, and the features you want to include. We offer a free consultation to discuss your needs and provide you with a quote.',
    },
    {
      id: 2,
      question: 'How long does it take to build a website?',
      answer:
        'The time it takes to build a website can vary depending on the size and complexity of the project. We will work with you to establish a timeline and keep you updated on the progress throughout the process.',
    },
    {
      id: 3,
      question: 'Do you offer maintenance services?',
      answer:
        'Yes, we offer maintenance services to ensure that your website is up-to-date and running smoothly. We can provide regular updates, security checks, and technical support to keep your site running smoothly.',
    },
    {
      id: 4,
      question: 'Can you help with SEO?',
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 5,
      question: 'Can you help with SEO?',
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 6,
      question: 'Can you help with SEO?',
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
    {
      id: 7,
      question: 'Can you help with SEO?',
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engines. We can help you optimize your site for relevant keywords, create quality content, and build backlinks to improve your search engine rankings.",
    },
  ];

  return (
    <div className="max-w-screen-2xl w-full mx-auto py-12 px-6">{/*faqs container*/}
      <div className="relative flex items-center mb-10 gap-4"> {/* header container */}
                <div className="w-[calc(90%-350px)] rounded-full h-4 bg-primary"></div>
                <h1 className=" text-4xl font-thin w-100%">Frequently Asked Questions</h1>
                <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
            </div>
    <div className="bg-white width-100% h-72">FILLER</div>
    </div>

  );
}

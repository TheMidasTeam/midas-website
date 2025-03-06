import React from "react";

export default function OfferingCards() {
  const cards = [
    { title: "Web Design", description: "Crafting stunning, user-friendly websites tailored to your brand.", link: "" },
    { title: "Development", description: "Building fast, secure, and scalable websites with clean code.", link: "" },
    { title: "SEO", description: "Optimizing your site to rank higher and drive organic traffic.", link: "" },
    { title: "Project Mgmt", description: "Keeping your website project on track, on time, and on budget.", link: "" },
    { title: "AI Chatbot", description: "Enhancing customer experience with smart, automated chat solutions.", link: "" },
    { title: "Maintenance", description: "Keeping your site updated, secure, and running smoothly.", link: "" },
    { title: "Cust. Service", description: "Providing reliable support to keep your website hassle-free.", link: "" },
    { title: "Hosting", description: "Fast, secure, and reliable hosting to keep your site online 24/7.", link: "" },
];

  return (
    <div id="OfferingCards" className="max-w-screen-2xl w-full mx-auto py-12 px-6">
      {/*cards container*/}
      <div className="relative flex items-center justify-between mb-10">
        {" "}
        {/* header container */}
        <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
        <h1 className="text-4xl font-thin">What We Offer</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-10">
        {" "}
        {/*cards wrapper with grid*/}
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-[250px] p-[25px] bg-[#191E23] rounded-[15px]"
          >
            {" "}
            {/*indiv card container*/}
            <div className="flex justify-between">
              {" "}
              {/*card title and arrow*/}
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                {card.title}
              </h3>
              {/*card title*/}
              <a href="#" className="text-white text-xl">
                →
              </a>
              {/*card arrow*/}
            </div>
            <p className="text-sm text-gray-400 mb-4 mt-4">
              {card.description}
            </p>{" "}
            {/*card description*/}
          </div>
        ))}
      </div>
    </div>
  );
}

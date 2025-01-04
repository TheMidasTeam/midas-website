import React from 'react';

export default function OfferingCards() {

    const cards = [
        { title: "Web Design", description: "This is a description"},
        { title: "Development", description: "This is a description"},
        { title: "SEO", description: "This is a description"},
        { title: "Project Mgmt", description: "This is a description"},
        { title: "AI Chatbot", description: "This is a description"},
        { title: "Maintenance", description: "This is a description"},
        { title: "Cust. Service", description: "This is a description"},
        { title: "Hosting", description: "This is a description"},
    ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">{/*cards container*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> {/*cards wrapper with grid*/}
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-lg"> {/*indiv card container*/}
            <div className="flex justify-between"> {/*card title and arrow*/}
              <h3 className="text-lg font-bold text-white mb-2 ">{card.title}</h3>{/*card title*/}
              <a href="#" className="text-white text-xl">→</a>{/*card arrow*/}
            </div>
            <p className="text-sm text-gray-400 mb-4">{card.description}</p> {/*card description*/}
          </div> 
        ))}
      </div>
    </div>
  );
}
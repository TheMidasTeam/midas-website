"use client";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    // Contact section
    <section className="max-w-screen-2xl w-full mx-auto py-12 px-6">
      {/* ------------------------- header start ------------------------- */}
      <div className="relative flex items-center mb-10 gap-4">
        <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
        <h1 className="text-center text-4xl font-thin w-full">
          Book a Free Consultation
        </h1>
        <div className="w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
      </div>
      <div className="SUBHEADING flex items-center justify-center">
        <p className="text-primary font-montserrat">
          We'd love to learn more about your business and goals!
        </p>
      </div>
      <div>
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget min-w-[320px] h-[700px]"
          data-url="https://calendly.com/erickalvarez-official"
        ></div>
        {/* <!-- Calendly inline widget end --> */}
      </div>
    </section>
  );
}

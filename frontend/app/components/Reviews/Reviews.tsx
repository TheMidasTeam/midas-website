import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    text: "Their creativity and attention to detail completely transformed our brand. We couldn't be happier with the results!",
    name: 'Raymond Williams',
    title: 'CEO, BrightPath Insurance',
    photo: 'https://via.placeholder.com/48', // Replace with actual photo URL
  },
  {
    text: 'Working with them was a breath of fresh air. They truly understood our vision and brought it to life effortlessly.',
    name: 'Alejandra Reyes',
    title: 'Co-Founder, StratEdge Consulting',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'They took our ideas and elevated them beyond our expectations. The design work was spot-on!',
    name: 'Jessica Parks',
    title: 'Founder, Parkview Dental Studio',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'A talented team that knows how to turn complex challenges into beautiful, functional solutions. Highly recommend!',
    name: 'Michael Chen',
    title: 'Director, Vertex FinTech',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'Their expertise helped us build a stronger brand presence and stand out in a competitive market. Fantastic work!',
    name: 'Samantha Lee',
    title: 'Marketing Manager, Haven Retail',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'They were professional, efficient, and incredibly creative. Our website has never looked better!',
    name: 'Jonathan Brooks',
    title: 'Founder, Launchpad Startup Studio',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'Reliable, detail-oriented, and always one step ahead. They helped us meet tight deadlines without compromising quality.',
    name: 'Olivia Harris',
    title: 'VP of Product, Nimbus Software',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'A great team to work with! They listened to our needs and delivered a product that exceeded our expectations.',
    name: 'Ethan Martinez',
    title: 'Head of Design, Apex Technologies',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: 'Their insights and creative approach gave our brand a fresh perspective. The impact has been incredible!',
    name: 'Grace Thompson',
    title: 'CEO, Elevate Wellness',
    photo: 'https://via.placeholder.com/48',
  },
  {
    text: "Passionate, skilled, and genuinely invested in their clients' success. We’ve had a fantastic experience working with them.",
    name: 'David Foster',
    title: 'Managing Director, Pulse Media',
    photo: 'https://via.placeholder.com/48',
  },
];

interface ReviewCardProps {
  text: string;
  name: string;
  title: string;
  photo: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  name,
  title,
  photo,
}) => (
  <div className="bg-zinc-900 rounded-xl p-6 w-[320px] mx-4 flex-shrink-0 relative font-montserrat flex flex-col justify-between h-[280px]">
    <div className="text-yellow-400 text-6xl font-serif absolute top-6 left-6">
      &quot;
    </div>
    <p className="text-white text-base leading-relaxed mb-6 mt-4 pt-6 flex-grow">
      {text}
    </p>
    <div className="flex items-center gap-3">
      <Image
        src={photo}
        alt={`${name}'s photo`}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="text-white font-medium text-base">{name}</div>
        <div className="text-zinc-400 text-xs">{title}</div>
      </div>
    </div>
  </div>
);

const CarouselTrack = ({ direction = 'left' }) => (
  <div className="flex gap-4">
    <div
      className={`flex gap-4 ${
        direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
      }`}
    >
      {reviews.map((review, idx) => (
        <ReviewCard key={`original-${idx}`} {...review} />
      ))}
      {reviews.map((review, idx) => (
        <ReviewCard key={`duplicate-1-${idx}`} {...review} />
      ))}
      {reviews.map((review, idx) => (
        <ReviewCard key={`duplicate-2-${idx}`} {...review} />
      ))}
    </div>
  </div>
);

const ReviewCarousel = () => {
  return (
    <div>
      <div
        id="Reviews"
        className="relative flex items-center justify-between mb-10"
      >
        <div className="w-[calc(100%-550px)] rounded-full h-4 bg-primary"></div>
        <h1 className="text-4xl font-thin">What People Are Saying</h1>
      </div>
      <div className="relative w-full overflow-hidden bg-gray-800 text-white rounded-xl">
        <div className="w-full overflow-hidden py-8">
          <CarouselTrack direction="left" />
        </div>
        <div className="w-full overflow-hidden py-8">
          <CarouselTrack direction="right" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

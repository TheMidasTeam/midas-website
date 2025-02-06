import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    text: 'From concept to execution, their creativity knows no bound – a game changer for us.',
    name: 'Raymond Williams',
    title: 'CEO of ABC Insurance',
    photo: 'https://via.placeholder.com/48', // Replace with actual photo URL
  },
  {
    text: 'A refreshing and imaginative agency that consistently delivers for us and our team.',
    name: 'Alejandra Reyes',
    title: 'Co-Founder at Consultancy',
    photo: 'https://via.placeholder.com/48', // Replace with actual photo URL
  },
  {
    text: 'They exceeded our expectations with creative designs that brought our vision to life!',
    name: 'Jessica Parks',
    title: 'Founder of XYZ Dentistry',
    photo: 'https://via.placeholder.com/48', // Replace with actual photo URL
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
  <div className="bg-zinc-900 rounded-xl p-6 w-[320px] mx-4 flex-shrink-0 relative font-montserrat">
    <div className="text-yellow-400 text-6xl font-serif absolute top-6 left-6">
      &quot;
    </div>
    <p className="text-white text-base leading-relaxed mb-6 mt-4 pt-6">
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
        <div className="text-zinc-400 text-sm">{title}</div>
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
    <div className="relative w-full overflow-hidden bg-gray-800 text-white rounded-xl">
      <div className="w-full overflow-hidden py-8">
        <CarouselTrack direction="left" />
      </div>
      <div className="w-full overflow-hidden py-8">
        <CarouselTrack direction="right" />
      </div>
    </div>
  );
};

export default ReviewCarousel;

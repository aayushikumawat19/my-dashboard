import React from 'react';

interface ContactImageProps {
  src: string;
  alt: string;
}

const ContactImage: React.FC<ContactImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 rounded-full mr-2 object-cover"
    />
  );
};

export default ContactImage;
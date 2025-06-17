import React from 'react';
import ContactImage from './ContactImage';
import PhoneIcon from '../assets/icons/Vector.svg';
import EmailIcon from '../assets/icons/Vector (1).svg';

interface ContactProps {
  contact: {
    name: string;
    email: string;
    phone: string;
    score: string;
    company: string;
    companyLogo: string;
    owner: string;
    image: string;
    ownerImage: string;
  };
}

const ContactItem: React.FC<{ contact: ContactProps['contact'] }> = ({ contact }) => {
  const getBadgeColor = (score: string) => {
    switch (score) {
      case 'Online Store':
      case 'External Referral':
      case 'Advertisement':
        return 'bg-orange-100 text-orange-500';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <tr className="text-sm">
      <td className="py-4 px-4 flex items-center">
        <ContactImage src={contact.image} alt={contact.name} />
        <div>
          <div className=" text-gray-900">{contact.name}</div>
          <div className="text-xs text-gray-400">Today at 4:30 PM</div>
        </div>
      </td>
       <td className="py-4 px-4 space-y-1">
        <div className="flex items-center text-gray-800">
          <img src={EmailIcon} alt="email" className="w-4 h-4 mr-2" />
         
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <img src={PhoneIcon} alt="phone" className="w-4 h-4 mr-2" />
           <span>{contact.email}</span>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(contact.score)}`}>
          {contact.score}
        </span>
      </td>
      
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <img
            src={contact.companyLogo}
            alt={contact.company}
            className="w-5 h-5 object-contain"
          />
          <span>{contact.company}</span>
        </div>
      </td>
      <td className="py-4 px-4 flex items-center">
        <ContactImage src={contact.ownerImage} alt={contact.owner} />
        <span>{contact.owner}</span>
      </td>
    </tr>
  );
};

export default ContactItem;

import React, { useState } from 'react';
import ContactItem from './ContactItem';
import Input from '../comman/Input';
import rectangleImage from '../assets/images/Rectangle 22.svg';
import Rectangle from '../assets/images/Rectangle 22 (1).svg'
import Rectanglee from '../assets/images/Rectangle 22 (2).svg'
import Image from '../assets/images/Rectangle 22 (3).svg'
import Images from '../assets/images/Rectangle 23.svg'
import Img from '../assets/images/Rectangle 23 (2).svg'
import Photo from '../assets/images/Rectangle 23 (1).svg'
import google from '../assets/images/devicon_google.svg';
import youtube from '../assets/images/logos_youtube-icon.svg'
import twitter from '../assets/images/logos_twitter.svg'
import facebook from '../assets/images/logos_facebook.svg'
import skype from '../assets/images/logos_skype.svg'
import Icon from '../assets/images/Group 7.svg'

const Table: React.FC = () => {
  const contacts = [
    {
      name: "Darlene Robertson",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Online Store",
      company: "Google",
      companyLogo: google,
      owner: "Jaed Thunderclock",
      image: rectangleImage, 
      ownerImage: rectangleImage,
    },
    {
      name: "Emily Roy",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Online Store",
      company: "Facebook",
      companyLogo:  facebook,
      owner: "Emily Roy",
      image: Rectangle, 
      ownerImage:Rectangle ,
    },
    {
      name: "Javed Akhtar",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "External Referral",
      company: "Google",
      companyLogo:  google,
      owner: "Javed Akhtar",
      image: Images, 
      ownerImage: Images,
    },
    {
      name: "Jay Roy",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Online Store",
      company: "YouTube",
      companyLogo:  youtube,
      owner: "Jay Roy",
      image: Photo, 
      ownerImage: Photo,
    },
    {
      name: "Devendra Sharma",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Online Store",
      company: "Skype",
      companyLogo:  skype,
      owner: "Devendra Sharma",
      image: Rectanglee, 
      ownerImage: Img,
    },
    {
      name: "Dheeraj Sharma",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Online Store",
      company: "Twitter",
      companyLogo:  twitter,
      owner: "Dheeraj Sharma",
      image: Rectanglee, 
      ownerImage: Rectanglee,
    },
    {
      name: "Neeta Agrawal",
      email: "bill.senders@example.com",
      phone: "(907) 555-0101",
      score: "Advertisement",
      company: "Google",
      companyLogo:  google,
      owner: "Neeta Agrawal",
      image: Image, 
      ownerImage: rectangleImage,
    },
  ];

  const [resultsPerPage, setResultsPerPage] = useState(10);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
           <div className="flex items-center w-[314px] max-w-md mx-8">
                <Input placeholder="Search contact" />
            </div>
        <div className="mt-2 text-gray-600 flex items-center text-xs w-[197px]">
          <span className="mr-2">Showing</span>
          <select
            value={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
            className="px-1 py-1 rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <span className="mx-2">of {contacts.length} results</span>
        </div>
      </div>
      <table className="w-[1200px] mt-4 text-sm mx-14">
        <thead className=" text-left text-[#707070]">
          <tr>
            <th className="py-3 px-4"> 
              <div className="flex items-center whitespace-nowrap">
                <span>CONTACT NAME</span>
                <img src={Icon} alt="Sort Icon" className="ml-2"/> 
              </div>
            </th>
            <th className="py-3 px-4"> 
              <div className="flex items-center whitespace-nowrap">
                <span>CONTACT</span>
                <img src={Icon} alt="Sort Icon" className="ml-2"/> 
              </div>
            </th>
            <th className="py-3 px-4"> 
              <div className="flex items-center whitespace-nowrap">
                <span>LEAD SCORE</span>
                <img src={Icon} alt="Sort Icon" className="ml-2"/> 
              </div>
            </th>
            <th className="py-3 px-4"> 
              <div className="flex items-center whitespace-nowrap">
                <span>COMPANY</span>
                <img src={Icon} alt="Sort Icon" className="ml-2"/> 
              </div>
            </th>
            <th className="py-3 px-4"> 
              <div className="flex items-center whitespace-nowrap">
                <span>CONTACT OWNER</span>
                <img src={Icon} alt="Sort Icon" className="ml-2"/> 
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, resultsPerPage).map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
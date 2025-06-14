import React from 'react'
import Card from '../components/Card';
import CardImage1 from '../assets/CardImage1.jpg';
import CardImage2 from '../assets/CardImage2.jpg';
import CardImage3 from '../assets/CardImage3.jpg';
import CardImage4 from '../assets/CardImage4.jpg';
import CardImage5 from '../assets/CardImage5.jpg';
import CardImage6 from '../assets/CardImage6.jpg';
import CardImage7 from '../assets/CardImage7.jpg';
import CardImage8 from '../assets/CardImage8.jpg';

  const data=[
  {
    id: 1,
    title: "Business Advisory",
    description: "Navigate the complexities of business with our expert advisory services. Whether you're a startup or an established enterprise, our strategic insights and personalized advice empower you to make informed decisions that drive growth and profitability.",
    image: CardImage1,
  },
  {
    id: 2,
    title: "Business Accounting",
    description: "Ensure your business stays financially healthy with our meticulous accounting services. From day-to-day bookkeeping to comprehensive financial reporting, our team ensures accuracy and compliance, giving you the clarity to focus on achieving your business goals.",
    image: CardImage2,
  },
  {
    id: 3,
    title: "Tax Accounting",
    description: "Maximize your tax efficiency and minimize liabilities with our specialized tax accounting services. Our experienced tax professionals provide proactive tax planning strategies and ensure compliance with all regulations, helping you navigate the complexities of tax law with confidence.",
    image: CardImage3,

  },
  {
    id: 4,
    title: "Bookkeeping Services",
    description: "Manage your self-managed superannuation fund (SMSF) with confidence. We offer comprehensive SMSF accounting services, ensuring compliance with regulatory requirements and optimizing your retirement savings strategy.",
    image: CardImage4,
  },
  {
    id: 5,
    title: "SMSF Accountants",
    description: "Stay on top of your finances with our reliable bookkeeping services. We handle the day-to-day financial transactions, maintain accurate records, and provide timely reports, allowing you to make informed business decisions with ease.",
    image: CardImage5,
  },
  {
    id: 6,
    title: "Software Solutions",
    description: "Streamline your accounting processes with our cutting-edge software solutions. From cloud-based accounting software to customized solutions for your specific needs, we empower you with the tools to enhance efficiency and accuracy in financial management.",
    image: CardImage6,
  },
  {
    id: 7,
    title: "QBCC Annual Reporting",
    description: "We simplify the process of lodging your QBCC annual reports. Our expert team assists in preparing the necessary QBCC reports and the accompanying financial statements, ensuring you meet all annual reporting requirements with accuracy and efficiency. Additionally, we provide support for MFR (Minimum Financial Requirements) reporting, helping you maintain compliance with the QBCC.",
    image: CardImage7,
  },
  {
    id: 8,
    title: "Crypto Accountant",
    description: "Ensure your cryptocurrency transactions are accurate and compliant. We provide specialized accounting services for crypto traders and investors. From taxes to detailed record-keeping, we make sure your finances meet ATO guidelines.",
    image: CardImage8,
  },
  ]

const page = () => {
  return (
    <div>
    <div className={`min-w-screen flex flex-col px-3`}>
    <h1 className='text-5xl py-5 font-semibold text-center'>Our Services</h1>
    <p className='max-w-4xl mx-auto px-10 mt-3 text-center'>At Malik Aziz & Co., we offer a full range of accounting services to help you achieve financial success. From bookkeeping and tax planning to business advisory and SMSF management, we provide personalized solutions for individuals and businesses alike.</p>

    <div className='w-full max-w-7xl mx-auto md:px-5 py-10 mx-auto'>
     {data.map((item) => (
      <Card 
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
      />
     ))}
      </div>
    </div>
    </div>
  )
}

export default page

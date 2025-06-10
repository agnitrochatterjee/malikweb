import React from 'react';
import Publication from '../components/Publications';
import {WhyChoose} from '../components/WhyChoose';
import MalikAzizImage from '../assets/MalikAzizImage.jpg';
import ArtiBudhnaniImage from '../assets/ArtiBudhnaniImage.jpg';

type ServiceCard = {
  number: number;
  title: string;
  description: string;
};

const services: ServiceCard[] = [
    { number: 1, title: "Trust", description: "We prioritize building strong, lasting relationships with our clients. With our transparent and reliable services, you can trust us to handle your financial needs with integrity and dedication." },
    { number: 2, title: "Expertise", description: "We brings extensive experience in accounting, bookkeeping, and tax services, offering a wealth of knowledge to every client engagement." },
    { number: 3, title: "Community", description: "We believe in the power of community and are dedicated to supporting the growth and success of the businesses and individuals we serve." },
    { number: 4, title: "Ethics", description: "At Malik Aziz & Co., we adhere to the highest ethical standards. Our commitment to honesty, fairness, and accountability ensures that your financial matters are handled with the utmost care and professionalism." },
    { number: 5, title: "Efficiency", description: "We understand the importance of efficiency in financial management. Our streamlined processes and advanced tools help you save time and resources, allowing you to focus on what matters most—growing your business." },
    { number: 6, title: "Many More", description: "Our wide range of services is designed to meet all your financial needs. From personalized advisory to innovative software solutions, we offer comprehensive support to help you achieve your financial goals." },
  ];

    const data=[
        {
            id: 1,
            title: "Malik Aziz",
            description: "With a keen analytical mind, numbers have always come naturally to me. My passion for trends and business led me to pursue a master's degree and gain a decade of experience in accounting. Now, I've founded my own firm, MA & Co, to offer personalized tax planning and consulting. Unlike traditional accountants, we focus on understanding the person behind the business, their goals, and values.",
            image:MalikAzizImage
        },
        {
            id: 2,
            title: "Arti Budhnani",
            description: "As our Office Admin and Assistant Accountant, Arti brings over two years of experience in bookkeeping and office administration. Her extensive background makes her our go-to expert for managing client onboarding, handling intricate bookkeeping tasks, and ensuring smooth office operations. Arti's dedication and skills mean that if Malik faces a challenge, Arti is the one who steps in to resolve it.",
            image:ArtiBudhnaniImage
        },
    ]

const page = () => {
  return (
    <div className='p-5'>
      <div className={`overflow-hidden`}>
    <h1 className='text-5xl place-self-center'>About Us</h1>
    <p className='text-lg place-self-center mt-3'>Top quality accounting services for your business</p>
    <p className='text-lg px-10 mt-3'>With 10 years of experience, we work with companies of all sizes, and in all industries. We are dedicated to handling all tax issues swiftly and accurately, so that you can focus on what really matters to your business.</p>

    <div className='w-full max-w-7xl px-5 py-10 mx-auto'>
     {data.map((item) => (
      <Publication 
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
      />
     ))}
      </div>

      <h1 className='text-5xl place-self-center'>Why Choose Us?</h1>
    <p className='text-lg px-10 mt-3'>We pride ourselves on our commitment to excellence and personalized service. We stay up-to-date with the latest industry trends and regulations, ensuring you receive the most accurate and relevant advice.</p>

     <WhyChoose services={services}/>
    </div>
    <p className='text-lg place-self-center'>We&apos; ll handle all your tax and accounting needs, so you can focus on your business.</p>
    </div>
  )
}

export default page

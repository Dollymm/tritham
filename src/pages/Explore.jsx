import React from 'react';
import kedar2 from '../assets/kedar.webp';
import bhairav from '../assets/bhairavMandir.jpg';
import vishwa from '../assets/Vishwanath.jpg';
import triyugi from '../assets/triyugi.webp';

import Card from '../component/Card';
import AOS from 'aos';
import kedarImg2 from '../assets/kedarnath.jpg'; // Example additional image
const Explore = () => {
  // Initialize AOS within the component
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="relative mb-12" data-aos="fade-up">
          <img
            src={kedar2}
            alt="Kedarnath"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold text-white">Explore</h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Card
            image={kedar2}
            title="Kedarnath Temple"
            shortDescription="A significant Hindu temple located in the Garhwal Himalayan range."
            fullDescription="(Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit. 'temple of the God of the field') is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogeneous form of Shiva, the 'Lord of Kedarkhand', the historical name of the region."
            additionalImages={[kedar2, kedarImg2]}
            data-aos="fade-up"
          />
          <Card
            image={bhairav}
            title="Shri Bhairavnath Mandir"
            shortDescription="An ancient shrine dedicated to Baba Bhairavnath, offering a view of Kedarnath Temple."
            fullDescription="Extremely old shrine dedicated to Baba Bhairavnath who is the Kshetrapal of Kedarnath. There is a priest who lives and meditates at the shrine for six months and we have him donation to buy food for one month and he blessed us abundantly. You get a bird's eye view of the Kedarnath Temple and the valley."
            additionalImages={[]}
            data-aos="fade-up"
          />
          <Card
            image={vishwa}
            title="Shri Kashi Vishwanath"
            shortDescription="A divine experience at the place where Lord Shiva vanished."
            fullDescription="Divine experience. Lord Shiva vanished here and hence the name GuptKashi. One can see all the ‘forms of Shiva’ here. Must visit the Place. Parking available nearby."
            additionalImages={[]}
            data-aos="fade-up"
          />
          <Card
            image={triyugi}
            title="Triyuginarayan Temple"
            shortDescription="A Hindu temple dedicated to Vishnu, known for its perpetual fire."
            fullDescription="Triyuginarayan Temple (Sanskrit: त्रियुगी-नारायण) is a Hindu temple located in the Triyuginarayan village in Rudraprayag district, Uttarakhand, India. The ancient temple is dedicated to god Vishnu. Its fame is credited to the legend of god Shiva’s marriage to goddess Parvati witnessed by Vishnu at this venue and is thus a popular Hindu pilgrimage site. A special feature of this temple is a perpetual fire that burns in front of the temple. The flame is believed to burn from the times of the divine marriage. Thus, the temple is also known as Akhand Dhuni temple."
            additionalImages={[]}
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;

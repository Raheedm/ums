import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/HomeCource.css';

const Home = () => {
  const campusFacilities = [
    {
      title: 'Classroom Facilities',
      description:
        'The College has state-of-the-art, fully-equipped classrooms and modern laboratories with provisions for research facilities. It also has a campus-wide Wi-Fi network and web-based virtual infrastructure for teaching-learning; C-LAAP, Google Classroom, C-mail, Online Library',
      imageUrl: 'http://www.chowgules.ac.in/resources/images/highlight1/0.jpg',
    },
    {
      title: 'Sports Centre',
      description:
        'Spread over 35,000 sq.ft, the Sports Centre is equipped with a variety of sports and recreational fitness facilities such as cardio equipment, free weights, indoor running track, Olympic platforms, etc. It also has a FIFA-accredited football ground with an artificial field turf, a multipurpose ground, gym, sports medicine and physiotherapy centre.',
      imageUrl: 'http://www.chowgules.ac.in/resources/images/highlight1/1.jpg',
    },
    {
      title: 'Tiger Studio',
      description:
        'The first educational institute in Goa to have a full-fledged studio for pre and post-production of videos for film and television; well-equipped with HD cameras, Cranes, Professional Lighting and Soundproofing and Workstations. Tiger Studio runs short-term and advanced courses in Video Editing, Animation, Sound-Editing, Photography, Videography, Special Effects and more',
      imageUrl: 'http://www.chowgules.ac.in/resources/images/highlight1/2.jpg',
    },
    {
      title: 'Library',
      description:
        'The College has an impressive library block with a built-up area of 1200sq.m. The library has worldwide links, giving users easy access to scholarly material that is relevant and up to date. It has a vast collection of 65,000 items covering every field of knowledge and serves to make resources available to faculty and students',
      imageUrl: 'http://www.chowgules.ac.in/resources/images/highlight1/3.jpg',
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center p-0">
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay className="w-screen">
          <div>
            <img
              src="http://node01.chowgules.ac.in/pub/webassets/website_banner_img/3.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              src="http://node01.chowgules.ac.in/pub/webassets/website_banner_img/5.jpg"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              src="http://node01.chowgules.ac.in/pub/webassets/website_banner_img/2.jpg"
              alt="Image 3"
            />
          </div>
          <div>
            <img
              src="http://node01.chowgules.ac.in/pub/webassets/website_banner_img/1.jpg"
              alt="Image 4"
            />
          </div>
        </Carousel>
      </div>

      {campusFacilities.map((facility, index) => (
        <div className="container" key={index}>
          <div className="left" style={{ backgroundImage: `url(${facility.imageUrl})` }}></div>
          <div className="right">
            <div className="content">
              <h1>{facility.title}</h1>
              <p>{facility.description}</p>
              <a href="#" class="btn">
                Click Me
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
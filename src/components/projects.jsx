import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Ensure the image path is correct
import aharonImage from '../assets/images/aharonImage.png'; // Replace with actual path

const projects = [
    {
        id: 1,
        name: 'Project 1',
        description: 'This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: aharonImage,
        detailsLink: '/project1',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'This is the description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: aharonImage,
        detailsLink: '/project2',
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'This is the description for Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: aharonImage,
        detailsLink: '/project3',
    },
];

function Projects() {
    console.log('Projects array:', projects); // Check if projects array is correctly set

    return (
        <div className='mx-20 mt-20  items-center text-center'>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
            >
                {projects.length === 0 ? (
                    <div>No projects available</div>
                ) : (
                    projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide m-auto max-h-64 ">
                                <img className='rounded-2xl max-h-52 max-w-52' src={project.image} alt={project.name} onError={(e) => {e.target.src = 'fallbackImage.jpg'}} />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}

export default Projects;

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import aharonImage from '../assets/images/aharonImage.png';

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
    {
        id: 4,
        name: 'Project 4',
        description: 'This is the description for Project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: aharonImage,
        detailsLink: '/project4',
    },
];

function Projects() {
    const swiperRef = useRef(null);
    const [expandedProject, setExpandedProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Projects array:', projects);
    }, []);

    const handleViewDetails = (project) => {
        setExpandedProject(project.id);
        const projectIndex = projects.findIndex(p => p.id === project.id);
        swiperRef.current.swiper.slideToLoop(projectIndex, 0);
    };

    const handleHideDetails = () => {
        setExpandedProject(null);
    };

    const handleViewProjectDetails = (detailsLink) => {
        navigate(detailsLink);
    };

    return (
        <div className='mx-20 mt-20 items-center text-center flex flex-row'>
            <button className="bg-transparent rounded-full text-[#525252] max-w-6 self-center mr-3" onClick={() => swiperRef.current.swiper.slidePrev()}>
                <FaAngleLeft className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
            </button>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={expandedProject ? 1 : 3}
                centeredSlides={true}
                loop={!expandedProject}
            >
                {projects.length === 0 ? (
                    <div>No projects available</div>
                ) : (
                    projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className={`swiper-slide m-auto bg-blue-400 rounded-2xl p-2 ${expandedProject === project.id ? 'w-full' : ''}`}>
                                <img className='rounded-2xl max-h-52 max-w-52 m-auto' src={project.image} alt={project.name} onError={(e) => { e.target.src = {aharonImage} }} />
                                <h3 className='text-2xl'>{project.name}</h3>
                                <p className={`truncate ${expandedProject === project.id ? '' : 'max-h-16'}`}>{project.description}</p>
                                {expandedProject === project.id ? (
                                    <>
                                        <button onClick={() => handleViewProjectDetails(project.detailsLink)} className='bg-gray-800 text-white p-2 rounded mt-2'>View Project Details</button>
                                        <button onClick={handleHideDetails} className='bg-red-500 text-white p-2 rounded mt-2'>Hide</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleViewDetails(project)} className='bg-gray-800 text-white p-2 rounded mt-2'>View Details</button>
                                )}
                            </div>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
            <button className="bg-transparent rounded-full text-[#525252] max-w-6 self-center ml-3" onClick={() => swiperRef.current.swiper.slideNext()}>
                <FaAngleRight className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
            </button>
        </div>
    );
}

export default Projects;

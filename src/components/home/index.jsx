/* eslint-disable no-undef */
import { FaTwitch, FaTiktok, FaInstagram, FaDiscord, FaYoutube, FaFacebookF, FaArtstation } from 'react-icons/fa';
import React, { useState } from 'react';
import CardScreen from '../../assets/2.png';
import Project1Image from '../../assets/2.png';
import Project2Image from '../../assets/2.png';
import Project3Image from '../../assets/2.png';
import CourseImage from '../../assets/2.png';
import './style.css';

const Index = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 100);
    };

    return (
        <div className="index-contenedor">
            <div className={`index-navbar ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
                <div className="card-container">
                    <img className="card-image" src={CardScreen} alt="Imagen no disponible" />
                </div>
                <div className="info-container">
                    <h2 className='center'>Fotos de Proyectos</h2>
                    <div className="project-images">
                        <img src={Project1Image} alt="Proyecto 1" />
                        <img src={Project2Image} alt="Proyecto 2" />
                        <img src={Project3Image} alt="Proyecto 3" />
                    </div>

                    <h2 className='center'>Biografía</h2>
                    <p>Aquí va la biografía del diseñador...</p>

                    <h2>Redes Sociales</h2>
                    <div className="social-links">
                        <a href="https://www.twitch.tv/grafvfx"><FaTwitch /> Twitch</a>
                        <a href="https://www.tiktok.com/@grafvfx"><FaTiktok /> Tiktok</a>
                        <a href="https://www.instagram.com/grafvfx"><FaInstagram /> Instagram</a>
                        <a href="https://instagram.com"><FaDiscord /> Discord</a>
                        <a href="https://www.youtube.com/channel/UCFhoq9wjl1eix-ZVN89VjQw"><FaYoutube /> Youtube</a>
                        <a href="https://web.facebook.com/grafvfx"><FaFacebookF /> Facebook</a>
                        <a href="https://www.artstation.com/franciscopadilla"><FaArtstation /> Artstation</a>
                    </div>

                    <a href="/redes" className='index-about-infor'>
                        <h3>Más información</h3>
                    </a>

                    <h2>Curso</h2>
                    <div className="course-info">
                        <img src={CourseImage} alt="Curso" />
                        <div className="course-details">
                            <h3>Nombre del Curso</h3>
                            <p>Descripción breve del curso...</p>
                            <a href="/cursos">Más información</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

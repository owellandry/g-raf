import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';
import { FaChartLine, FaThumbsUp, FaComments, FaShare, FaMoon, FaSignOutAlt, FaBars, FaSearch, FaClock, FaFile } from 'react-icons/fa';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarClosed, setSidebarClosed] = useState(false);

    useEffect(() => {
        const loggedIn = Cookies.get('loggedIn');
        if (!loggedIn) {
            navigate('/account/admin');
        }
    }, [navigate]);

    useEffect(() => {
        const getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark") {
            setDarkMode(true);
        }

        const getStatus = localStorage.getItem("status");
        if (getStatus && getStatus === "close") {
            setSidebarClosed(true);
        }
    }, []);

    const handleModeToggle = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("mode", darkMode ? "light" : "dark");
    };

    const handleSidebarToggle = () => {
        setSidebarClosed(!sidebarClosed);
        localStorage.setItem("status", sidebarClosed ? "open" : "close");
    };

    const handleLogout = () => {
        Cookies.remove('loggedIn');
        navigate('/account/admin');
    };

    return (
        <>
            <nav className={sidebarClosed ? "close" : ""}>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <span className="logo_name">ADMIN PANEL</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li><a href="/"><FaChartLine />Dashboard</a></li>
                        <li><a href="/"><FaFile />Content</a></li>
                        <li><a href="/"><FaChartLine />Analytics</a></li>
                        <li><a href="/"><FaThumbsUp />Likes</a></li>
                        <li><a href="/"><FaComments />Comments</a></li>
                        <li><a href="/"><FaShare />Share</a></li>
                    </ul>
                    <ul className="logout-mode">
                        <li><button onClick={handleLogout}><FaSignOutAlt />Logout</button></li>
                        <li className="mode" onClick={handleModeToggle}>
                            <a href="/"><FaMoon />{darkMode ? 'Light Mode' : 'Dark Mode'}</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <FaBars className="sidebar-toggle" onClick={handleSidebarToggle} />
                    <div className="search-box">
                        <FaSearch />
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <img src="images/profile.jpg" alt="" />
                </div>
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <FaChartLine />
                            <span className="text">Dashboard</span>
                        </div>
                        <div className="boxes">
                            <div className="box box1">
                                <FaThumbsUp />
                                <span className="text">Total Likes</span>
                                <span className="number">50,120</span>
                            </div>
                            <div className="box box2">
                                <FaComments />
                                <span className="text">Comments</span>
                                <span className="number">20,120</span>
                            </div>
                            <div className="box box3">
                                <FaShare />
                                <span className="text">Total Share</span>
                                <span className="number">10,120</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity">
                        <div className="title">
                            <FaClock />
                            <span className="text">Recent Activity</span>
                        </div>
                        <div className="activity-data">
                            <div className="data names">
                                <span className="data-title">Name</span>
                            </div>
                            <div className="data email">
                                <span className="data-title">Email</span>
                            </div>
                            <div className="data joined">
                                <span className="data-title">Joined</span>
                            </div>
                            <div className="data type">
                                <span className="data-title">Type</span>
                            </div>
                            <div className="data status">
                                <span className="data-title">Status</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminDashboard;

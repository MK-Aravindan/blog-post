import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome_page";
import BlackImage from "./assets-cached.jpg";
import "./MainLayout.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const MainLayout = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <Sidebar />
      <Welcome />
      <div className="content">
        <div
          className="img-container"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img src={BlackImage} alt="Black" />
        </div>
        <div
          className="content-inside"
          style={{ marginTop: isHovered ? "10%" : "7%" }}
        >
          <h1>THIS IS MY BLOGPOST</h1>
          <div className="icons-section">
            <a href="mailto:your-email@example.com">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="section">
            <div id="home" className="section-home">
              <h2>Home</h2>
              <p>
                Welcome to my portfolio! I'm a passionate Data Engineer with
                extensive experience in building robust data pipelines, data
                integration, and ensuring data quality across various platforms.
                Explore my projects, experience, and skills to know more about
                my journey in data engineering.
              </p>
            </div>

            <div id="about" className="section-about">
              <h2>About</h2>
              <p>
                I am a dedicated Data Engineer with a knack for transforming
                complex data into actionable insights. My journey in the field
                has equipped me with a deep understanding of data architectures,
                cloud technologies, and data analysis tools. I thrive on solving
                data challenges and am committed to continuous learning and
                innovation in the data engineering landscape.
              </p>
            </div>

            <div id="skills" className="section-skills">
              <h2>Skills</h2>
              <h4>Hover over the skills</h4>
              <div className="skills-container">
                <div className="skill-item">
                  <button className="skill-button">Python</button>
                  <div className="skill-info">
                    Expert in data manipulation, analysis, and scripting.
                    Proficient with libraries like Pandas, NumPy, and more.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                      </div>
                      <span className="performance-label">Expert</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <button className="skill-button">SQL</button>
                  <div className="skill-info">
                    Advanced in query optimization, database design, and data
                    warehousing. Extensive use in relational databases.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                      </div>
                      <span className="performance-label">Expert</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <button className="skill-button">Apache Spark</button>
                  <div className="skill-info">
                    Expertise in big data processing, real-time analytics, and
                    in-memory computing.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot empty"></span>
                      </div>
                      <span className="performance-label">Good</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <button className="skill-button">Kafka</button>
                  <div className="skill-info">
                    Skilled in stream processing, messaging systems, and
                    real-time data pipelines.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot empty"></span>
                        <span className="dot empty"></span>
                      </div>
                      <span className="performance-label">Average</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <button className="skill-button">Data Warehousing</button>
                  <div className="skill-info">
                    Proficient in designing and managing data warehouses on
                    platforms like AWS Redshift and Snowflake.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot empty"></span>
                        <span className="dot empty"></span>
                      </div>
                      <span className="performance-label">Average</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <button className="skill-button">ETL Development</button>
                  <div className="skill-info">
                    Advanced skills in ETL processes, data integration, and
                    using tools like Apache Airflow.
                    <div className="skill-performance">
                      <span>Performance:</span>
                      <div className="performance-dots">
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                        <span className="dot filled"></span>
                      </div>
                      <span className="performance-label">Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="projects" className="section-projects">
              <h2>Projects</h2>
              <p>
                Here are some of the projects that showcase my skills and
                experience in data engineering:
              </p>
              <ul>
                <li>
                  <strong>Real-Time Data Processing System</strong> - Developed
                  a real-time data processing system using Apache Kafka and
                  Spark, handling millions of events per second to provide
                  real-time analytics.
                </li>
                <li>
                  <strong>Data Warehouse Implementation</strong> - Led the
                  implementation of a cloud-based data warehouse on AWS
                  Redshift, improving data retrieval speeds by 40%.
                </li>
                <li>
                  <strong>ETL Pipeline Optimization</strong> - Optimized an ETL
                  pipeline, reducing data processing time by 60% and enhancing
                  data accuracy using Apache Airflow.
                </li>
              </ul>
            </div>

            <div id="experience" className="section-experience">
              <h2>Experience</h2>
              <p>
                I have a diverse experience in data engineering roles across
                various industries:
              </p>
              <ul>
                <li>
                  <strong>Data Engineer at XYZ Corp</strong> (2020 - Present) -
                  Spearheaded the migration of legacy data systems to modern
                  data lakes, resulting in a 50% reduction in data retrieval
                  time.
                </li>
                <li>
                  <strong>Data Analyst at ABC Inc.</strong> (2017 - 2020) -
                  Conducted in-depth data analysis and visualization to drive
                  business decisions, leading to a 15% increase in operational
                  efficiency.
                </li>
                <li>
                  <strong>Junior Data Engineer at Data Solutions</strong> (2015
                  - 2017) - Assisted in the development of ETL processes,
                  ensuring data quality and consistency across various data
                  sources.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

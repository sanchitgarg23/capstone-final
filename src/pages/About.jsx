


import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import './About.css'; // Import the new CSS file
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const team = [
    {
      name: "Tanish Garg",
      role: "CEO & Co-founder",
      bio: "Former VP of Product at a Fortune 500 company with 15+ years in tech leadership.",
      avatar: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Aditya Mathur",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer with expertise in distributed systems and scalable architecture.",
      avatar: "https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Omkar Shukla",
      role: "Head of Design",
      bio: "Award-winning designer with a passion for creating intuitive user experiences.",
      avatar: "https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Lakshya Bapna",
      role: "Engineer",
      bio: "Full-stack engineer with 2+ years building scalable web applications.",
      avatar: "https://images.unsplash.com/photo-1524081081171-7960da1de373?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const values = [
    {
      icon: <Users style={{ height: '2rem', width: '2rem' }} />,
      title: "Team First",
      description: "We believe great products are built by great teams. We prioritize collaboration, respect, and inclusive decision-making."
    },
    {
      icon: <Target style={{ height: '2rem', width: '2rem' }} />,
      title: "Customer Focus",
      description: "Every decision we make is guided by what's best for our customers. Their success is our success."
    },
    {
      icon: <Lightbulb style={{ height: '2rem', width: '2rem' }} />,
      title: "Innovation",
      description: "We're constantly pushing boundaries and exploring new ways to solve complex problems with simple solutions."
    },
    {
      icon: <Heart style={{ height: '2rem', width: '2rem' }} />,
      title: "Passion",
      description: "We love what we do and it shows in every feature we build and every interaction we have."
    },
    {
      icon: <Award style={{ height: '2rem', width: '2rem' }} />,
      title: "Excellence",
      description: "We set high standards for ourselves and strive for excellence in everything we deliver."
    },
    {
      icon: <Globe style={{ height: '2rem', width: '2rem' }} />,
      title: "Global Impact",
      description: "We're building tools that help teams around the world work better together and achieve more."
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "50+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
    <Navbar/>

    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">
              We're on a mission to
              <span className="hero-title-gradient"> transform teamwork</span>
            </h1>
            <p className="hero-subtitle">
              TaskFlow was born from the frustration of using clunky project management tools that got in the way of actual work. 
              We set out to build something better—a platform that's powerful yet simple, flexible yet structured.
            </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-text">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi, praesentium facere alias distinctio, accusamus ut fugiat quam nam cumque consequuntur, voluptate impedit temporibus non dignissimos repudiandae voluptatibus necessitatibus error?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita error neque veritatis aut hic exercitationem alias corporis quae voluptatibus, quod libero sapiente ex laudantium, voluptas vel ipsam molestiae ipsum?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sapiente maxime ratione sunt deleniti sed distinctio recusandae ad cumque quidem quis cum fugiat et dolorem esse provident ipsa? Odio, excepturi!
              </p>
            </div>
          </div>
          <div className="story-image-container">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              className="story-image"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
            <h2>Our Values</h2>
            <p>
              These principles guide everything we do, from product decisions to how we treat each other.
            </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-icon-container">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-header">
            <h2>Meet Our Team</h2>
            <p>
              We're a best group of designers, engineers, and problem-solvers came together by our passion for great software.
            </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member-card">
              <img 
                src={member.avatar} 
                alt={member.name}
                className="team-member-avatar"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Want to join our mission?
          </h2>
          <p className="cta-subtitle">
            We're always looking for talented people who share our passion for building great products.
          </p>

          {/* yaha link avail karna ha abhi  */}
          <div className="cta-buttons">
            <a 
              href="#" 
              className="cta-button cta-button-primary"
            >
              View Open Positions
            </a>
            <a 
              href="#" 
              className="cta-button cta-button-secondary"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
  
};

export default About;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react';
import './Home.css'; // Import the new CSS file
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Tanish Garg",
      role: "Product Manager at TechCorp",
      content: "This platform has revolutionized how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
      avatar: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Aditya Mathur",
      role: "CEO at StartupLab",
      content: "We've tried many project management tools, but this one stands out. The seamless integration and real-time collaboration features are game-changers.",
      avatar: "https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Omkar Shukla",
      role: "Design Lead at CreativeStudio",
      content: "The visual organization and customization options are incredible. Our design team can now manage complex projects with ease and clarity.",
      avatar: "https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
    <Navbar/>
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Organize Your Work,
            <span className="hero-gradient-text"> Amplify Your Success</span>
          </h1>
          <p className="hero-subtitle">
            Transform the way your team collaborates with our intuitive project management platform.
            Streamline workflows, boost productivity, and achieve your goals faster than ever before.
          </p>
          <div className="hero-buttons">
            <Link
              to="/signup"
              className="hero-cta-button"
            >
              Start Free Trial
              <ArrowRight className="icon" />
            </Link>
            <button className="hero-demo-button">
              Watch Demo
              <ChevronDown className="icon" />
            </button>
          </div>
          <div className="hero-perks">
            <div className="hero-perk-item">
              <CheckCircle className="icon" />
              Free 14-day trial
            </div>
            <div className="hero-perk-item">
              <CheckCircle className="icon" />
              No credit card required
            </div>
            <div className="hero-perk-item">
              <CheckCircle className="icon" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">How TaskFlow Works</h2>
            <p className="how-it-works-subtitle">
              Get started in minutes with our simple three-step process.
            </p>
          </div>
          <div className="how-it-works-grid">
            {[
              {
                title: "Create Your Board",
                description: "Set up your project board in seconds. Add lists, cards, and organize your workflow exactly how you want it."
              },
              {
                title: "Invite Your Team",
                description: "Collaborate in real-time with your team members. Assign tasks, set deadlines, and track progress together."
              },
              {
                title: "Achieve Your Goals",
                description: "Watch your productivity soar as you and your team stay organized and focused on what matters most."
              }
            ].map((step, index) => (
              <div key={index} className="how-it-works-step">
                <div className={`step-icon step-${index + 1}`}>
                  {index + 1}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Loved by teams worldwide</h2>
            <p className="testimonials-subtitle">
              See what our customers have to say about their experience with TaskFlow.
            </p>
          </div>

          <div className="testimonial-card-wrapper">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="icon" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="testimonial-author">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="author-avatar"
                />
                <div>
                  <div className="author-name">{testimonials[activeTestimonial].name}</div>
                  <div className="author-role">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to transform your workflow?
          </h2>
          <p className="cta-subtitle">
            Join thousands of teams who have already revolutionized their productivity with TaskFlow.
          </p>
          <Link
            to="/signup"
            className="cta-button"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>

    </>
  );
};

export default Home;
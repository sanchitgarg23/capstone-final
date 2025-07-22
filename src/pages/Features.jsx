


import React from 'react';
import { Users, Zap, Shield, BarChart3, Calendar, CheckCircle, Globe, Smartphone, Lock, Workflow, Bell, FileText } from 'lucide-react';
import './Features.css'; // Import the new CSS file
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Users className="icon" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members in real-time. Share boards, assign tasks, and track progress effortlessly.",
      benefits: ["Real-time updates", "Team chat integration", "Role-based permissions", "Activity feeds"]
    },
    {
      icon: <Zap className="icon" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with instant updates and smooth interactions across all your devices.",
      benefits: ["Sub-second load times", "Offline sync", "Instant notifications", "Optimized performance"]
    },
    {
      icon: <Shield className="icon" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and advanced permission controls.",
      benefits: ["256-bit encryption", "SSO support", "Audit logs", "Compliance ready"]
    },
    {
      icon: <BarChart3 className="icon" />,
      title: "Advanced Analytics",
      description: "Get insights into your team's productivity with detailed reports and performance metrics.",
      benefits: ["Custom dashboards", "Export reports", "Time tracking", "Performance insights"]
    },
    {
      icon: <Calendar className="icon" />,
      title: "Smart Scheduling",
      description: "Intelligent task scheduling with deadline tracking and automated reminders for better time management.",
      benefits: ["Calendar integration", "Smart reminders", "Deadline tracking", "Time blocking"]
    },
    {
      icon: <CheckCircle className="icon" />,
      title: "Task Management",
      description: "Organize tasks with custom labels, due dates, checklists, and attachments for complete project visibility.",
      benefits: ["Custom fields", "File attachments", "Subtasks", "Priority levels"]
    },
    {
      icon: <Globe className="icon" />,
      title: "Global Access",
      description: "Access your work from anywhere in the world with our cloud-based platform and mobile apps.",
      benefits: ["Cloud storage", "Mobile apps", "Cross-platform", "24/7 availability"]
    },
    {
      icon: <Smartphone className="icon" />,
      title: "Mobile First",
      description: "Native mobile apps for iOS and Android with full feature parity and offline capabilities.",
      benefits: ["Native apps", "Offline mode", "Push notifications", "Touch optimized"]
    },
    {
      icon: <Lock className="icon" />,
      title: "Privacy Control",
      description: "Complete control over your data with granular privacy settings and data export options.",
      benefits: ["Data ownership", "Privacy controls", "GDPR compliant", "Data export"]
    },
    {
      icon: <Workflow className="icon" />,
      title: "Automation",
      description: "Automate repetitive tasks with powerful workflow automation and custom triggers.",
      benefits: ["Custom workflows", "Auto-assignments", "Status updates", "Integration triggers"]
    },
    {
      icon: <Bell className="icon" />,
      title: "Smart Notifications",
      description: "Stay informed with intelligent notifications that adapt to your work patterns and preferences.",
      benefits: ["Smart filtering", "Custom schedules", "Multiple channels", "Digest summaries"]
    },
    {
      icon: <FileText className="icon" />,
      title: "Documentation",
      description: "Built-in documentation tools with rich text editing, templates, and collaborative editing.",
      benefits: ["Rich text editor", "Templates", "Version history", "Collaborative editing"]
    }
  ];
  
  const comparisonData = [
      { feature: "Real-time Collaboration", taskflow: true, competitorA: true, competitorB: "Limited" },
      { feature: "Mobile Apps", taskflow: true, competitorA: "Basic", competitorB: true },
      { feature: "Advanced Analytics", taskflow: true, competitorA: "Premium Only", competitorB: "No" },
      { feature: "Automation", taskflow: true, competitorA: "Limited", competitorB: "Enterprise Only" },
      { feature: "Free Plan", taskflow: true, competitorA: "Trial Only", competitorB: "Very Limited" },
  ];

  const renderCell = (value) => {
      if (value === true) {
          return <td className="check-cell"><CheckCircle className="check-icon" /></td>;
      }
      if (typeof value === 'string') {
          return <td className="text-muted">{value}</td>;
      }
      return <td></td>;
  };

  return (
    <>
    <Navbar/>
    <div className="features-page-container">
      {/* Hero Section */}
      <section className="features-hero-section">
        <div className="features-hero-content">
          <h1 className="features-hero-title">
            Powerful Features for
            <span className="features-hero-gradient-text"> Modern Teams</span>
          </h1>
          <p className="features-hero-subtitle">
            Discover all the tools and capabilities that make TaskFlow the perfect choice for teams of all sizes.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="features-grid-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
                <ul className="feature-benefits-list">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="feature-benefit-item">
                      <CheckCircle className="icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="comparison-section">
        <div className="comparison-container">
          <div className="comparison-header">
            <h2>Why Choose TaskFlow?</h2>
            <p>
              See how TaskFlow compares to other project management solutions.
            </p>
          </div>
          
          <div className="comparison-table-wrapper">
            <div className="comparison-table-scroll">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="text-center">TaskFlow</th>
                    <th className="text-center">Competitor A</th>
                    <th className="text-center">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 1 ? 'table-row-alt' : ''}>
                          <td className="feature-name">{row.feature}</td>
                          {renderCell(row.taskflow)}
                          {renderCell(row.competitorA)}
                          {renderCell(row.competitorB)}
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>



    </>
  );
};

export default Features;
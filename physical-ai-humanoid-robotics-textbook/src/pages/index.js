import React, { useState, useEffect } from 'react';
import heroImage from '../img/hero.png'; // Corrected import path: from src/pages/ to src/img/

export default function PhysicalAILanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "AI Fundamentals",
      desc: "Core concepts of Machine Learning and Artificial Intelligence"
    },
    {
      icon: "🤖",
      title: "Humanoid Robotics",
      desc: "Building and designing human-like robots"
    },
    {
      icon: "⚡",
      title: "Physical Intelligence",
      desc: "Applying AI in the real world"
    },
    {
      icon: "🚀",
      title: "Practical Projects",
      desc: "Hands-on projects and experiments"
    }
  ];

  const bonusContent = [
    { title: "Authentication Systems", icon: "🔐", page: "_bonus_auth" },
    { title: "Personalization Techniques", icon: "🎯", page: "_bonus_personalization" },
    { title: "Urdu Content Guide", icon: "📖", page: "_bonus_urdu" }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .landing-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1e 0%, #1a1f3a 50%, #0a0f1e 100%);
          color: white;
          overflow-x: hidden;
          position: relative;
        }

        .bg-element {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: pulse 4s ease-in-out infinite;
          pointer-events: none;
        }

        .bg-element-1 {
          top: 80px;
          left: 40px;
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.3);
        }

        .bg-element-2 {
          bottom: 80px;
          right: 40px;
          width: 400px;
          height: 400px;
          background: rgba(168, 85, 247, 0.3);
          animation-delay: 2s;
        }

        .bg-element-3 {
          top: 50%;
          left: 50%;
          width: 250px;
          height: 250px;
          background: rgba(6, 182, 212, 0.2);
          animation-delay: 1s;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          padding: 60px 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 90vh;
        }

        .hero-content {
          padding-right: 40px;
        }

        .hero-image-container {
          position: relative;
          animation: float 6s ease-in-out infinite;
        }

        .hero-image {
          width: 80%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.3);
          border: 2px solid rgba(59, 130, 246, 0.2);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          padding: 8px 24px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          font-size: 14px;
          color: #93c5fd;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 5s ease infinite;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #bfdbfe;
          margin-bottom: 16px;
          font-weight: 300;
        }

        .description {
          font-size: 1.125rem;
          color: #9ca3af;
          margin-bottom: 32px;
          line-height: 1.8;
        }

        .button-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(90deg, #2563eb, #9333ea);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1.125rem;
          font-weight: 600;
          border: 2px solid rgba(59, 130, 246, 0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          text-decoration: none;
        }

        .btn-secondary:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: #60a5fa;
        }

        .features-section {
          padding: 80px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 64px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px 24px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
        }

        .feature-card:nth-child(2) { animation-delay: 0.1s; }
        .feature-card:nth-child(3) { animation-delay: 0.2s; }
        .feature-card:nth-child(4) { animation-delay: 0.3s; }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          display: block;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: white;
        }

        .feature-desc {
          color: #9ca3af;
        }

        .bonus-section {
          padding: 80px 0;
        }

        .bonus-container {
          background: linear-gradient(135deg, rgba(88, 28, 135, 0.3), rgba(30, 58, 138, 0.3));
          backdrop-filter: blur(30px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 24px;
          padding: 64px 48px;
        }

        .bonus-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .bonus-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .bonus-subtitle {
          color: #d1d5db;
        }

        .bonus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .bonus-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 32px 24px;
          text-decoration: none;
          color: white;
          display: block;
          transition: all 0.3s ease;
        }

        .bonus-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(168, 85, 247, 0.5);
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(168, 85, 247, 0.2);
        }

        .bonus-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          display: block;
          transition: transform 0.3s ease;
        }

        .bonus-card:hover .bonus-icon {
          transform: scale(1.25);
        }

        .bonus-card-title {
          font-size: 1.125rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .bonus-card:hover .bonus-card-title {
          color: #c084fc;
        }

        .cta-section {
          padding: 80px 0;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 24px;
          background: linear-gradient(90deg, #22d3ee, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 32px;
        }

        .btn-cta {
          background: linear-gradient(90deg, #0891b2, #2563eb);
          color: white;
          padding: 20px 48px;
          border-radius: 50px;
          font-size: 1.25rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 15px 40px rgba(34, 211, 238, 0.3);
          text-decoration: none;
        }

        .btn-cta:hover {
          transform: scale(1.1);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.5);
        }

        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 40px;
            min-height: auto;
            padding: 40px 0 60px;
          }

          .hero-content {
            padding-right: 0;
            text-align: center;
          }

          .button-group {
            justify-content: center;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .hero-image-container {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1.25rem;
          }
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary, .btn-cta {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .bonus-container {
            padding: 32px 24px;
          }
        }
      `}</style>

      <div className="landing-page">
        {/* Animated Background Elements */}
        <div className="bg-element bg-element-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="bg-element bg-element-2" style={{ transform: `translateY(${-scrollY * 0.2}px)` }} />
        <div className="bg-element bg-element-3" />

        {/* Hero Section */}
        <div className="container">
          <div className="hero-section">
            <div className="hero-content">
              <div className="badge">
                <span style={{ fontSize: '16px' }}>✨</span>
                <span className="badge-text">Pakistan's First Urdu AI Book</span>
              </div>
              
              <h1 className="main-title">
                Physical AI & Humanoid Robotics
              </h1>
              
              <p className="subtitle">
                Understand the Technology of Tomorrow
              </p>
              
              <p className="description">
                Explore the cutting-edge world of Physical AI and learn how to build intelligent humanoid robots. Master the fundamentals of AI, robotics, and physical intelligence through comprehensive lessons and hands-on projects.
              </p>
              
              <div className="button-group">
                <a href="/physical-ai-humanoid-robotics-textbook/docs/Intro" className="btn-primary">
                  <span>📚</span>
                  Start Learning
                  <span>→</span>
                </a>
                
                <a href="https://www.codenzers.com/" className="btn-secondary " target="_blank" rel="noopener noreferrer">
                  <span>🚀</span>
                  Explore Codenzers
                  
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <img 
                src={heroImage} 
                alt="Physical AI and Humanoid Robotics" 
                className="hero-image"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        {/* <div className="features-section">
          <div className="container">
            <h2 className="section-title">What You'll Learn</h2>
            
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bonus Content Section */}
        {/* <div className="bonus-section">
          <div className="container">
            <div className="bonus-container">
              <div className="bonus-header">
                <h2 className="bonus-title">
                  <span>✨</span>
                  Bonus Content
                  <span>✨</span>
                </h2>
                <p className="bonus-subtitle">اضافی مواد اور خصوصی وسائل</p>
              </div>
              
              <div className="bonus-grid">
                {bonusContent.map((bonus, idx) => (
                  <a
                    key={idx}
                    href={`/${bonus.page}`}
                    className="bonus-card"
                  >
                    <span className="bonus-icon">{bonus.icon}</span>
                    <h3 className="bonus-card-title">{bonus.title}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Learn?
              </h2>
              <p className="cta-description">
                Start your journey into the future of AI and robotics today
              </p>
              <a href="/physical-ai-humanoid-robotics-textbook/docs/" className="btn-cta">
                <span>🧠</span>
                Access Full Book
                <span>→</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
import React from 'react';
import { Leaf, Users, Heart, Award, TreePine, Recycle } from 'lucide-react';
import "../css/about.css";

export default function About() {
  const values = [
    { icon: <Leaf />, title: "Environmental Protection", description: "We are committed to preserving natural ecosystems and reducing our carbon footprint through innovative sustainable practices." },
    { icon: <Users />, title: "Community Support", description: "Our tours directly benefit local communities, providing fair employment and supporting indigenous cultures and traditions." },
    { icon: <Heart />, title: "Responsible Tourism", description: "We believe in travel that enriches both visitors and destinations, creating positive impacts that last beyond the journey." }
  ];

  const achievements = [
    { number: '50+', label: 'Eco Destinations' },
    { number: '10K+', label: 'Happy Travelers' },
    { number: '100%', label: 'Carbon Neutral' },
    { number: '25+', label: 'Awards Won' }
  ];

  const team = [
    { name: 'YOGESH', role: 'Founder & CEO', image: "./IMG-20250329-WA0002.jpg", description: 'Environmental scientist turned travel entrepreneur' },
    { name: 'SUREESH', role: 'Head of Operations', image: 'h', description: 'Adventure guide with 15+ years of experience' },
    { name: 'SURYA', role: 'Sustainability Director', image: '', description: 'Conservation expert and community advocate' }
  ];

  const certifications = [
    { icon: <Award />, title: 'Green Tourism' },
    { icon: <TreePine />, title: 'Forest Stewardship' },
    { icon: <Recycle />, title: 'Zero Waste' },
    { icon: <Leaf />, title: 'Carbon Neutral' }
  ];

  return (
    <div className="about-page">
      <div className="container">

        
        <div className="section-text">
          
          <h2 className="heading-large">About EcoTravel</h2>
          <p className="text-gray">
            We're passionate about creating transformative travel experiences that protect our planet while connecting you with the world's most beautiful destinations.
          </p>
        </div>

        
        <div className="card section mission-card">
          <div className="mission-content">
            <h2 className="heading-xl">Our Mission</h2>
            <p className="text-lg">
              Founded in 2018, EcoTravel emerged from a simple belief: travel should enrich both the traveler and the world around them. We're dedicated to proving that adventure and environmental responsibility can go hand in hand.
            </p>
            <p className="text-lg">
              Every journey we curate is designed to minimize environmental impact while maximizing cultural exchange and natural wonder. We partner with local communities, support conservation efforts, and ensure that tourism becomes a force for positive change.
            </p>
          </div>
          <div className="mission-image-container">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-art-1080p-2k-4k-5k-hd-wallpapers-free-download-background-image_16123072.jpg" alt="EcoTravel" className="mission-image" />
          </div>
        </div>


       
        <div className="section text-center">
          <h2 className="heading-xl">Core Values</h2>
          <p>The principles that guide every adventure we create</p>
          <div className="grid grid-3">
            {values.map((v, idx) => (
              <div key={idx} className="card">
                <div className="icon">
                  {React.cloneElement(v.icon, { size: 64 })}
                </div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="section achievements">
          <h2 className="heading-xl text-center">Our Impact</h2>
          <p className="heading-l text-center">Numbers that reflect our commitment to sustainable travel</p>
          <div className="grid grid-4">
            {achievements.map((a, idx) => (
              <div key={idx} className="achievement-card">
                <h3>{a.number}</h3>
                <p>{a.label}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="section text-center">
          <h2 className="heading-xl">Meet Our Team</h2>
          <div className="grid grid-3">
            {team.map((member, idx) => (
              <div key={idx} className="card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="text-emerald">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>

     
        <div className="section text-center">
          <h2 className="heading-xl">Our Certifications</h2>
          <div className="grid grid-4">
            {certifications.map((c, idx) => (
              <div key={idx} className="card">
                <div className="icon">
                  {React.cloneElement(c.icon, { size: 64 })}
                </div>
                <h3>{c.title}</h3>
                <p>certified</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

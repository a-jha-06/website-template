import React from 'react';
import './Skills.css'; // Optional for extra styling

function Skills() {
    const skills = [
        { name: 'Product1', icon: '📚' },
        { name: 'Product2', icon: '📷' },
        { name: 'Product3', icon: '💻' },
        { name: 'Product4', icon: '🎨' },
        { name: 'Product5', icon: '📚' },
        { name: 'Product6', icon: '📷' },
        { name: 'Product7', icon: '💻' },
        { name: 'Product8', icon: '🎨' },

    ];

    return (
        <div className='container'>
            <section className="skills-section">
                <h2 className='header'>Explore our Products</h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    );
}

export default Skills;

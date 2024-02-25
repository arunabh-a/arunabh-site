import React from 'react'

const About = () => {
    return (
        <div id="about">
                <div className="section-header ">
                <span className="section-title">About Me</span>
                </div>
                <div className="about-content">
                <div className="about-description">
                {[one]}
                {"Here are some technologies I have been working with:"}
                <ul className="tech-stack">
                    {tech_stack.map(function (tech_item, i) {
                        return (
                        <FadeInSection delay={`${i + 1}00ms`}>
                            <li>{tech_item}</li>
                        </FadeInSection>
                        );
                    })}
                </ul>
                    {[two]}
                </div>
                <div className="about-image">
                    <img src={"/assets/me2.jpg"} />
                </div>
                </div>
        </div>
        );
}

export default About
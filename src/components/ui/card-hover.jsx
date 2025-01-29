"use client";
import { useState } from "react";
import "./style.css";
// import github from '../../../github-fill.svg';

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={`grid-container ${className}`}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="card-container"
        >
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        <img src={github} alt="github" className="github" />
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={`card-title ${className}`}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={`card-description ${className}`}>
      {children}
    </p>
  );
};

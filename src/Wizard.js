import React from "react";
import { useState } from "react";
import './Wizard.css'

const Wizard = () => {
  
  const [activeStep, setActiveIndex] = useState(0);
  const steps = [
    {
      index: 0,
      label: "Initial Information",
    },
    {
      index: 1,
      label: "Party Information",
    },
    {
      index: 2,
      label: "Logistics",
    },
    {
      index: 3,
      label: "Additional Information",
    },
  ];


  return (
    <div className="container">
      <ul className="progress-indicator">
        {steps.map((step) => (
          <li
            key={step.index}
            className={`
              progress-step
              ${activeStep === step.index ? "active" : "inactive"}
              ${activeStep > step.index ? "complete" : "incomplete"}
            `}
          >
            <span className="step-number">{step.index + 1}</span>
            <h3 className="w-80 break-words ">{step.label}</h3>
          </li>
        ))}
      </ul>
      <div className="actions">
        {activeStep > 0 && (
          <button
            onClick={() => setActiveIndex(activeStep - 1)}
            className="progress-button prev"
          >
            Previous Step
          </button>
        )}
        {activeStep < steps.length - 1 && (
          <button
            onClick={() => setActiveIndex(activeStep + 1)}
            className="progress-button next"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );

};

export default Wizard;

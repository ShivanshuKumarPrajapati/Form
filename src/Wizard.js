import React from "react";
import { useContext } from "react";
import { Info } from "./utils/Store";
import './Wizard.css'

const Wizard = () => {
  
  const { state, dispatch } = useContext(Info);

  const activeStep = state.currStep;
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
    <div className=" px-auto mb-8">
      <ul className="progress-indicator flex flex-wrap justify-content">
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
            <h3 className="min-w-80 flex flex-wrap label">{step.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Wizard;

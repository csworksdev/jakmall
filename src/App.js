import React, { useState } from "react";
import Stepper from "./components/Stepper";
import styled from "styled-components";
import { useStepper } from "./context";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import { useForm } from "react-hook-form";
import InputContext from "./context/inputContext";

function App() {
  //   const { incrementCurrentStep, decrementCurrentStep } = useStepper();
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({});
  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Wrapper>
      {/* <InputContext.Provider value={{ formData, setFormData }}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stepper>
            <Stepper.Steps>
              <Stepper.Step id="first" name="Delivery">
                <StepBody>
                  <StepOne />
                </StepBody>
              </Stepper.Step>
              <Stepper.Step id="second" name="Payment">
                <StepBody>
                  <StepTwo />
                  {/* <p>
                Ad alias debitis dolore, doloribus ducimus, eaque illum ipsum
                laboriosam libero magnam.
              </p>
              <div>
                <Button onClick={decrementCurrentStep}>Previous step</Button>
                <Button onClick={incrementCurrentStep}>Next step</Button>
              </div>{" "} */}
                </StepBody>
              </Stepper.Step>
              <Stepper.Step id="third" name="Finish">
                <StepBody>
                  <StepThree />
                </StepBody>
              </Stepper.Step>
            </Stepper.Steps>
          </Stepper>
        </form>
      {/* </InputContext.Provider> */}
    </Wrapper>
  );
}

const StepBody = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 20px;
  cursor: pointer;
  outline: none;
  background: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

export default App;

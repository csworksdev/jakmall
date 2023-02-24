import React, { useContext } from "react";
import { useStepper } from "../context";
import InputContext from "../context/inputContext";
import { Layout, PrevPage, Wrapper } from "./layout";
import { Title } from "./text";

function generateRandomAlphaNumeric(length) {
  const alphanumeric = "23456789abcdefghjkmnpqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphanumeric.charAt(
      Math.floor(Math.random() * alphanumeric.length)
    );
  }
  return result.toUpperCase();
}

const StepThree = () => {
  const { decrementCurrentStep } = useStepper();
  const randomString = generateRandomAlphaNumeric(5);
  const { register } = useContext(InputContext);
  console.log(register);
  return (
    <Wrapper>
      <Layout>
        <div className="left">
          <Title>Thank you</Title>
          <PrevPage onClick={decrementCurrentStep}>
            <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-left.png" />
            <span>Back to Cart</span>
          </PrevPage>
          <p>Order ID : {randomString}</p>
        </div>
        <div className="right"></div>
      </Layout>
    </Wrapper>
  );
};

export default StepThree;

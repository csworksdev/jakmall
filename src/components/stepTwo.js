import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useStepper } from "../context";
import { Button } from "./button";
import {
  Layout,
  PrevPage,
  SummaryBottom,
  SummaryBottomText,
  SummaryTop,
  Wrapper,
} from "./layout";
import { Title, TitleSummary } from "./text";
import InputContext from "../context/inputContext";
import { Radio, RadioImage, RadioText } from "./input";
import { useForm } from "react-hook-form";

const StepTwo = () => {
  const { incrementCurrentStep, decrementCurrentStep } = useStepper();
  
  const [selectedShipment, setSelectedShipment] = useState("");
  const handleChangeShipment = (name) => {
    setSelectedShipment(name);
  };
  const [selectedPayment, setSelectedPayment] = useState("");
  const handleChangePayment = (name) => {
    setSelectedPayment(name);
  };
  const { register } = useForm();
  
  return (
    <Wrapper>
      {/* <div>{register}</div> */}
      <Layout>
        <div className="left">
          <PrevPage onClick={decrementCurrentStep}>
            <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-left.png" />
            <span>Back to Cart</span>
          </PrevPage>
          {/* shipment */}
          <div className="left-title">
            <Title>Shipment</Title>
          </div>
          <GridContainer>
            <Radio
              $selected={selectedShipment === "GO-SEND"}
              onClick={() => handleChangeShipment("GO-SEND")}
              {...register("GO-SEND")}
              // {...register("15000")}
            >
              <RadioText>
                <span>GO-SEND</span>
                <span>15,000</span>
              </RadioText>
              <RadioImage $selected={selectedShipment === "GO-SEND"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
            <Radio
              $selected={selectedShipment === "JNE"}
              onClick={() => handleChangeShipment("JNE")}
              {...register("JNE")}
              // {...register("9000")}
            >
              <RadioText>
                <span>JNE</span>
                <span>9,000</span>
              </RadioText>
              <RadioImage $selected={selectedShipment === "JNE"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
            <Radio
              $selected={selectedShipment === "Personal"}
              onClick={() => handleChangeShipment("Personal")}
              {...register("Personal Courier")}
              // {...register("29000")}
            >
              <RadioText>
                <span>Personal Courier</span>
                <span>29,000</span>
              </RadioText>
              <RadioImage $selected={selectedShipment === "Personal"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
          </GridContainer>
          {/* payment */}
          <div className="left-title">
            <Title>Payment</Title>
          </div>
          <GridContainer>
            <Radio
              $selected={selectedPayment === "E-Wallet"}
              onClick={() => handleChangePayment("E-Wallet")}
              {...register("E-Wallet")}
            >
              <RadioText>
                <span>E-Wallet</span>
                <span>15,000,000 Left</span>
              </RadioText>
              <RadioImage $selected={selectedPayment === "E-Wallet"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
            <Radio
              $selected={selectedPayment === "Bank Transfer"}
              onClick={() => handleChangePayment("Bank Transfer")}
              {...register("Bank Transfer")}
            >
              <RadioText>
                <span>Bank Transfer</span>
              </RadioText>
              <RadioImage $selected={selectedPayment === "Bank Transfer"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
            <Radio
              $selected={selectedPayment === "Virtual Account"}
              onClick={() => handleChangePayment("Virtual Account")}
              {...register("Virtual Account")}
            >
              <RadioText>
                <span>Virtual Account</span>
              </RadioText>
              <RadioImage $selected={selectedPayment === "Virtual Account"}>
                <img src="https://img.icons8.com/ios-glyphs/30/null/checkmark--v1.png" />
              </RadioImage>
            </Radio>
          </GridContainer>
        </div>
        <div className="right">
          <SummaryTop>
            <TitleSummary>Summary</TitleSummary>
            <span>10 item purchased</span>
          </SummaryTop>
          <SummaryBottom>
            <SummaryBottomText>
              <span>Cost of goods</span>
              <b>500.000</b>
            </SummaryBottomText>
            <SummaryBottomText>
              <span>Dropshipping Fee</span>
              <b>5.900</b>
            </SummaryBottomText>
            <SummaryBottomText>
              <TitleSummary>Total</TitleSummary>
              <TitleSummary>559.000</TitleSummary>
            </SummaryBottomText>

            <Button type="submit" onClick={incrementCurrentStep}>
              <b>Pay with {selectedPayment}</b>
            </Button>
          </SummaryBottom>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default StepTwo;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #eee;
  //   padding: 1rem;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

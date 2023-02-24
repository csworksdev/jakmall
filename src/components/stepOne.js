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
import { CheckBox, Input, Label } from "./input";
import { useForm } from "react-hook-form";

const StepOne = () => {
  const { incrementCurrentStep } = useStepper();
  const { register } = useForm();

  const [dropShip, setDropship] = useState(false);
  const handleChangeDropship = (event) => {
    setDropship(!dropShip);
  };

  const CostofGoods = 500000;
  const DropshipFee = 5900;

  return (
    <Wrapper>
      <Layout>
        <div className="left">
          <PrevPage>
            <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-left.png" />
            <span>Back to Cart</span>
          </PrevPage>
          <div className="left-title">
            <Title>Delivery Details</Title>
            <Label>
              <CheckBox onChange={handleChangeDropship} />
              <span>Send as Dropshipper</span>
            </Label>
          </div>
          <GridContainer>
            <GridItem>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                {...register("Email")}
              />
            </GridItem>
            <GridItem>
              <Input
                type="text"
                id="DropshipName"
                placeholder="Dropship Name"
                {...register("DropshipName")}
                disabled={!dropShip}
              />
            </GridItem>
            <GridItem>
              <Input
                type="phone"
                id="Phone"
                min={6}
                max={20}
                placeholder="Phone"
                {...register("Phone")}
              />
            </GridItem>
            <GridItem>
              <Input
                type="phone"
                id="DropshipPhone"
                min={6}
                max={20}
                placeholder="Dropship Phone"
                {...register("DropshipPhone")}
                disabled={!dropShip}
              />
            </GridItem>
            <GridItem>
              <Input
                type="textArea"
                id="DeliveryAddress"
                placeholder="Delivery Address"
                {...register("DeliveryAddress")}
              />
            </GridItem>
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
            <SummaryBottomText $dropShip={dropShip}>
              <span>Dropshipping Fee</span>
              <b>5.900</b>
            </SummaryBottomText>
            <SummaryBottomText>
              <TitleSummary>Total</TitleSummary>
              <TitleSummary>
                {(dropShip
                  ? CostofGoods + DropshipFee
                  : CostofGoods
                ).toLocaleString("id-ID")}
              </TitleSummary>
            </SummaryBottomText>
            <Button onClick={incrementCurrentStep}>
              <b>Continue to Payment</b>
            </Button>
          </SummaryBottom>
        </div>
      </Layout>
    </Wrapper>
  );
};

export default StepOne;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #eee;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

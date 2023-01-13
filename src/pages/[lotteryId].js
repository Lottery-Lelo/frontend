import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  padding: 4vh;
  font-family: "Montserrat", sans-serif;
`;
const Container1 = styled.div`
  height: 100vh;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-right: 2rem;
`;
const Container2 = styled.div`
  height: 100vh;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`;
const Heading = styled.div`
  color: #fcff80;
  font-size: 3rem;
  font-family: "Bebas Neue";
`;
const SmallHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const List = styled.div`
  height: 50vh;
  width: 100%;
  overflow-y: scroll;
  padding: 0 4vh 0 2vh;
`;
const SmallHeading1 = styled.div`
  color: #fcff80;
  margin-bottom: 5vh;
  font-size: 1.5rem;
`;
const Input1 = styled.input`
  height: 7vh;
  width: 100%;
  background-color: #0f0f0f;
  border: 0;
  border-radius: 5px;
  padding: 3%;
  font-size: 1rem;
`;
const Input2 = styled.input`
  height: 7vh;
  width: 100%;
  background-color: #0f0f0f;
  border: 0;
  border-radius: 5px;
  padding: 3%;
  font-size: 1rem;
`;
const SubmitButton = styled.button`
  background-color: #fcff80;
  height: 6vh;
  width: 80%;
  color: black;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
`;
const SubmitButton1 = styled.button`
  background-color: transparent;
  border: 1px solid #fcff80;
  height: 6vh;
  width: 80%;
  color: black;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
`;
const Helper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  height: 13vh;
  margin-bottom: 5vh;
`;
const Label = styled.label`
  font-size: 1.2rem;
  color: white;
`;

const Element = styled.div`
  height: 7vh;
  width: 100%;
  background-color: #0f0f0f;
  border: 0;
  border-radius: 5px;
  padding: 3%;
  font-size: 1rem;
  margin-bottom: 3vh;
`;

const Heading4 = styled.h2`
    color: #fcff80;
`;
const Heading5 = styled.h2``;
const Lottery = () => {
  const router = useRouter();
  const { lotteryId } = router.query;
  const style = {
    "margin-right": "2rem",
  };

  return (
    <Container>
      <Container1>
        <Heading>Lottery LeLo</Heading>
        <SmallHeading>
          <Image
            src={"/btn.svg"}
            alt="btn"
            height={40}
            width={40}
            style={style}
          />
          <Heading4>{lotteryId}</Heading4>
        </SmallHeading>
        <Helper>
          <Label>Guess the number</Label>
          <Input1 placeholder="Enter the number" />
        </Helper>
        <SubmitButton>Submit</SubmitButton>
        <SubmitButton1>Go back</SubmitButton1>
        <Heading5>Sorry mate seem like the number is greater!</Heading5>
      </Container1>
      <Container2>
        <SmallHeading1>Make your own lottery</SmallHeading1>
        <Helper>
          <Label>Guess the number</Label>
          <Input1 placeholder="Enter the number" />
        </Helper>
        <SubmitButton>Submit</SubmitButton>
        <Helper>
          <Label>Entry Fee</Label>
          <Input2 placeholder="Enter the fee" />
        </Helper>
        <SubmitButton>Submit</SubmitButton>
      </Container2>
    </Container>
  );
};

export default Lottery;

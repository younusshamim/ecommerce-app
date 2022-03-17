import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 65vh;
  position: relative;
`;
const ImgLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #00000045;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;

  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-shadow: -1px -1px 0 #2e2e2e, 1px -1px 0 #2e2e2e, -1px 1px 0 #2e2e2e,
    1px 1px 0 #2e2e2e;

  ${mobile({ fontSize: "30px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImgLayer></ImgLayer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

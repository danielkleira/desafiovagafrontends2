import { Container } from "./style";
import FormRequest from "../Form";
import Return from "../Return";

const Body = () => {
  return (
    <Container>
      <div className="center">
        <FormRequest />
        <Return />
      </div>
    </Container>
  );
};

export default Body;

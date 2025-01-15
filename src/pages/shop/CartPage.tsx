import {
  Container,
  Space,
  Text
} from "@mantine/core";
import { MyCart } from "../../features/shop/home/ui/MyCart";

export default function CartPage() {


  return (
    <>

      <Space h="50px" />

      <Container size="xl">
        <Text size="40px" fw={600} >
          My Cart
        </Text>
      <Space h="30px" />
        <MyCart />
      </Container>
      
      <Space h="50px" />

    </>
  );
}

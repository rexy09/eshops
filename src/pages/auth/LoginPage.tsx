import { Center, Image, Space, Text } from "@mantine/core";
import LoginForm from "../../features/auth/ui/LoginForm";
import eshop_logo from "../../assets/eshop_logo.png";

export default function LoginPage() {
  return (
    <div>

      <Center maw={"100%"} h={"100vh"} >
        <div className="w-[480px]">
          <Image
            w={155}
            src={eshop_logo}
          />
          <Text size="56px" fw={600} style={{ lineHeight: "67.2px", letterSpacing:"-2px"}}>Sign in to access </Text>
          <Text size="56px" style={{ fontFamily: "Playfair Display", lineHeight: "67.2px", letterSpacing: "-2px" }}>your account</Text>
          <Space h="50" />
          <LoginForm />
        </div>
      </Center>

    </div>
  );
}

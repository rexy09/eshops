import { Text } from "@mantine/core";
import Color from "../../../theme";

type Props = {
  text: string;
};

function FooterHeading({text}:Props) {
    return (
      <Text
        style={{
          color: Color.PrimaryYellow,
          fontSize: "18px",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {text}
      </Text>
    );
}

export default FooterHeading;
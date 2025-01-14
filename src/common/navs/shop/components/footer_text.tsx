import { Text } from "@mantine/core";
import { Link } from "react-router";

type Props = {
  text: string;
  url?: string;
};

function FooterText({ text, url }: Props) {
  return (
    <>
      {url ? (
        <Link to={url ?? "/"} style={{ textDecoration: "none" }}>
          <Text
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            {text}
          </Text>
        </Link>
      ) : (
          <Text
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            {text}
          </Text>
      )}
    </>
  );
}

export default FooterText;
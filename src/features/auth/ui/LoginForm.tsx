import {
  Anchor,
  Button,
  Group,
  PasswordInput,
  Space,
  TextInput, Text,
  Checkbox
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router";
import { UserCredentials } from "../types";
import Color from "../../../common/theme";
import useLoginServices from "../services";
import { notifications } from '@mantine/notifications';

function LoginForm() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { submitted, setSubmitted } = useLoginServices();

  const form = useForm<UserCredentials>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: isNotEmpty("Phone Number required"),
      password: isNotEmpty("Password required"),
    },
  });

  const setValues = () => {
    const values = {
      username: "",
      password: "",
    };
    form.setValues(values);
    form.resetDirty(values);
  };

  const login = async () => {
    setSubmitted(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (form.values.username == "0787654321" && form.values.password == "0787654321") {

      if (
        signIn({
          auth: {
            token: 'ey....mA',
            type: 'Bearer'
          },
          userState: {
            full_name: "User",
            manage_users: form.values.username,
          },
        })
      ) {

        navigate("/dashboard");
      } else {
        notifications.show({
          color: 'red',
          title: 'Unauthorized',
          message: 'Invalid credentials',
        })
      }
    }
    else {
      notifications.show({
        color: 'red',
        title: 'Unauthorized',
        message: 'Invalid credentials',
      })
    }
    setSubmitted(false);

  };



  useEffect(() => {
    setValues();
  }, []);

  return (
    <>
      <form
        onSubmit={form.onSubmit(() => {
          login();
        })}
      >
        <Text c={Color.TextTertiary} size="16px" fw={400} style={{ lineHeight: "24px" }}>Phone Number </Text>
        <Space h="xs" />
        <TextInput
          placeholder="Enter your Phone Number eg. 0787654321"
          radius={"md"}
          size="md"
          variant="filled"
          {...form.getInputProps("username")}
        />
        <Space h="md" />
        <Text c={Color.TextTertiary} size="16px" fw={400} style={{ lineHeight: "24px" }}>Password</Text>
        <Space h="xs" />

        <PasswordInput
          placeholder="Enter your password"
          radius={"md"}
          size="md"
          variant="filled"

          {...form.getInputProps("password")}
        />
        <Space h="xl" />

        <Group justify="space-between" gap={2}>
          <Checkbox
            defaultChecked
            label="Remember Password"
          />
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => {
              navigate("/forgot_password");
            }}
            size="xs"
          >
            <Text size="12px" fw={500} c={Color.PrimaryYellow}>
              Forgot password
            </Text>
          </Anchor>
        </Group>
        <Space h="xl" />


        <Group>
          <Button
            radius="md"
            size="lg"
            fullWidth
            style={{ backgroundColor: Color.PrimaryBlue }}
            disabled={submitted}
            loading={submitted}
            type="submit"
          >
            Login
          </Button>
        </Group>

        <Space h="md" />
      </form>
    </>
  );
}

export default LoginForm;

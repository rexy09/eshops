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
import { ISignupUserForm } from "../types";
import Color from "../../../common/theme";
import useLoginServices from "../services";
import { notifications } from '@mantine/notifications';

function SignUpForm() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { submitted, setSubmitted } = useLoginServices();

  const form = useForm<ISignupUserForm>({
    initialValues: {
      full_name: "",
      username: "",
      password: "",
    },
    validate: {
      full_name: isNotEmpty("Full Name required"),
      username: isNotEmpty("Phone Number required"),
      password: isNotEmpty("Password required"),
    },
  });

  const setValues = () => {
    const values = {
      full_name: "",
      username: "",
      password: "",
    };
    form.setValues(values);
    form.resetDirty(values);
  };

  const login = async () => {
    setSubmitted(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

      if (
        form.values)
      {
        notifications.show({
          title: 'Sign Up successful',
          message: 'You have successfully signed up',
        })
        navigate("/login");
      } else {
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
        <Text c={Color.TextTertiary} size="16px" fw={400} style={{ lineHeight: "24px" }}>Full Name </Text>
        <Space h="xs" />
        <TextInput
          placeholder="Enter your Full Name"
          radius={"md"}
          size="md"
          variant="filled"
          {...form.getInputProps("username")}
        />
        <Space h="md" />
        <Text c={Color.TextTertiary} size="16px" fw={400} style={{ lineHeight: "24px" }}>Phone Number </Text>
        <Space h="xs" />
        <TextInput
          placeholder="Enter your Phone Number"
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
          <Text size="12px" fw={500}>Already have an Account?
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => {
              navigate("/login");
            }}
            size="xs"
          >
            <Text ps={'2px'}  size="12px" fw={500} c={Color.PrimaryBlue}> Login</Text>
          </Anchor>
          </Text>
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

export default SignUpForm;

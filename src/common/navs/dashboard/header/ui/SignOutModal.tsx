import {
  Button,
  Flex,
  Modal,
  rem,
  Space,
  Text,
  Tooltip,
  UnstyledButton
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout } from '@tabler/icons-react';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from 'react-router';
import Color from '../../../../theme';



export default function SignOutModal() {
  const [opened, { open, close }] = useDisclosure(false);

   const signOut = useSignOut();
   const navigate = useNavigate();

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <Text c="grey" fw={500} ta="center">
          Are you sure you want to sign out?
        </Text>

        <Space h={"md"} />
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Button
            color={"red"}
            onClick={() => {
              close();
              signOut();
              navigate("/login", { replace: true });
            }}
            variant="subtle"
          >
            Sign out
          </Button>
          <Button
            color="gray"
            onClick={() => {
              close();
            }}
            variant="light"
          >
            Cancel
          </Button>
        </Flex>
      </Modal>
      <Tooltip
        label={"Sign out"}
        position="top-end"
        transitionProps={{ duration: 0 }}
      >
        <UnstyledButton
          onClick={() => {
            open();
          }}
        >
          <IconLogout
            style={{ width: rem(20), height: rem(20) }}
            stroke={1.5}
            color={ Color.White }
          />
        </UnstyledButton>
      </Tooltip>
    </>
  );
}


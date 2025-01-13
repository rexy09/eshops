import { BackgroundImage, Container, Grid, Group, Space, Stack, Text } from "@mantine/core";
import { Outlet } from "react-router";
import auth_bg from "../../assets/auth_bg.png";

function AuthLayout() {
    
    return (
        <Container fluid style={{ height: "100vh" }} m={0} p={0}>
            <Grid gutter={0} m={0} p={0}>
                <Grid.Col span={6} p={0} visibleFrom="md">
                    <BackgroundImage src={auth_bg} p={0}>

                        <Stack
                            h={"100vh"}

                            align="center"
                            justify="flex-end"
                            gap="0"
                        >
                            <div style={{ width: "611px" }}>

                                <Text size="56px" fw={600} c={"white"} style={{ lineHeight: "67.2px", letterSpacing: "-2px" }}>Please sign in to securely access your account.</Text>
                                <Space h="lg" />
                                <Text size="18px" fw={500} c={"white"} style={{ lineHeight: "24px" }}>Welcome back! We're thrilled to have you return to our platform. Your presence means a lot to us.</Text>
                            <Space h="50px" />
                            <Group>
                                <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor:"#FFFFFF" }}></div>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor:"#CED1D8" }}></div>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor:"#CED1D8" }}></div>
                            </Group>
                            </div>
                            <Space h="50px" />

                        </Stack>
                    </BackgroundImage>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }} px={"md"}>
                    <Outlet />
                </Grid.Col>
                <Grid.Col span={12} p={0} hiddenFrom="md">
                    <BackgroundImage src={auth_bg} p={0}>

                        <Stack
                            h={"100vh"}

                            align="center"
                            justify="flex-end"
                            gap="0"
                            p={"md"}
                        >
                            <div style={{ maxWidth: "611px" }}>

                                <Text size="56px" fw={600} c={"white"} style={{ lineHeight: "67.2px", letterSpacing: "-2px" }}>Please sign in to securely access your account.</Text>
                                <Space h="lg" />
                                <Text size="18px" fw={500} c={"white"} style={{ lineHeight: "24px" }}>Welcome back! We're thrilled to have you return to our platform. Your presence means a lot to us.</Text>
                                <Space h="50px" />
                                <Group>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor: "#FFFFFF" }}></div>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor: "#CED1D8" }}></div>
                                    <div style={{ width: "20px", height: "4px", borderRadius: "100px", backgroundColor: "#CED1D8" }}></div>
                                </Group>
                            </div>
                            <Space h="50px" />

                        </Stack>
                    </BackgroundImage>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export default AuthLayout;

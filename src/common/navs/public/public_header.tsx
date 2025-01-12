// import {
//   Box,
//   Burger,
//   Button,
//   Container,
//   Drawer,
//   Group,
//   Header,
//   Image,
//   MediaQuery,
//   Stack,
//   Text,
//   UnstyledButton,
//   useMantineTheme,
// } from "@mantine/core";
// import { useDisclosure, useMediaQuery } from "@mantine/hooks";
// import { useIsAuthenticated } from "react-auth-kit";
// import { useNavigate } from "react-router-dom";
// import mainLogo from "../../../assets/comms/coat_of_arms.svg";
// import Color from "../../theme";
// import SubscriberRegistrationForm from "../../../features/public/subscriber/ui/subscriber_form";

// export default function PublicHeader() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const theme = useMantineTheme();
//   const navigate = useNavigate();
//   const matchesMD = useMediaQuery("(min-width: 	62em)");
//   const matchesSM = useMediaQuery("(min-width: 	48em)");
//   const isAuthenticated = useIsAuthenticated();

//   return (
//     <Box>
//       <Header
//         height={{ base: 95, md: 130 }}
//         style={{ borderBottomWidth: 0, backgroundColor: "transparent" }}
//       >
//         <Container size="xl" p="xl">
//           <Group position="apart">
//             <UnstyledButton onClick={() => navigate("/")}>
//               <Image
//                 maw={matchesSM ? 65 : 40}
//                 src={mainLogo}
//                 alt="logo image"
//               />
//             </UnstyledButton>
//             <Group position="center">
//               <div>
//                 <div style={{ textAlign: "center" }}>
//                   <Text
//                     style={{
//                       color: "black",
//                       fontSize: matchesSM ? 22 : 10,
//                       fontFamily: "Roboto Condensed ,sans-serif",
//                       fontWeight: "700",
//                       letterSpacing: 0.17,
//                       wordWrap: "break-word",
//                     }}
//                   >
//                     The United Republic of Tanzania, Ministry of Health (MoH)
//                   </Text>
//                   <Text
//                     style={{
//                       color: "black",
//                       fontSize: matchesSM ? 22 : 10,
//                       fontFamily: "Roboto Condensed ,sans-serif",
//                       fontWeight: "700",
//                       letterSpacing: 0.17,
//                       wordWrap: "break-word",
//                     }}
//                   >
//                     Social Behavior Change Repository
//                   </Text>
//                 </div>
//               </div>
//             </Group>

//             {matchesMD ? (
//               <Group>
//                 <SubscriberRegistrationForm />
//                 {isAuthenticated() ? (
//                   <Button
//                     style={{ backgroundColor: Color.mohDark }}
//                     radius="xl"
//                     onClick={() => {
//                       navigate("/dashboard");
//                     }}
//                   >
//                     Dashboard
//                   </Button>
//                 ) : (
//                   <Button
//                     style={{ backgroundColor: Color.mohDark }}
//                     radius="xl"
//                     onClick={() => {
//                       navigate("/login");
//                     }}
//                   >
//                     Sign In
//                   </Button>
//                 )}
//               </Group>
//             ) : null}
//             <MediaQuery largerThan="md" styles={{ display: "none" }}>
//               <Burger
//                 opened={opened}
//                 onClick={toggle}
//                 size="sm"
//                 color={theme.colors.gray[6]}
//               />
//             </MediaQuery>
//           </Group>
//         </Container>
//       </Header>
//       <Drawer opened={opened} onClose={toggle} title="">
//         <Stack align="flex-start">
//           <SubscriberRegistrationForm
//             backgroundColor={Color.mohDark}
//             color={Color.mohWhite}
//           />
//           {isAuthenticated() ? (
//             <Button
//               style={{ backgroundColor: Color.mohDark }}
//               radius="xl"
//               onClick={() => {
//                 navigate("/dashboard");
//               }}
//             >
//               Dashboard
//             </Button>
//           ) : (
//             <Button
//               style={{ backgroundColor: Color.mohDark }}
//               radius="xl"
//               onClick={() => {
//                 navigate("/login");
//               }}
//             >
//               Sign In
//             </Button>
//           )}
//         </Stack>
//       </Drawer>
//     </Box>
//   );
// }

// import { Avatar, Flex, Text } from "@mantine/core";
// import { IconMessage2 } from "@tabler/icons-react";
// import moment from "moment";
// import { NotificationType } from "../../../../../features/dashboard/notification/types";
// interface Props {
//   notification: NotificationType;
// }
// export default function NotificactionMenuWidget({ notification }: Props) {
//   return (
//     <div>
//       <Flex
//         p={"5px"}
//         gap="xs"
//         justify="flex-start"
//         align="flex-start"
//         direction="row"
//         wrap="nowrap"
//       >
//         <Avatar color="blue" radius="sm">
//           <IconMessage2 size="1.5rem" />
//         </Avatar>
//         <div>
//           <Text size="sm" tt="capitalize" fw={700} lineClamp={1}>
//             {notification.title}
//           </Text>

//           <Text size="xs" c="dimmed">
//             {moment(notification.created_at).format("DD/MM/YYYY HH:mm:ss")}
//             {/* 10 minutes ago */}
//           </Text>
//         </div>
//       </Flex>
//     </div>
//   );
// }

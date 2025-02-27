import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const successNotification = (message: string, title: string = "Success") => {
  notifications.show({
    title: title, // Explicitly pass a string or use the default value
    message: message,
    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
    color: "green",
    withBorder: true,
    withCloseButton: true,
    className: "!border-green-500",
  });
};

const errorNotification = (message: string, title: string = "Error") => {
  notifications.show({
    title: title, // Explicitly pass a string or use the default value
    message: message,
    icon: <IconX style={{ width: "90%", height: "90%" }} />,
    color: "red",
    withBorder: true,
    withCloseButton: true,
    className: "!border-red-500",
  });
};

export { successNotification, errorNotification };

import { Button, Group, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./LanguagePicker.module.css";

function LanguageMenu() {
  const { i18n } = useTranslation();
  const lngs: { [key: string]: { nativeName: string; image: string } } = {
    en: { nativeName: "English", image: "🇬🇧" },
    sw: { nativeName: "Kiswahili", image: "🇹🇿" },
  };

  const [opened, setOpened] = useState(false);
  const items = Object.keys(lngs).map((lng, index) => (
    <Menu.Item
      leftSection={lngs[lng].image}
      onClick={() => i18n.changeLanguage(lng)}
      key={index}
    >
      {lngs[lng].nativeName}
    </Menu.Item>
  ));
  return (
    <>
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <Button className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            {lngs[i18n.language].image}{" "}
            <span className={classes.label}>
              {lngs[i18n.language].nativeName}
            </span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
    </>
  );
}

export default LanguageMenu;

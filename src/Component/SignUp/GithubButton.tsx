import { Button, ButtonProps } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { useTheme } from '../../ThemeContext';

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  const { isDarkMode } = useTheme();

  return (
    <Button
      leftSection={<IconBrandGithub size={16} color={isDarkMode ? "white" : "black"} />}
      variant="default"
      {...props}
    />
  );
}
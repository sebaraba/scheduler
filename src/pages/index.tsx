import { useState } from 'react';

import AppShell from '../layout/AppShell';

import {
  MantineProvider
} from '@mantine/core';

export default function AppShellDemo() {
  const [opened, setOpened] = useState(false);
  return (
    <MantineProvider>
      <AppShell/>
    </MantineProvider>
  );
}
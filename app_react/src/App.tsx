import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from '@/theme';
import { Header } from '@/components/Header';
import Router from '@/navigation/router';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Router />
    </MantineProvider>
  );
}

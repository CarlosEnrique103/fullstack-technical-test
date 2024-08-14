import { useForm } from '@mantine/form';
import {
  Anchor,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Stack,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import classes from './LoginForm.module.css';
import logo from '../assets/images/logo.svg';

export function LoginForm(props: PaperProps) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val: string) =>
        val.length <= 6 ? 'Password should include at least 6 characters' : null,
    },
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({ values: form.values });
  };

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Group gap={20} flex="column">
        <div className={classes.image}>
          <img src={logo} alt="log" />
        </div>
        <Text size="lg" fw={500}>
          Welcome to <b>Adopt me</b>
        </Text>
      </Group>

      <Divider labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => navigate('/register')}
            size="xs"
          >
            Don&apos;t have an account? Register
          </Anchor>
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

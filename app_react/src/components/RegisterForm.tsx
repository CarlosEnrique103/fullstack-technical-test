import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import classes from './RegisterForm.module.css';
import logo from '../assets/images/logo.svg';

export function RegisterForm(props: PaperProps) {
  const form = useForm({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
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
      <Group gap={10}>
        <div className={classes.image}>
          <img src={logo} alt="log" />
        </div>
        <Text size="lg" fw={500}>
          Welcome to <b>Adopt me</b>
        </Text>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Username"
            placeholder="Your username"
            value={form.values.username}
            onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
            radius="md"
          />

          <TextInput
            required
            label="First name"
            placeholder="Your first name"
            value={form.values.firstName}
            onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
            radius="md"
          />

          <TextInput
            required
            label="Last name"
            placeholder="Your last name"
            value={form.values.lastName}
            onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
            radius="md"
          />

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
            onClick={() => navigate('/login')}
            size="xs"
          >
            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="xl">
            Register
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

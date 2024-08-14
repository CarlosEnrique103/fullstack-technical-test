import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { Link } from 'react-router-dom';

import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/images/logo.svg';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/login', label: 'Inicia sesión' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map(({ link, label }) => (
    <Link
      key={label}
      to={link}
      className={classes.link}
      data-active={active === link || undefined}
      onClick={() => {
        setActive(link);
      }}
    >
      {label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.image}>
          <img src={logo} alt="log" />
        </div>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

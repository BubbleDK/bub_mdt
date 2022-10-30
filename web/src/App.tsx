import {Box, createStyles, Transition, Navbar, Group, Code, Image, Center, Grid} from '@mantine/core';
import {useState} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {useNuiEvent} from './hooks/useNuiEvent';
import Dashboard from './layouts/dashboard';
import Incidents from './layouts/incidents';
import Reports from './layouts/reports';
import Profiles from './layouts/profiles';
import Evidence from './layouts/evidence';
import {
  IconLayoutDashboard,
  IconUserCircle,
  IconScript,
  IconFileDescription,
  IconBriefcase,
  IconLogout,
} from '@tabler/icons';
import LSPDLogo from './assets/lspd.png';
import './App.css';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    pageLayout: {
      backgroundColor: theme.colors.dark[7],
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor})
          .background,
        color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
        },
      },
    },
  };
});


const data = [
  {link: '', label: 'Dashboard', icon: IconLayoutDashboard},
  {link: 'profiles', label: 'Profiles', icon: IconUserCircle},
  {link: 'incidents', label: 'Incidents', icon: IconScript},
  {link: 'reports', label: 'Reports', icon: IconFileDescription},
  {link: 'evidence', label: 'Evidence', icon: IconBriefcase},
];

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [active, setActive] = useState<string>('');
  const {classes, cx} = useStyles();

  const links = data.map((item) => (
    <NavLink
      key={item.label}
      to={`/${item.link}`}
      onClick={() => {
        setActive(item.link);
      }}
      className={cx(classes.link, {[classes.linkActive]: active === item.link})}
    >
      <item.icon className={classes.linkIcon} stroke={1.5}/>
      <span>{item.label}</span>
    </NavLink>
  ));

  useNuiEvent('toggleVisibility', (value: boolean) => setVisible(value))

  return (
    <Box className="container">
      <Transition transition="slide-up" mounted={visible}>
        {(style) => (
          <div className='container'>
            <Grid justify="center">
              <Grid.Col span={2} style={{height: 800, padding: 0}}>
                <Navbar p="md" style={{height: 800,}}>
                  <Navbar.Section grow>
                    <Center>
                      <Image
                        radius={"md"}
                        width={180}
                        height={180}
                        src={LSPDLogo}
                        alt="LSPD Logo"
                      />
                    </Center>
                    <Group className={classes.header} position="apart">
                      <Code sx={{fontWeight: 700}}>John Doe</Code>
                    </Group>
                    {links}
                  </Navbar.Section>

                  <Navbar.Section className={classes.footer}>
                    <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                      <IconLogout className={classes.linkIcon} stroke={1.5}/>
                      <span>Logout</span>
                    </a>
                  </Navbar.Section>
                </Navbar>
              </Grid.Col>
              <Grid.Col span={8} style={{height: 800}} className={classes.pageLayout}>
                <Routes>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/profiles" element={<Profiles/>}/>
                  <Route path="/incidents" element={<Incidents/>}/>
                  <Route path='/reports' element={<Reports/>}/>
                  <Route path='/evidence' element={<Evidence/>}/>
                </Routes>
              </Grid.Col>
            </Grid>
          </div>
        )}
      </Transition>
    </Box>
  )
}

export default App;

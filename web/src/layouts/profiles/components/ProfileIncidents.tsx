import {
  ScrollArea,
  Card, createStyles,
  Group, Menu,
  Text, TypographyStylesProvider,
  UnstyledButton,
  Stack,
  Center
} from '@mantine/core';
import {IconDatabaseOff, IconChevronRight, IconListDetails} from '@tabler/icons';
import {Incidents, Profile} from "../../../types";
import {useEffect} from "react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  comment: {
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
  },

  body: {
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },

  user: {
    display: 'block',
    width: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: '5px',
    paddingRight: '10px',
  },

  item : {
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '10px',
    paddingLeft: '10px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

    '&:hover': {
      backgroundColor: '#17181b',
    },
  }
}));

interface IProps {
  incidents?: Incidents[];
}

const ProfileIncidents: React.FC<IProps> = ({incidents}: IProps) => {
  const { classes, theme } = useStyles();
  const SECONDARY_COL_HEIGHT = 530 / 2 - theme.spacing.md / 2;

  return (
    <div style={{ height: SECONDARY_COL_HEIGHT }}>
      <Card withBorder shadow="sm" radius="xs" style={{height: SECONDARY_COL_HEIGHT}} className={classes.card}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500} style={{marginBottom: 3.5}}>Citizen Incidents</Text>
          </Group>
        </Card.Section>

        <Card.Section mt="sm" inheritPadding>
          <ScrollArea style={{ height: 190 }}>
            {incidents !== undefined && incidents.length > 0 ?
              incidents.sort((a, b) => (a.id > b.id) ? 1 : -1).map((incident) => (
                <Stack spacing="xs">
                  <UnstyledButton className={classes.user}>
                    <Menu withArrow>
                      <Menu.Target>
                        <Group className={classes.item}>
                          <div style={{ flex: 1 }}>
                            <Text size="sm" weight={500}>
                              {incident.title}
                            </Text>

                            <Text color="dimmed" size="xs">
                              ID: {incident.id}
                            </Text>
                          </div>

                          {<IconChevronRight size={14} stroke={1.5} />}
                        </Group>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item icon={<IconListDetails size={14}/>}>View Incident</Menu.Item>

                      </Menu.Dropdown>
                    </Menu>
                  </UnstyledButton>
                </Stack>
              ))
            :
              <div>
                <Center style={{height: 190}}>
                  <Stack spacing="sm" align="center">
                    <IconDatabaseOff size={24} style={{fontSize: 0, borderRadius: '50%', padding: '10px', background: '#2C2E33', color: '#5c5f66'}} color="gray" />
                    <Text style={{color: '#909296', fontSize: '13px', lineHeight: 1.55, }}>
                      No Records found
                    </Text>
                  </Stack >
                </Center>
              </div>
            }
          </ScrollArea>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileIncidents;
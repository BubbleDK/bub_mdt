import {
  Button,
  Card, createStyles,
  Group, Paper,
  Text, TypographyStylesProvider,
  useMantineTheme,
  Stack,
  Center
} from '@mantine/core';
import { IconDatabaseOff } from '@tabler/icons';
import {Incidents, Profile} from "../../../types";

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
          {incidents !== undefined && incidents.length === 1 ? incidents.map((incident) => (
            <Paper>
              {incident.id}
            </Paper>
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
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileIncidents;
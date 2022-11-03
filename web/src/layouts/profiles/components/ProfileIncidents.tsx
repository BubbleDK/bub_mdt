import {
  Card,
  Group,
  Text,
  useMantineTheme
} from '@mantine/core';

const ProfileIncidents: React.FC = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = 530 / 2 - theme.spacing.md / 2;
  return (
    <div style={{ height: SECONDARY_COL_HEIGHT, position: 'relative' }}>
      <Card withBorder shadow="sm" radius="xs" style={{height: SECONDARY_COL_HEIGHT}}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500} style={{marginBottom: 3.5}}>Citizen Incidents</Text>
          </Group>
        </Card.Section>

        <Card.Section mt="sm" inheritPadding>
          Hello
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileIncidents;
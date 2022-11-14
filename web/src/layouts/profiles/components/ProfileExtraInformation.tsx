import {
  Card, createStyles,
  Group,
  Text,
  Grid,
  List, ThemeIcon,
  ScrollArea,
  Divider
} from '@mantine/core';
import {IconCar, IconHomeCheck} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}));

const ProfileExtraInformation: React.FC = () => {
  const { classes, theme } = useStyles();
  const SECONDARY_COL_HEIGHT = 530 / 2 - theme.spacing.md / 2;
  return (
    <div style={{ height: SECONDARY_COL_HEIGHT }}>
      <Card withBorder shadow="sm" radius="xs" style={{height: SECONDARY_COL_HEIGHT}} className={classes.card}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group position="apart">
            <Text weight={500}>Additional Information</Text>
          </Group>
        </Card.Section>

        <Card.Section mt="sm" inheritPadding style={{maxHeight: 200}}>
          <Grid justify="center" grow>
            <Grid.Col span={2} style={{height: 200}}>
              <Text weight={500}>Vehicles</Text>
              <Divider style={{padding: 5}} />
              <ScrollArea style={{ height: 145, padding: 5, }} type="scroll" offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
                <List spacing="xs" size="lg" center icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconCar size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Adder</List.Item>
                  <List.Item>811</List.Item>
                  <List.Item>Ardent</List.Item>
                  <List.Item>Arbiter GT</List.Item>
                  <List.Item>Asbo</List.Item>
                  <List.Item>Astron</List.Item>
                  <List.Item>Astron</List.Item>
                </List>
              </ScrollArea>
            </Grid.Col>
            <Grid.Col span={2} style={{height: 200, paddingBottom: 5}}>
              <Text weight={500}>Properties</Text>
              <Divider style={{padding: 5}} />
              <ScrollArea style={{ height: 145, padding: 5, }} type="scroll" offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
                <List spacing="xs" size="lg" center icon={
                  <ThemeIcon color="orange" size={24} radius="xl">
                    <IconHomeCheck size={16} />
                  </ThemeIcon>
                }
                >
                  <List.Item>Route 68 Sandy 7198</List.Item>
                  <List.Item>South Rockford Drive</List.Item>
                  <List.Item>Paleto Blvd</List.Item>
                  <List.Item>Integrity Way</List.Item>
                  <List.Item>Alta Street Plaza 4119</List.Item>
                  <List.Item>Forum Drive</List.Item>
                  <List.Item>Alta Street Plaza</List.Item>
                </List>
              </ScrollArea>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileExtraInformation;
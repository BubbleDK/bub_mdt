import {
  Card, createStyles,
  Group,
  Text,
  Grid,
  List, ThemeIcon,
  ScrollArea,
  Divider,
  Badge,
  Center,
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
                <Grid gutter="xs">
                  <Grid.Col span="content">
                    <Badge style={{padding: 10}} radius="md" color="blue">
                      <Center>
                        <IconCar size={18} style={{paddingRight: 5}} />
                        Adder
                      </Center>
                    </Badge>
                  </Grid.Col>
                  <Grid.Col span="content">
                    <Badge style={{padding: 10}} radius="md" color="blue">
                      <Center>
                        <IconCar size={18} style={{paddingRight: 5}} />
                        Adder
                      </Center>
                    </Badge>
                  </Grid.Col>
                </Grid>
              </ScrollArea>
            </Grid.Col>
            <Grid.Col span={2} style={{height: 200, paddingBottom: 5}}>
              <Text weight={500}>Properties</Text>
              <Divider style={{padding: 5}} />
              <ScrollArea style={{ height: 145, padding: 5, }} type="scroll" offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
                <Grid gutter="xs">
                  <Grid.Col span="content">
                    <Badge style={{padding: 10}} radius="md" color="teal">
                      <Center>
                        <IconHomeCheck  size={18} style={{paddingRight: 5}} />
                        Alta Street Plaza 4119
                      </Center>
                    </Badge>
                  </Grid.Col>
                  <Grid.Col span="content">
                    <Badge style={{padding: 10}} radius="md" color="teal">
                      <Center>
                        <IconHomeCheck  size={18} style={{paddingRight: 5}} />
                        Alta Street Plaza 4119
                      </Center>
                    </Badge>
                  </Grid.Col>
                  <Grid.Col span="content">
                    <Badge style={{padding: 10}} radius="md" color="teal">
                      <Center>
                        <IconHomeCheck  size={18} style={{paddingRight: 5}} />
                        Alta
                      </Center>
                    </Badge>
                  </Grid.Col>
                </Grid>
              </ScrollArea>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileExtraInformation;
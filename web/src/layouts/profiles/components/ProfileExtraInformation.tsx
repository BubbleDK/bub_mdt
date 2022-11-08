import {
  Card, createStyles,
  Group,
  Text,
} from '@mantine/core';

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
            <Text weight={500} style={{marginBottom: 3.5}}>Additional Information</Text>
          </Group>
        </Card.Section>

        <Card.Section mt="sm" inheritPadding>
          WIP
        </Card.Section>
      </Card>
    </div>
  );
};

export default ProfileExtraInformation;
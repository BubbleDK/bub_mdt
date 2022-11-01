import {
  Avatar,
  createStyles,
  Group,
  Menu,
  ScrollArea,
  Table,
  Text,
  UnstyledButton,
  useMantineTheme
} from "@mantine/core";
import {IconListDetails, IconSearch, IconSettings, IconTrash} from "@tabler/icons";
import {useState} from "react";

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    height: '90%',
    padding: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  },

  onHover: {
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  }
}));

const RecentEvents: React.FC = () => {
  const {classes} = useStyles();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = 760 / 2 - theme.spacing.md / 2;
  const [event, setEvents] = useState([{
    id: 1,
    eventCat: 'incident',
    event: 'created',
    editBy: 'John Doe',
    editedAt: 'a few seconds ago'
  }, {id: 2, eventCat: 'profile', event: 'edited', editBy: 'John Doe', editedAt: 'a few seconds ago'}, {
    id: 3,
    eventCat: 'incident',
    event: 'created',
    editBy: 'John Doe',
    editedAt: '10 minutes ago'
  }, {id: 4, eventCat: 'profile', event: 'created', editBy: 'John Doe', editedAt: '3 days ago'}]);
  const rows = event.map((item) => (
    <tr key={item.id}>
      <td className={classes.onHover}>
        <Menu withArrow>
          <Menu.Target>
            <UnstyledButton className={classes.user}>
              <Group>
                <div style={{flex: 1}}>
                  <Text size="sm" weight={500}>
                    {item.eventCat.charAt(0).toUpperCase() + item.eventCat.slice(1)} Activity
                  </Text>

                  <Text color="dimmed" size="xs">
                    {item.editBy} {item.event} a {item.eventCat}
                  </Text>
                </div>

                <Text color="dimmed" size="xs" style={{paddingTop: 20}}>
                  {item.editedAt}
                </Text>
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconListDetails size={14}/>}>Go to</Menu.Item>

          </Menu.Dropdown>
        </Menu>
      </td>
    </tr>
  ));

  return (
    <ScrollArea style={{height: SECONDARY_COL_HEIGHT, paddingRight: 5}}>
      <Table verticalSpacing="sm" striped>
        <thead>
        <th>
          Recent activity
        </th>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export default RecentEvents;
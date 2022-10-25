import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
    ScrollArea,
    Table,
    Menu,
} from '@mantine/core';
import { IconListDetails, IconSearch, IconSettings, IconTrash } from '@tabler/icons';
  
const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        height: '90%',
        padding: theme.spacing.xs,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}));

const data = [{image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days'}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days'}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days'}]

const WarrantTable: React.FC = () => {
    const { classes } = useStyles();
    const rows = data.map((item) => (
        <tr key={item.name}>
          <td>
            <Menu withArrow>
                <Menu.Target>
                    <UnstyledButton className={classes.user}>
                        <Group>
                            <Avatar src={item.image} radius="xl" />

                            <div style={{ flex: 1 }}>
                                <Text size="sm" weight={500}>
                                    {item.name}
                                </Text>

                                <Text color="dimmed" size="xs">
                                    {item.reason}
                                </Text>
                            </div>

                            <Text color="dimmed" size="xs" style={{paddingTop: 20}}>
                                {item.expiresIn}
                            </Text>
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item icon={<IconListDetails size={14} />}>Details</Menu.Item>
                    <Menu.Item icon={<IconSearch size={14} />}>Lookup</Menu.Item>
                    <Menu.Item icon={<IconSettings size={14} />}>Edit</Menu.Item>

                    <Menu.Divider />

                    <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete warrant</Menu.Item>
                </Menu.Dropdown>
            </Menu>
          </td>
        </tr>
      ));

    return (
        <ScrollArea>
            <Table verticalSpacing="sm">
                <thead>
                    <th>
                        Warrants
                    </th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </ScrollArea>
    );
};
  
export default WarrantTable;
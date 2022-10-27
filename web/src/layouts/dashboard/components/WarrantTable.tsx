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
import { useState } from 'react';
  
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

const WarrantTable: React.FC = () => {
    const { classes } = useStyles();
    const [data, setData] = useState([{image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 1}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 2}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 3}, {image: '', name: 'John Dope', reason: 'Reckless Driving', expiresIn: 'expires in 10 days', id: 4}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 5}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 6}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 7}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 8}, {image: '', name: 'John Doe', reason: 'Reckless Driving', expiresIn: 'expires in 5 days', id: 9}])
    const deleteWarrant = (id: number) => {
        const removeIndex = data.findIndex(item => item.id === id);
        data.splice(removeIndex, 1);
        setData([...data])
    }
    const rows = data.map((item) => (
        <tr key={item.id}>
          <td className={classes.onHover}>
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

                    <Menu.Item color="red" onClick={() => deleteWarrant(item.id)} icon={<IconTrash size={14} />}>Delete warrant</Menu.Item>
                </Menu.Dropdown>
            </Menu>
          </td>
        </tr>
    ));

    return (
        <ScrollArea style={{ height: 760 }}>
            <Table verticalSpacing="sm" striped>
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
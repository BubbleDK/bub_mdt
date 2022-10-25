import { Badge, Table, Group, Text, ScrollArea, Box } from '@mantine/core';

const UserRoleTable: React.FC = () => {
    return (
        <Box>
            <ScrollArea>
                <Table sx={{ minWidth: 300 }} verticalSpacing="xs" striped>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={"item.name"}>
                            <td>
                                <Group spacing="sm">
                                <div>
                                    <Text size="sm" weight={500}>
                                        {"John Doe"}
                                    </Text>
                                </div>
                                </Group>
                            </td>
                            <td>
                                <p>Cheif</p>
                            </td>
                            <td>
                                <Badge fullWidth>Active</Badge>
                            </td>
                        </tr>
                        <tr key={"item.name"}>
                            <td>
                                <Group spacing="sm">
                                <div>
                                    <Text size="sm" weight={500}>
                                        {"Jenna Doe"}
                                    </Text>
                                </div>
                                </Group>
                            </td>
                            <td>
                                <p>Captain</p>
                            </td>
                            <td>
                                <Badge fullWidth color="gray">Inactive</Badge>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
  };
  
  export default UserRoleTable;
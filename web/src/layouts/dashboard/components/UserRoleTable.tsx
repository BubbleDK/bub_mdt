import {Badge, Table, Group, Text, ScrollArea, Box, Tooltip} from '@mantine/core';

const data = [
  {
    key: '1',
    name: 'John Doe',
    rank: 'Chief',
    status: true
  }, {
    key: '2',
    name: 'Jenna Doe',
    rank: 'Captain',
    status: false
  }, {
    key: '3',
    name: 'Jenna Doe',
    rank: 'Cadet',
    status: false
  }, {
    key: '4',
    name: 'Jenna Doe',
    rank: 'Cadet',
    status: true
  }
]

const UserRoleTable: React.FC = () => {
  const trueFirst = data.sort((a, b) => Number(b.status) - Number(a.status));
  const rows = trueFirst.map((item) => (
    <tr key={item.key}>
      <td>
        <Group spacing="sm">
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <p>{item.rank}</p>
      </td>
      <td>
        {item.status ?
          <Badge fullWidth>Active</Badge>
          :
          <Tooltip label="Last seen 30/10/2022" withArrow>
            <Badge fullWidth color="gray">Inactive</Badge>
          </Tooltip>
        }
      </td>
    </tr>
  ));

  return (
    <Box>
      <ScrollArea>
        <Table sx={{minWidth: 300}} verticalSpacing="xs" striped>
          <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
};

export default UserRoleTable;
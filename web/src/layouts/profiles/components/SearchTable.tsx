import { Box, Checkbox, Grid, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import dayjs from 'dayjs';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons';

const employees = [{firstName: 'Emil', lastName: 'world', birthDate: '1957-01-25', gender: 'male', stateId: 'MDT12345', job: 'police', image: 'https://happymag.tv/wp-content/uploads/2021/05/Untitled-3-870x524.jpg', phone_number: '41286509'}, {firstName: 'Hello', lastName: 'world', gender: 'female', stateId: 'MDT12345', job: 'police'}, {firstName: 'Hello', lastName: 'world', gender: 'male', job: 'police'}, {firstName: 'Hello', lastName: 'world'}, {firstName: 'Hello', lastName: 'world', gender: 'male'}, {firstName: 'Hello', lastName: 'world'}, {firstName: 'Hello', lastName: 'world'}, {firstName: 'Hello', lastName: 'world'},];

const SearchTable: React.FC<any> = ({ setCitizen }: any) => {
  const [profiles, setProfiles] = useState(employees);

  const [query, setQuery] = useState('');
  const [veteransOnly, setVeteransOnly] = useState(false);
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    const now = dayjs();
    setProfiles(
      employees.filter(({ firstName, lastName, birthDate }) => {
        if (veteransOnly && now.diff(birthDate, 'years') < 40) {
          return false;
        }
        if (
          debouncedQuery !== '' &&
          !`${firstName} ${lastName}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, veteransOnly]);

  return (
    <>
      <Grid align="center" mb="xs">
        <Grid.Col xs={8} sm={9}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search profiles..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col xs={4} sm={3}>
          <Checkbox
            label="Over 40 years old"
            checked={veteransOnly}
            onChange={(e) => setVeteransOnly(e.currentTarget.checked)}
          />
        </Grid.Col>
      </Grid>
      <Box style={{height: 150}}>
        <DataTable
          highlightOnHover
          withBorder
          records={profiles}
          columns={[
            { accessor: 'stateid', render: ({ stateId }) => `${stateId}` },
            { accessor: 'name', render: ({ firstName, lastName }) => `${firstName} ${lastName}` },
            { accessor: 'age', render: ({ birthDate }) => dayjs().diff(birthDate, 'y') },
            { accessor: 'gender', render: ({ gender }) => `${gender}` },
            { accessor: 'job', render: ({ job }) => `${job}` },
          ]}
          onRowClick={({ firstName, lastName, job, image, stateId, phone_number }) => {
            setCitizen([{ firstName, lastName, job, image, stateId, phone_number }])
          }}
        />
      </Box>
    </>
  );
}

export default SearchTable;
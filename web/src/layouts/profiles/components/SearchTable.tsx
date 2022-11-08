import { Box, Checkbox, Grid, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import dayjs from 'dayjs';
import { DataTable } from 'mantine-datatable';
import {Dispatch, useEffect, useState} from 'react';
import { IconSearch } from '@tabler/icons';
import {Incidents, Profile} from "../../../types";

const employees = [{firstName: 'Hello', lastName: 'world', birthDate: '1957-01-25', gender: 'male', stateId: 'MDT12345', job: 'police', image: 'https://happymag.tv/wp-content/uploads/2021/05/Untitled-3-870x524.jpg', phone_number: '88888888'}, {firstName: 'World', lastName: 'Hello', birthDate: '1987-01-25', gender: 'female', stateId: 'MDT98765', job: 'police', image: 'https://happymag.tv/wp-content/uploads/2021/05/Untitled-3-870x524.jpg', phone_number: '9999999'}];

interface IProps {
  setCitizen: Dispatch<Profile[]>;
  setIncidents: Dispatch<Incidents[]>;
}

const SearchTable: React.FC<IProps> = ({setCitizen, setIncidents}: IProps) => {
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
            setCitizen([{firstName, lastName, job, image, stateId, phone_number}])
            setIncidents([{id: '123'}])
          }}
        />
      </Box>
    </>
  );
}

export default SearchTable;
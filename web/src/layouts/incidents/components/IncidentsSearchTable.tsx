import {Dispatch, useEffect, useState} from "react";
import {Incidents} from "../../../types";
import {Box, Checkbox, Grid, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import {DataTable} from "mantine-datatable";
import {useDebouncedValue} from "@mantine/hooks";

interface IProps {
  incidents?: Incidents[];
  setIncidents: Dispatch<Incidents[]>;
}

const IncidentsSearchTable: React.FC<IProps> = ({incidents, setIncidents}: IProps) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    if (incidents !== undefined) {
      setIncidents(
        incidents.filter(({id, title}) => {
          return !(debouncedQuery !== '' &&
            !`${title}`
              .toLowerCase()
              .includes(debouncedQuery.trim().toLowerCase()));
        })
      );
    }
  }, [debouncedQuery]);

  return (
    <>
      <Grid align="center" mb="xs">
        <Grid.Col xs={8} sm={9}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search incidents..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col xs={4} sm={3}>
          <Checkbox
            label="Over 40 years old"
          />
        </Grid.Col>
      </Grid>
      <Box style={{height: 150}}>
        <DataTable
          highlightOnHover
          withBorder
          records={incidents}
          columns={[
            { accessor: 'id', render: ({ id }) => `${id}` },
            { accessor: 'title', render: ({ title }) => `${title}` },
          ]}
          onRowClick={({ id, title }) => {
            //setIncidents()
            console.log(id, title)
          }}
        />
      </Box>
    </>
  );
}

export default IncidentsSearchTable;
import {Container, Divider, Grid, SimpleGrid, Skeleton, useMantineTheme} from "@mantine/core";
import SearchTable from "./components/SearchTable";
import ProfileInformation from "./components/ProfileInformation";
import {useState, useEffect} from "react";

const Profiles: React.FC = () => {
  const [citizen, setCitizen] = useState([]);
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = 530;
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  useEffect(() => console.log(citizen), [citizen]);
  return (
    <Container style={{margin: 0, maxWidth: '100%', padding: '10px', height: '760px'}}>
      <SearchTable  setCitizen={setCitizen}/>
      {/*<Skeleton height={205} radius="md" animate={false}/>*/}

      <Divider my="sm"/>

      <SimpleGrid cols={2} spacing="md">
        <ProfileInformation citizen={citizen} setCitizen={setCitizen} />
        {/*<Skeleton height={530} radius="md" animate={false}/>*/}
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false}/>
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false}/>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Profiles;
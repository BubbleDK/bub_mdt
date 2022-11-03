import {Container, Divider, Grid, LoadingOverlay, SimpleGrid, Skeleton, useMantineTheme} from "@mantine/core";
import SearchTable from "./components/SearchTable";
import ProfileInformation from "./components/ProfileInformation";
import ProfileIncidents from "./components/ProfileIncidents";
import ToBeNamed from "./components/ToBeNamed"
import {useState, useEffect} from "react";
import {Profile} from "../../types";

const Profiles: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [citizen, setCitizen] = useState<Profile[]>();
  useEffect(() => { console.log(citizen); setVisible(true); setTimeout(() => {setVisible(false)}, 500) }, [citizen]);

  return (
    <Container style={{margin: 0, maxWidth: '100%', padding: '10px', height: '760px'}}>
      <SearchTable  setCitizen={setCitizen}/>

      <Divider my="sm"/>

      {visible
        ?
          <div style={{position: 'relative', zIndex: 95, height: 530}}>
            <LoadingOverlay visible={visible} overlayOpacity={1} radius="xs"/>
          </div>
        :
        <SimpleGrid cols={2} spacing="md">
          <ProfileInformation citizen={citizen} setCitizen={setCitizen} />
          <Grid gutter="md">
            <Grid.Col>
              <ProfileIncidents />
            </Grid.Col>
            <Grid.Col>
              <ToBeNamed />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      }
    </Container>
  );
};

export default Profiles;
import {Container, Divider, Grid, LoadingOverlay, SimpleGrid, Skeleton, useMantineTheme} from "@mantine/core";
import SearchTable from "./components/SearchTable";
import ProfileInformation from "./components/ProfileInformation";
import ProfileIncidents from "./components/ProfileIncidents";
import ProfileExtraInformation from "./components/ProfileExtraInformation"
import {useState, useEffect} from "react";
import {Incidents, Profile} from "../../types";

const Profiles: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [citizen, setCitizen] = useState<Profile[]>();
  const [incidents, setIncidents] = useState<Incidents[]>();
  useEffect(() => { console.log(citizen); console.log(incidents); setVisible(true); setTimeout(() => {setVisible(false)}, 1000) }, [citizen]);

  return (
    <Container style={{margin: 0, maxWidth: '100%', padding: '10px', height: '760px'}}>
      <SearchTable  setCitizen={setCitizen} setIncidents={setIncidents}/>

      <Divider my="sm"/>

      {visible
        ?
          <div style={{position: 'relative', zIndex: 95, height: 530}}>
            <LoadingOverlay visible={visible} overlayOpacity={1} radius="xs" transitionDuration={0}/>
          </div>
        :
        <SimpleGrid cols={2} spacing="md">
          <ProfileInformation citizen={citizen} setCitizen={setCitizen} setIncidents={setIncidents}/>
          <Grid gutter="md">
            <Grid.Col>
              <ProfileIncidents incidents={incidents}/>
            </Grid.Col>
            <Grid.Col>
              <ProfileExtraInformation />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      }
    </Container>
  );
};

export default Profiles;
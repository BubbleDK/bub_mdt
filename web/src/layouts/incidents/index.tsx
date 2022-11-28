import {Container, Divider} from "@mantine/core";
import IncidentsSearchTable from "./components/IncidentsSearchTable";
import {useState} from "react";
import {Incidents} from "../../types";

const IncidentLayout: React.FC = () => {
  const [allIncidents, setIncidents] = useState<Incidents[]>();
  return (
    <Container style={{margin: 0, maxWidth: '100%', padding: '10px', height: '760px'}}>
      <IncidentsSearchTable incidents={allIncidents} setIncidents={setIncidents}/>

      <Divider my="sm"/>
    </Container>
  );
};

export default IncidentLayout;
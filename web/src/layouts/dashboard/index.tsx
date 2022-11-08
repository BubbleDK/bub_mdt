import {Container, Grid, SimpleGrid, Skeleton, useMantineTheme} from '@mantine/core';
import BulletinBoard from './components/BulletinBoard';
import UserRoleTable from './components/UserRoleTable';
import WarrantTable from './components/WarrantTable';
import RecentEvents from './components/RecentEvents';

const Dashboard: React.FC = () => {
  return (
    <Container style={{margin: 0, maxWidth: '100%', padding: '10px', height: '760px'}}>
      <SimpleGrid cols={3} spacing="xl">
        <UserRoleTable/>
        <Grid gutter="md">
          <Grid.Col>
            <BulletinBoard/>
          </Grid.Col>
          <Grid.Col>
            <RecentEvents/>
          </Grid.Col>
        </Grid>
        <WarrantTable/>
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
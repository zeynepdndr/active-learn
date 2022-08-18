import { Grid } from "@mui/material";
import WelcomeMessage from "../../components/Partials/WelcomeMessage/WelcomeMessage";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <WelcomeMessage />
        </Grid>
        <Grid item xs={4}>
          DSGSG
        </Grid>
        <Grid item xs={4}>
          ADA
        </Grid>
        <Grid item xs={8}>
          ABA
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

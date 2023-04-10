import React from "react";
import DCards from "../components/DCards";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Stdtable from "../components/Stdtable";
import DateP from "../components/DateP";
const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <Container sx={{ marginTop: "30px" }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DCards title="Weekly Sales" total="123" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DCards title="New Users" total="124" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DCards title="Item Orders" total="1234" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DCards title="Bug Reports" total="{234}" />
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{ mt: 5 }}>
          Get Upto Speed
        </Typography>
        <Box mt={2} sx={{ display: "flex", flexDirection: "row" }}>
          <DateP />
       
          <DateP />
          <Button variant="contained" size="small">
            Go
          </Button>
        </Box>
        <Box mt={6}>
          <Stdtable />
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;

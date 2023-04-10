import { Card, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

const DCards = () => {
  const styledicon = {
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",

    justifyContent: "center",
  };
  return (
    <div>
      <Card
        sx={{
          py: 5,
          boxShadow: 0,
          textAlign: "center",
          color: "gray",
          bgcolor: "#EBECF0",
        }}
      >
        <Box
          style={styledicon}
          width={8}
          heigh={8}
          mb={3}
          align="center"
          sx={{
            color: "black",
          }}
        >
          <PersonIcon sx={{ fontSize: "70px", margin: "auto" }} />
        </Box>
        <Typography variant="h3">12344</Typography>

        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Students
        </Typography>
      </Card>
    </div>
  );
};

export default DCards;

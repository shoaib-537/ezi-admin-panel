import React from "react";
import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Selector from "../components/Selector";
import DeleteIcon from "@mui/icons-material/Delete";

const Manage = () => {
  return (
    <div>
      <Navbar />
      <Typography variant="h4" sx={{ pl: 5, mb: 5, mt: 5 }}>
        Let's manage attandence
      </Typography>

      <Box>
        <Paper
          elevation={8}
          sx={{
            mr: 5,
            ml: 5,
            minWidth: "810px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "#eceeee",
            }}
          >
            <Typography variant="h6" bold>
              Name
            </Typography>
            <Typography variant="h6">Reg#</Typography>
            <Typography variant="h6">Date</Typography>
            <Typography variant="h6">Status</Typography>
            <Typography variant="h6">Action</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h6">Zack</Typography>
            <Typography variant="h6">12345</Typography>
            <Typography variant="h6">01-02-2023</Typography>
            <Selector />
            <IconButton aria-label="delete" color="warning">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider />
          
        </Paper>
      </Box>
    </div>
  );
};

export default Manage;

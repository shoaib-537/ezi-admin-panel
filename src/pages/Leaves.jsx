import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Leaves = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
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
              <Typography variant="h6">From</Typography>
              <Typography variant="h6">To</Typography>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              <Typography variant="h6">01-02-2023</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Actions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Deny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Divider />
            <Divider />
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Leaves;

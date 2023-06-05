import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Header} from './components/header'
import {SideBar} from'./components/sidebar';
import {Conversation} from './components/conversation';
import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Customize the primary color
    },
    secondary: {
      main: "#f50057", // Customize the secondary color
    },
    // Add more color configurations as needed
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans' // Customize the default font family
     // Customize the default font size
    // Add more typography configurations as needed
  },
  // Add more theme configurations as needed
});
const MainPage = () => {


  return (
    <div style={{ marginBottom: "0px" }}>
<ThemeProvider theme={theme}>
          <Header />
        <Grid
          container
          spacing={0}
          display="flex"
          flexDirection="column"
          style={{ marginBottom: "0px" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            lg={4}
            style={{ position: "sticky", top: 0, maxWidth: "25%" }}
          >
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8} style={{ marginLeft: "-40px", marginTop: "30px" }}>
            <Conversation/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default MainPage;
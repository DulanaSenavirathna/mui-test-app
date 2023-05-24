import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Box,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

// interface GridProps {
//     spacing: number;
//     justify: string;
// }

const cards = [1, 2, 3, 4, 5, 6];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello Everyone. This is a photo album and I'm trying to learn mui
              paragraph.
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Button variant="contained">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Second Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "50%",
                    }}
                    image="https://source.unsplash.com/random?travel"
                  />
                  <CardContent
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. This section is for describe card
                      content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box sx={{ mt: 6, backgroundColor: "background.paper" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary">
            footer content here
          </Typography>
        </Box>
      </footer>
    </>
  );
}

export default App;

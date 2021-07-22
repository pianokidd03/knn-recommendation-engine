import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Card,
  CardContent
} from '@material-ui/core';



function App() {
  return (
    <div style={{ backgroundColor: '#f1f1f1', height: '100%', width: '100%', position: 'fixed', margin: 0, padding: 0 }}>
     <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          TasteMaker
        </Typography>
      </Toolbar>
    </AppBar>
    <div style={{ paddingTop: '50px' }}></div>
    <Card variant='outlined' style={{ margin: 'auto', width: '90%', height: 'auto' }}>
      <CardContent>
        <Typography variant='h5' style={{ paddingBottom: '15px' }}>
          Enter your top 5 favorite songs!
        </Typography>
        <form style={{ width: '25ch' }} noValidate autoComplete="off">
          <TextField label='Favorite Song' variant='outlined' />
          <div style={{ paddingTop: '20px' }}></div>
          <TextField label='Second Favorite Song' variant='outlined' />
          <div style={{ paddingTop: '20px' }}></div>
          <TextField label='Third Favorite Song' variant='outlined' />
          <div style={{ paddingTop: '20px' }}></div>
          <TextField label='Fourth Favorite Song' variant='outlined' />
          <div style={{ paddingTop: '20px' }}></div>
          <TextField label='Fifth Favorite Song' variant='outlined' />
        </form>
      </CardContent>
    </Card>
    </div>
  );
}

export default App;

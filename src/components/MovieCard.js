import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  export default function MovieCard(props) {
  
    let selectMovie=()=>{
      const {movie,selectmovie}=props;
      selectmovie(movie)
    }
  
    return (
      <Card className='movie-card'>
        <CardActionArea>
          <CardMedia
            className='movie-image'
            image={`http://image.tmdb.org/t/p/w300${props.movie.backdrop_path}`}
            title= {props.movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary" onClick={selectMovie}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
 // export default MovieCard
// class MovieCard extends React.Component{

//     render(){
//         const {movie}=this.props;
//         return(
//         <div>{movie.title}</div>
//         )
//     }
// }


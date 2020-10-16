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
    maxWidth: "90%",
    marginLeft: "5%",
    marginBottom: "1vw"
  },
  media: {
    height: 140,
  },
});

const TickerNewsItem = ({ newsItem }) => {
  const classes = useStyles();
  const {  title, description, url, urlToImage } = newsItem;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button id="news-btn" variant="contained" size="small" color="primary" onClick={e => {
            e.preventDefault();
            window.location.href = `${url}`
          }}>Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default TickerNewsItem;
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
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Theme(props) {
	const classes = useStyles();
    return (
        <div className="theme col-md-3">
	        <Card className={classes.card}>
		      <CardActionArea>
		        <CardMedia
		          className={classes.media}
		          image={props.item.screenshot_url}
		          title={props.item.name}
		        />
		        <CardContent>
		          <Typography gutterBottom variant="h5" component="h2">
		          	{props.item.name}
		            {/*<h2 className="h5">{props.item.name}</h2>*/}
					{/*<p>Version {props.item.version}</p>*/}
		          </Typography>
		          {/*<Typography variant="body2" color="textSecondary" component="p">
		            {props.item.description}
		          </Typography>*/}
		        </CardContent>
		      </CardActionArea>
		      <CardActions>
		        <Button size="small" color="primary">
		          Share
		        </Button>
		        <Button size="small" color="primary">
		          Learn More
		        </Button>
		      </CardActions>
		    </Card>
	        
			{/*<div className="inner" style={{backgroundImage: `url(${props.item.screenshot_url})`}}>
				<div className="overlay" />
				<div className="content">
					<h2 className="h5">{props.item.name}</h2>
					<p>Version {props.item.version}</p>
				</div>
			</div>*/}
		</div>
    );
}

export default Theme
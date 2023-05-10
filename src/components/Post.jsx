import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")] : {
            height: 150,
        }
    }
}));

export default function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
                className = {classes.media}
                image = "https://plus.unsplash.com/premium_photo-1676064229123-29b6c6a39d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fE9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                title = "My Post"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">
                An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange). An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange). An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange). An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange). An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange)
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  )
}
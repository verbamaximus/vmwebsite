import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Events({name, imgUrl, outPara, inPara1, inPara2, inPara3, inPara4}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 650 }} className="dib br3 pa3 ma2 bw2 shadow-5 card">
        <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {outPara}
          <br />
          <br />
          {inPara1}
          <br />
          <br />
          {inPara2}
          <br />
          <br />
          {inPara3}
          <br />
          <br />
          {inPara4}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {inPara1}
          </Typography>
          <Typography paragraph>
            {inPara2}
          </Typography>
          <Typography paragraph>
            {inPara3}
          </Typography>
          <Typography>
            {inPara4}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


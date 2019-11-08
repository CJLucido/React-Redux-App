import React from 'react'


// function StateCard(props){
//     return (
//         <div>
//             <h1>{props.stateName}</h1>
//             <h2>{props.titleDR}</h2>
//             <p>Began: {props.beganDate}</p>
//             <p>Closed: {props.closeDate}</p>
//         </div>
//     )
// }

// export default StateCard


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
      display: "flexbox",
      flexDirection: "row",
    maxWidth: '30%',
    margin: "5%",
    backgroundColor: "lightgrey"
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,

  },
});



export default function StateCard(props) {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.stateName}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.titleDR}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.disasterType + " " + props.disasterNumber}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Began: {props.beganDate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Closed: {props.closeDate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">{props.paProgramDeclared ? "PA Support" : "No PA Support"}</Typography>
        <Typography className={classes.pos} color="textSecondary">{props.iaProgramDeclared ? "IA Support" : "No IA Support"}</Typography>
        <Typography className={classes.pos} color="textSecondary">{props.hmProgramDeclared ? "HM Support" : "No HM Support"}</Typography>

      </CardContent>
    </Card>
  );
}
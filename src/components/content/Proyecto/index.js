import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Typography, CardMedia, Divider } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';


const myStyle = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardHeader: {
        backgroundColor: '#1AA6FC',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    icon: {
        color: 'white'
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    divider: {
        color: 'black',
        width: '1px',
        height: '14px'
    },
}));
function Proyecto() {
    const classes = myStyle();
    return (
        <Card className={classes.card}>
            <CardHeader
                title={
                    <Typography component="subtitle1" className={classes.cardTitle}>
                        Activa
                    </Typography>
                }
                avatar={
                    <IconButton aria-label="descargar">
                        <AccessTimeIcon className={classes.icon} />
                    </IconButton>
                }
                action={
                    <IconButton aria-label="descargar">
                        <GetAppIcon className={classes.icon} />
                    </IconButton>
                }
                className={classes.cardHeader}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Nombre del proyecto
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Date time  00/00/00
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180816788/107604672-timer-vector-icon-isolated-on-transparent-background-timer-logo-concept.jpg"

            />
            <CardActions>
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                    <Typography variant="body2" color="textSecondary" component="p">
                        Completadas: 
                </Typography>
                    <Divider className={classes.divider} orientation="vertical" />
                    <Typography variant="body2" color="textSecondary" component="p">
                        En proceso: 
            </Typography>
                    <Divider className={classes.divider} orientation="vertical" />
                    <Typography variant="body2" color="textSecondary" component="p">
                        Por completar: 
            </Typography>
                </Grid>

            </CardActions>
        </Card>
    );
}

export default Proyecto;
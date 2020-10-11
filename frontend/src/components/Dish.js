import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, CardMedia, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 50,
    width: 75,
  },
});

const Dish = ({ card }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Link href={`/lunch/${card._id}`}>
            <CardHeader title={card.category} />
            {card.dishes.map((dish) => (
              <CardMedia
                className={classes.media}
                image={dish.image}
                title='Paella dish'
                key={dish.name}
              />
            ))}
          </Link>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Dish;

import { Typography, Button } from '@mui/material';
import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles<void>()((theme, _params, classes) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    background: '#1da1f2',
  },
  singinSide: {
    height: 50,
    [`&.--`]: {
      backgroundColor: 'lightblue',
      height: 30,
    },
  },
}));

function Singin() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <ul>
          <li>
            <Typography>Читайте о том, что вам интересно.</Typography>
          </li>
          <li>
            <Typography>Узнайте, о чем говорят в мире.</Typography>
          </li>
          <li>
            <Typography>Присоединитесь к общению.</Typography>
          </li>
        </ul>
      </section>
      <section className={cx(classes.singinSide)}>
        <TwitterIcon />
        <Typography>Узнайте, что происходит в мире прямо сейчас</Typography>
        <Typography>Присоединитесь к Твиттеру прямой сейчас!</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth>
          Зарегистрироваться
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth>
          Войти
        </Button>
      </section>
    </div>
  );
}

export default Singin;

import { Typography, Button } from '@mui/material';
import * as React from 'react';
import { makeStyles } from 'tss-react/mui';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import UsersIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import LoginFormDialog from '../components/LoginDialog';
import TextField from '@mui/material/TextField';

export const useStylesSingIn = makeStyles<void>()((theme, classes) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    background: 'rgb(42 174 255 / 70%)',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '& ul': {
      margin: 0,
      width: 380,
      padding: '0 0 0 50px',
      '& :last-child': {
        marginBottom: 0,
      },
      '& li': {
        listStyle: 'none',
        margin: 0,
        color: 'white',
        marginBottom: 50,
      },
    },
  },
  blueSideBackIcon: {
    width: '250%',
    height: '250%',
    position: 'absolute',
    top: -600,
    left: -500,
  },
  blueSideInfo: {
    fontSize: 24,
    fontWeight: 600,
    position: 'relative',
  },
  blueSideInfoIcons: {
    fontSize: 35,
    position: 'absolute',
    top: 4,
    left: -45,
  },
  LoginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h5': {
      fontSize: 32,
      fontWeight: 600,
      margin: '0 0 65px 0',
    },
    '& h6': {
      fontSize: 15,
      fontWeight: 600,
      padding: '0 0 20px 0',
    },
  },
  LoginSideTwitterIcon: {
    fontSize: 45,
    marginBottom: 25,
  },
  LoginSideWrapper: {
    width: 380,
  },
}));

function Singin() {
  const { classes } = useStylesSingIn();
  const [openSingIn, setOpenSignIn] = React.useState(false);
  const [openSingUp, setOpenSignUp] = React.useState(false);
  const handleClickSingIn = () => {
    setOpenSignIn(true);
  };
  const handleClickSingUp = () => {
    setOpenSignUp(true);
  };
  const onClose = () => {
    setOpenSignIn(false);
    setOpenSignUp(false);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon
          color="primary"
          className={classes.blueSideBackIcon}
        />
        <ul>
          <li>
            <Typography
              variant="h6"
              className={classes.blueSideInfo}>
              <SearchIcon className={classes.blueSideInfoIcons} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography
              variant="h6"
              className={classes.blueSideInfo}>
              <UsersIcon className={classes.blueSideInfoIcons} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography
              variant="h6"
              className={classes.blueSideInfo}>
              <MessageIcon className={classes.blueSideInfoIcons} />
              Присоединитесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.LoginSide}>
        <div className={classes.LoginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.LoginSideTwitterIcon}
          />
          <Typography variant="h5">Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography variant="h6">Присоединитесь к Твиттеру прямой сейчас!</Typography>
          <Button
            onClick={handleClickSingUp}
            variant="contained"
            color="primary"
            fullWidth>
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickSingIn}
            style={{ marginTop: 20 }}
            variant="outlined"
            color="primary"
            fullWidth>
            Войти
          </Button>
          <LoginFormDialog
            title="Войти в Твиттер"
            buttonTitle="Войти"
            visible={openSingIn}
            onClose={onClose}>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Адрес электронной почты"
              InputLabelProps={{ shrink: true }}
              type="email"
              fullWidth
              variant="filled"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              InputLabelProps={{ shrink: true }}
              label="Пароль"
              type="password"
              fullWidth
              variant="filled"
            />
          </LoginFormDialog>
          <LoginFormDialog
            title="Создайте учетную запись"
            buttonTitle="Зарегистрироваться"
            visible={openSingUp}
            onClose={onClose}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Имя(Login)"
              InputLabelProps={{ shrink: true }}
              type="name"
              fullWidth
              variant="filled"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Адрес электронной почты"
              InputLabelProps={{ shrink: true }}
              type="email"
              fullWidth
              variant="filled"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              InputLabelProps={{ shrink: true }}
              label="Пароль"
              type="password"
              fullWidth
              variant="filled"
            />
          </LoginFormDialog>
        </div>
      </section>
    </div>
  );
}

export default Singin;

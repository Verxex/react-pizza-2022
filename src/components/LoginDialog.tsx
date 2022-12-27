import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useStylesSingIn } from '../pages/Singin';

type LoginFormDialogProps = {
  title: string;
  buttonTitle: string;
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

const LoginFormDialog: React.FC<LoginFormDialogProps> = ({
  title,
  children,
  onClose,
  visible,
  buttonTitle,
}) => {
  return (
    <div>
      <Dialog
        open={visible}
        onClose={onClose}>
        <DialogContent sx={{ textAlign: 'center' }}>
          <TwitterIcon
            color="primary"
            sx={{ fontSize: 45, marginBottom: 3 }}
          />
          <DialogContentText
            variant="h5"
            sx={{ fontWeight: 800, marginBottom: 2 }}>
            {title}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions sx={{ flexDirection: 'column' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            fullWidth>
            {buttonTitle}
          </Button>
          {buttonTitle === 'Войти' && (
            <Box mt={2}>
              <Link>Забыли пароль? </Link>
              <Link>Зарегистрироваться в Твиттере</Link>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginFormDialog;

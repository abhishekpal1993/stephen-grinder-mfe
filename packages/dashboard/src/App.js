import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
  makeStyles
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const useStyles = makeStyles((theme) => ({
  dashboard: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    textAlign: 'center',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <div className={classes.dashboard}>
          Welcome to dashboard!
        </div>
      </StylesProvider>
    </div>
  );
};

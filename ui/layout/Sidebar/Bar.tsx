import { makeStyles, Drawer, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC } from 'react';
import { sidebarConfig } from './config';
import { AppTheme } from '~/theme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles<AppTheme>(theme => ({
  drawer: {
    width: sidebarConfig.drawerWidthOpen,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: sidebarConfig.drawerWidthOpen,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

type Props = {
  open?: boolean;
  handleClose?: () => void;
};

export const LeftSidebar: FC<Props> = ({ children, open, handleClose }) => {
  const classes = useStyles();

  return <Drawer
  variant="permanent"
  className={clsx(classes.drawer, {
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  })}
  classes={{
    paper: clsx({
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    }),
  }}
>
  <div className={classes.toolbar}>
    <IconButton onClick={handleClose}>
      <ChevronLeftIcon />
    </IconButton>
  </div>
  {children}
</Drawer>
}

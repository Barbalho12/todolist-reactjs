import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import DoneAllIcon from '@material-ui/icons/DoneAll';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        padding:'10px'
    }
}));

const BottomBar = ({pageValue, onPageChange}) => {
    const classes = useStyles();
    return (
        <BottomNavigation
            value={pageValue}
            onChange={onPageChange} 
            showLabels className={classes.root}>
          <BottomNavigationAction label="Todas"  value={0} icon={<FormatListBulletedIcon />} />
          <BottomNavigationAction label="Pendentes" value={1}  icon={<QueryBuilderIcon />} />
          <BottomNavigationAction label="Concluídas" value={2}  icon={<DoneAllIcon />} />
        </BottomNavigation>
    );
}

export default BottomBar;
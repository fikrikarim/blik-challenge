import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from 'material-ui/Divider';
import List, { ListItem } from 'material-ui/List';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
    };

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchor } = this.state;

        const drawer = (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button onClick={() => this.props.changePageToHome()}>
                        Home
                    </ListItem>
                    <ListItem button onClick={() => this.props.changePageToAnalytics()}>
                        Analytics
                    </ListItem>
                </List>
            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                    >
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap style={{ flex: 1 }}>
                                Blik
                            </Typography>
                            <IconButton
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {this.props.children}
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    
})

export default withStyles(styles)(
    connect(
        mapStateToProps,
        {
            changePageToHome: () => push('/'),
            changePageToAnalytics: () => push('/analytics'),
        }
    )(PermanentDrawer)
);
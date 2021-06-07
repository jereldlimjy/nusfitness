import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	titleLink: {
		textDecoration: "none",
		color: "#EF7C00"
	},
	link: {
		textDecoration: "none",
		color: "white"
	},
	appBar: {
		backgroundColor: "#003D7C"
	}
}));

const Navbar = ({loggedIn, setLoggedIn}) => {
	const classes = useStyles();

    return (
		<nav className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link to='/' className={classes.titleLink}>NUSFitness</Link>
					</Typography>
					{ loggedIn 
						? <Button>
							<Link to='/' onClick={() => setLoggedIn(false)}  className={classes.link}>Logout</Link>
						</Button>
						: <Fragment>
							<Button>
								<Link to='/login' className={classes.link}>Login</Link>
							</Button>
							<Button>
								<Link to='/register' className={classes.link}>Register</Link>
							</Button>
						</Fragment>
					}
				</Toolbar>
			</AppBar>
		</nav>
    )
}

export default Navbar;
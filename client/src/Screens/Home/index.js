import React, { Fragment, Component } from 'react';
import NavBarProfile from '../../Components/NavBarProfile';
import NavBar from '../../Components/NavBar';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import About from '../About';
import Requierments from '../Requierments';
import Contact from '../Contact';
import SupportTeam from '../SupportTeam';
import Footer from '../Footer';
import Profile from '../Profile';

class Home extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<div id="home">
					<Profile />
				</div>
			</Fragment>
		);
	}
}

export default Home;

import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Grid from "./grid";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center">
				<Navbar />
				<Jumbotron />
				<div className="container">
					<Grid />
				</div>
				<Footer />
			</div>
		</>);
};

export default Home;

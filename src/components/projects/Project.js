import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Blog from './Blogs';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			desc: null,
			projectId: null,
			advisors: null,
			team: null,
		}

		this.parseArrString = this.parseArrString.bind(this);
	}



	componentDidMount() {
		console.log('mount')
		const projectId = this.props.match.params.id;
		this.setState({ projectId });
		setTimeout(() => {
			fetch(`/api/projects/getProjectMetaData/${this.state.projectId}`, {
				method: 'post',
			}).then(result => {
				console.log('result')
				return result.json()
			}).then(response => {
				this.setState({
					name: response.name,
					desc: response.desc,
					image: response.primaryImage,
					advisors: response.advisor,
					team: response.team,
				});
				// This will redirect to err comp
			}).catch(e => console.log(e));
		});
	}

	parseArrString(str) {
		return str.replace(/[\[\]']+/g, '').split(',')
	}

	render() {
		return (
			<div>
				<Header image={this.state.image} title={this.state.name} />
				<main className="container project">
					<div className="title">
						<h1>The Project</h1>
						{/* <hr className="hr"/> */}
					</div>
					<div className="box">
						<div className="box__text">
							{this.state.desc}
						</div>
						<div className="box--center">
							<img src={this.state.image} alt="" className="img-fluid thumbnail" />
						</div>
					</div>

					<div className="title">
						<h1>The Team</h1>
						{/* <hr className="hr"/> */}
					</div>

					<div className="box">
						<div className="box__item">
							<div className="box__text">
								<h2>Advisor(s)</h2>
								<ul>
									{
										this.state.advisors
											? this.parseArrString(this.state.advisors).map((advisor, index) => {
												return (
													<li key={`advisor-${index}`}>{advisor.replace(/["]+/g, '')}</li>
												)
											})

											: 'loading'
									}
								</ul>
							</div>
						</div>
						<div className="box__item">
							<div className="box__text">
								<h2>Student</h2>
								<ul>
									{
										this.state.team
											? this.parseArrString(this.state.team).map((student, index) => {
												return (
													<li key={`student-${index}`}>{student.replace(/["]+/g, '')}</li>
												)
											})

											: 'loading'

									}
								</ul>
							</div>
						</div>
						<div className="box__item">
							<div className="box__text">
								<h2>Contact</h2>
								<ul>
									<li> <a href={"mailto:student@bergen.edu"}> student@bergen.edu</a></li>
								</ul>
							</div>
						</div>
						<div className="box__item">
							<div className="box__text">
								<h2>Meeting Time/Location</h2>
								<ul>
									<li>{"Thursday 6pm"}</li>
									<li>{"Room S-315"}</li>
								</ul>
							</div>
						</div>
					</div>
					<Link className="button--back" to="/projects">&#8672; Back</Link>
				</main>

				{/* <Blog meeting={"Lab room form 9 to 6"} contact={"student@email.com"} />                 */}
			</div>
		);
	}
}

export default Project;
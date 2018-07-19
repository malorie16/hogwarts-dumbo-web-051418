import piggy from '../porco.png'
import React from 'react'

export default class Nav extends React.Component {



		render() {

		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<form>
					<select value={this.props.selectedValue} onChange={(e) => {
							console.log(e.target.value);
							this.props.handleChange(e.target.value)
						}
					}>
						<option value="none" >none</option>
						<option value="name">sort by name</option>
						<option value="w">sort by weight</option>
						<option value="g">filter greased?</option>
					</select>
				</form>
			</div>
		)
	}
}

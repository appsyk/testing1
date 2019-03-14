import React from 'react';

const Spinner = (props) => {
	return (

		<div className="ui active dimmer" >
			<div className="ui text loader" >
			<h1>Loading...</h1>
			</div>
		</div>
	);
};

Spinner.defaultProps = {
	message:"Loading . . ."
}

export default Spinner;
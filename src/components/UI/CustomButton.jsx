import React from 'react';
import './CustomButton.css';

const CustomButton = ({ sign, func }) => {
	return (
		<button className='custom-button' onClick={() => func()}>
			{sign}
		</button>
	);
};

export default CustomButton;

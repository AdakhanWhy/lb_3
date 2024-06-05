import React, { useState } from 'react';
import CustomButton from '../UI/CustomButton';
import './Counter.css';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	function increment() {
		setCounter(prev => prev + 1);
	}

	function dicrement() {
		setCounter(prev => prev - 1);
	}

	return (
		<div className='counter-container'>
			<h2 className='counter-display'>{counter}</h2>
			<CustomButton sign={'+'} func={increment} />
			<CustomButton sign={'-'} func={dicrement} />
		</div>
	);
};

export default Counter;

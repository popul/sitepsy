import React from 'react';

import s from './styles.css';

export default props => {
	return (
		<a 
			className={s.link} 
			target='_blank'
			href={`https://github.com/popul/sitepsy/tree/master/src/components/Pages${props.path}`}>
			Editer
		</a>
	);
}
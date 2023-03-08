import React from 'react';
import './SkillSet.scss';

export type SkillSetProps = {
	skills: string[];
};
export function SkillSet({ skills }: SkillSetProps): JSX.Element {
	return (
		<ul className='skillSet'>
			{skills.map((s, i) => <li key={i}>{s}</li>)}
		</ul>
	);
}
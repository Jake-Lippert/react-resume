import React from 'react';
import './SkillSet.scss';

export type SkillSetProps = {
	skills: string[];
};
export function SkillSet({ skills }: SkillSetProps): JSX.Element {
	return (
		<div className='skillSet'>
			{skills.map((s, i) => <span key={i}>{s}</span>)}
		</div>
	);
}
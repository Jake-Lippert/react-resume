import React from 'react';
import { Location as LocationState, Experience as ExperienceState } from '../../../State/ResumeState';
import { DatedExperience } from '../DatedExperience/DatedExperience';
import { max, min } from 'lodash';
import './Location.scss';

export type LocationProps = {
	location: LocationState;
};
export function Location({ location }: LocationProps): JSX.Element {
	const anyUnbound = location.experience.some(r => r.end === null);

	const dateRange = {
		start: min(location.experience.map(r => r.start)) ?? new Date(),//--Shouldn't really need this with actual data, but the types don't lie
		end: anyUnbound ? null : max(location.experience.map(r => r.end))
	};

	return (
		<div className='location'>
			<h3>
				{location.experience.length > 1 ?
					<DatedExperience
						name={location.name}
						{...dateRange}
					/> :
					location.name
				}
			</h3>

			{location.experience.map((e, i) => <Experience key={i} experience={e} />)}
		</div>
	);
}

export type ExperienceProps = {
	experience: ExperienceState;
};
export function Experience({ experience }: ExperienceProps): JSX.Element {
	return (
		<div className='experience'>
			<h4>
				<DatedExperience {...experience} />
			</h4>

			<ul>
				{experience.details.map((d, i) => <li key={i}>{d}</li>)}
			</ul>
		</div>
	);
}
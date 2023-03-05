import React from 'react';
import { DateRange } from '../../DateRange/DateRange';
import './DatedExperience.scss';

export type DatedExperienceProps = {
	name: string;
	start: Date;
	end?: Date | null;
};
export function DatedExperience({ name, start, end }: DatedExperienceProps): JSX.Element {
	return (
		<div className='datedExperience'>
			<span className='experienceName'>
				{name}
			</span>
			<DateRange className='experienceRange' start={start} end={end} />
		</div>
	);
}
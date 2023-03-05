import React from 'react';
import { ResumeState } from '../../State/ResumeState';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Location } from './Location/Location';
import './Resume.scss';
import { Section } from './Section/Section';
import { SkillSet } from './SkillSet/SkillSet';

export type ResumeProps = {
	resume: ResumeState;
};
export function Resume({ resume }: ResumeProps): JSX.Element {
	return (
		<div className='resume'>
			<div className='heading'>
				<h1>{resume.givenName} {resume.surname}</h1>
				<ContactInfo contactPoints={resume.contactInfo} />
			</div>

			{resume.summary &&
				<Section title='Summary'>
					<p>{resume.summary}</p>
				</Section>
			}
			<Section title='Skills'>
				<SkillSet skills={resume.skills} />
			</Section>

			<Section title='Work Experience'>
				{resume.employers.map((e, i) => <Location key={i} location={e} />)}
			</Section>

			<Section title='Education'>
				{resume.educationalInstitutions.map((ei, i) => <Location key={i} location={ei} />)}
			</Section>
		</div>
	);
}
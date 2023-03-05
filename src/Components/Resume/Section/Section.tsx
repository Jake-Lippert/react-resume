import React, { PropsWithChildren } from 'react';
import './Section.scss';

export type SectionProps = {
	title: string;
};
export function Section({ title, children }: PropsWithChildren<SectionProps>): JSX.Element {
	return (
		<div className='section'>
			<h2>{title}</h2>

			<div className='content'>
				{children}
			</div>
		</div>
	);
}
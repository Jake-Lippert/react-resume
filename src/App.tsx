import React from 'react';
import { Resume } from './Components/Resume/Resume';
import { jakeLippert } from './Data/ResumeData';

export function App(): JSX.Element {
	return (
		<Resume resume={jakeLippert} />
	);
}
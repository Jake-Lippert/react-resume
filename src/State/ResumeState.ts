export type ResumeState = {
	givenName: string;
	surname: string;
	contactInfo: Contact[];
	summary: string | null;
	skills: string[];
	employers: Location[];
	educationalInstitutions: Location[];
};

export type Contact = {
	type: string;
	contact: string;
};

export type Location = {//--Employer and EducationalInstitution had the same basic shape
	name: string;
	experience: Experience[];
};

export type Experience = DateRange & {//--JobRole and Degree had the same basic shape
	name: string;
	details: string[];
};

export type DateRange = {
	start: Date;
	end: Date | null;
};
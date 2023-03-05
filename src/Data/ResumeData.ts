import { ResumeState } from '../State/ResumeState';

export const jakeLippert: ResumeState = {
	givenName: 'Jake',
	surname: 'Lippert',
	contactInfo: [
		//{
		//	type: 'phone',
		//	contact: 'omitted'
		//},
		//{
		//	type: 'address',
		//	contact: 'omitted'
		//},
		{
			type: 'email',
			contact: 'Jake.Lippert@outlook.com'
		},
		{
			type: 'website',
			contact: 'https://github.com/Jake-Lippert'
		}
	],
	summary: 'Architect with twelve years of experience in web development. Focused on clean, testable code, full project scopes, and enabling developer efficiency.  Always looking to expand my personal skillset and those of developers around me.',
	skills: [
		'C#',
		'TypeScript',
		'MS-SQL',
		'CSS',
		'React',
		'Redux',
		'Mui',
		'Knockout',
		'Dapper',
		'Entity Framework',
		'NUnit',
		'Moq',
		'ASP.Net',
		'RESTful APIs',
		'WCF',
		'Windows Services',
		'Git',
		'TFS',
		'PR Review',
		'CI/CD'
	],
	employers: [
		{
			name: 'StreamLink Software',
			experience: [
				{
					name: 'Lead Architect',
					start: new Date(2018, 9, 1),
					end: null,
					details: [
						'Designed and implemented a TypeScript React/Redux SPA to facilitate an in-place conversion from Web Forms partial views and Razor pages to a modern frontend',
						'Rewrote user identity and feature access infrastructure in order to reduce excessive querying down to a single db call per session',
						'Replaced custom, one-off reports with a third party reporting engine pointing at an Azure-mirrored reporting db',
						'Refined overly-complex database schemas in order to improve query performance and developer comprehension',
						'Started transition of codebase from .Net Framework to .Net Core',
						'Standardized templated email construction and pdf generation into reusable utilities',
						'Evaluates current codebase to identify areas needing improvement and builds out the roadmap and estimated timeline for implementation of changes',
						'Reviews pull requests and mentors developers on how to improve their code patterns and skillsets',
						'Analyzes new feature specs to ensure edge cases are accounted for and solid plans are in place for development teams',
						'Works with Dev-Ops team to ensure feature environment CI/CD definitions and releases are providing timely delivery of development progress to QA teams'
					]
				},
				{
					name: 'Senior Software Developer',
					start: new Date(2017, 10, 1),
					end: new Date(2018, 8, 30),
					details: [
						'Designed and built a system for client definition of custom record types and site-wide management of those custom records within existing business object scopes'
					]
				},
				{
					name: 'Software Developer',
					start: new Date(2015, 11, 1),
					end: new Date(2017, 9, 31),
					details: [
						'Identified anti-patterns and developed clean replacements to increase performance',
						'Built a client-side file parser/mapper and an extensible backend to simplify bulk importing of client data',
						'Rewrote site navigation to improve usability and accessibility',
						'Implemented new features for client-facing ASP.Net Razor MVC site',
						'Updated server-rendered Web Forms partial views to Razor views utilizing Knockout '
					]
				}
			]
		},
		{
			name: 'One Call Now',
			experience: [
				{
					name: 'Software Developer',
					start: new Date(2013, 0, 14),
					end: new Date(2015, 10, 30),
					details: [
						'Built a RESTful API backend for a localized single page application capable of scheduling/saving messages, viewing searchable reports, and managing contacts',
						'Led dev-ops improvement projects including automated build/deploy, unit testing, NuGet, branching strategy, and config transforms',
						'Moved payment processing onto a PCI-compliant server and integrated the new site and API into existing sites and services',
						'Split customer-facing system across servers to handle growth and peak-usage events',
						'Implemented new features for customer-facing Web Forms site',
						'Built a push notification service to support message recipient apps',
						'Designed tables, stored procedures, and Entity Framework queries for new development'
					]
				}
			]
		},
		{
			name: 'Ridge Tool',
			experience: [
				{
					name: 'Web Development Intern',
					start: new Date(2008, 4, 1),
					end: new Date(2011, 4, 1),
					details: [
						'Worked on intranet pages used by other departments to help with fiscal analysis and factory floor operations',
						'Implemented new features on public-facing sites including distributor ordering and consumer registration pages',
						'Improved performance and added new business rules to order processing and other services'
					]
				}
			]
		}
	],
	educationalInstitutions: [
		{
			name: 'University of Toledo',
			experience: [
				{
					name: 'B.S. Computer Science',
					start: new Date(2006, 7, 1),
					end: new Date(2012, 11, 1),
					details: [
						'Led software development for the solar car team, built a WCF service and Win Forms application which worked together to distribute electromagnetic motor simulations across ~400 campus computers and analyzed results using a Web Forms site'
					]
				}
			]
		}
	]
};
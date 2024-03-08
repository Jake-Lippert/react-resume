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
	summary: 'Software engineer with thirteen years of experience in web development. Focused on clean, testable code, full project scopes, and enabling developer efficiency.  Always looking to expand my personal skillset and those of developers around me.',
	skills: [
		'C#',
		'TypeScript',
		'MS-SQL',
		'(S)CSS',
		'React',
		'Redux',
		'Mui',
		'AG Grid',
		'Angular',
		'NgRx',
		'Knockout',
		'Dapper',
		'Entity Framework',
		'NUnit',
		'Moq',
		'ASP.Net',
		'RESTful APIs',
		'GraphQL',
		'WCF',
		'Windows Services',
		'Git',
		'TFS',
		'PR Review',
		'CI/CD'
	],
	employers: [
		{
			name: 'Istation',
			experience: [
				{
					name: 'Senior Software Engineer',
					start: new Date(2023, 4, 3),
					end: null,
					details: [
						'Introduced TypeScript and React/Redux within a legacy jQuery frontend to enable modern development efficiencies',
						'Introduced NgRx to coordinate frontend data querying, storage, and aggregation',
						'Driving the frontend transition to a component oriented design to promote code reuse',
						'Analyzed and documented C# data layer to prepare for upcoming db migration from Oracle to PostgreSQL'
					]
				}
			]
		},
		{
			name: 'StreamLink Software / AmpliFund',
			experience: [
				{
					name: 'Lead Software Engineer / Architect',
					start: new Date(2018, 9, 1),
					end: new Date(2023, 4, 2),
					details: [
						'Designed and implemented a TypeScript React/Redux SPA to facilitate an in-place conversion from C# Web Forms partial views and Razor pages to a modern frontend',
						'Rewrote user identity and feature access infrastructure in order to reduce excessive querying down to a single db call per session',
						'Replaced custom, one-off reports with a third party reporting engine pointing at an Azure-mirrored reporting db',
						'Refined overly-complex database schemas in order to improve query performance and developer comprehension',
						'Started transition of codebase from .Net Framework to .Net Core',
						'Standardized templated email construction and pdf generation into reusable utilities backed by an Azure function which enabled parallelization around a library bottleneck',
						'Evaluated current codebase to identify areas needing improvement, built out roadmaps for future projects, and estimated timelines for implementation of changes',
						'Analyzed new feature specs to ensure edge cases are accounted for and solid plans are in place for development teams',
						'Reviewed pull requests and mentored developers on how to improve their code patterns and skillsets across the entire stack',
						'Worked with Dev-Ops team to ensure feature environment CI/CD definitions and releases were providing timely delivery of development progress to QA teams',
						'Removed reliance upon .Net session to avoid session locking and improve page load times'
					]
				},
				{
					name: 'Senior Software Engineer',
					start: new Date(2017, 10, 1),
					end: new Date(2018, 8, 30),
					details: [
						'Designed and built a system for client definition of custom record types and site-wide management of those custom records within existing business object scopes',
						'Built SQL functions for reusable, performant computation of custom record access permissions and their applicability to standard business objects',
						'Created Knockout templates to ensure consistent presentation of custom records across all existing pages'
					]
				},
				{
					name: 'Software Engineer',
					start: new Date(2015, 11, 1),
					end: new Date(2017, 9, 31),
					details: [
						'Used Knockout, C#, and MS SQL to implement new features for a client-facing ASP.Net Razor MVC site hosted within Azure',
						'Improved page load performance from minutes down to seconds by identifying anti-patterns and developing clean replacements, including migration from NHibernate-generated queries to stored procedures accessed via Dapper',
						'Built a client-side file parser/mapper and an extensible C# and SQL backend to simplify bulk importing of client data',
						'Rewrote site navigation to improve usability and accessibility',
						'Updated server-rendered Web Forms partial views to Razor views utilizing Knockout'
					]
				}
			]
		},
		{
			name: 'One Call Now',
			experience: [
				{
					name: 'Software Engineer',
					start: new Date(2013, 0, 14),
					end: new Date(2015, 10, 30),
					details: [
						'Used C# and MS SQL to implement new features for a customer-facing Web Forms site',
						'Built a RESTful .Net API backend for a localized single page application capable of scheduling/saving messages, viewing searchable reports, and managing contacts',
						'Led dev-ops improvement projects including automated build/deploy, unit testing, NuGet, branching strategy, and config transforms',
						'Refactored payment processing into a PCI-compliant .Net site and API',
						'Created a C# Windows service that used MSMQ messages to coordinate payment processing against a thread-limited third party provider',
						'Split customer-facing system across servers to handle growth and peak-usage events',
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
						'Worked on internal C# Web Forms pages used by other departments to help with fiscal analysis and factory floor operations',
						'Implemented new features on public-facing sites including distributor ordering and consumer registration pages',
						'Improved SQL query performance and added new business rules to order processing and other services'
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
						'Led software development for the solar car team, built a WCF service and C# Win Forms application which worked together to distribute electromagnetic motor simulations across ~400 campus computers and analyzed results using a Web Forms site'
					]
				}
			]
		}
	]
};
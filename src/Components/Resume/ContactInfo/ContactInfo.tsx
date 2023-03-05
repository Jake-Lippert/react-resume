import React from 'react';
import { Contact } from '../../../State/ResumeState';
import './ContactInfo.scss';

export type ContactInfoProps = {
	contactPoints: Contact[];
};
export function ContactInfo({ contactPoints }: ContactInfoProps): JSX.Element {
	return (
		<div className='contactInfo'>
			{contactPoints.map((cp, i) => <ContactPoint key={i} {...cp} />)}
		</div>
	);
}

type ContactPointProps = Contact;
function ContactPoint({ type, contact }: ContactPointProps): JSX.Element {
	const sharedProps = {
		id: type,
		className: 'contact'
	};

	return (
		<div>
			<label className='contactType' htmlFor={sharedProps.id}>
				{type}
			</label>
			<ContactBody />
		</div>
	);

	function ContactBody(): JSX.Element {
		switch (type) {
			case 'phone':
				return <a {...sharedProps} href={`tel:${contact}`}>{contact}</a>;
			case 'email':
				return <a {...sharedProps} href={`mailto:${contact}`}>{contact}</a>;
			case 'website':
				return <a {...sharedProps} href={contact} target='_blank' rel='noreferrer'>{contact}</a>;
			default:
				return <span {...sharedProps}>{contact}</span>;
		}
	}
}
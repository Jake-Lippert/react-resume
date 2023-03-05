import { format } from 'date-fns';
import React from 'react';

export type DateRangeProps = {
	className: string;
	start: Date;
	end?: Date | null;
};
export function DateRange({ start, end, className }: DateRangeProps): JSX.Element {
	function formatRoughDate(value: Date): string {
		return format(value, 'MMMM yyyy');
	}

	return (
		<span className={className}>
			{formatRoughDate(start)} &ndash; {end ? formatRoughDate(end) : 'Present'}
		</span>
	);
}
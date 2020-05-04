import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

export const Sidebar = () => {
	return (
		<div calssName="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Nex 7 days</span>
				</li>
			</ul>
			<div className="sidebar__middle">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>
			<ul className="sidebar__project">Projects will be here!</ul>
			Add project component here!
		</div>
	);
};

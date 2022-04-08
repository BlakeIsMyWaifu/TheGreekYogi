export interface SectionData {
	id: string;
	format: number;
}

export interface InfoData extends SectionData {
	text: {
		category: string;
		title: string;
		description: string;
	};
	image: {
		imgStart: boolean;
		img: string;
		alt: string;
	};
	more: {
		title: string;
		description: string[];
	}[];
}
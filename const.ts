export const DEBUGGING = false;

export const MD_COMMANDS: {
	id: string;
	name: string;
	before: string;
	after: string;
}[] = [
	{
		id: "smarter-asterisk-bold",
		name: "Smarter Bold",
		before: "**",
		after: "**",
	},
	{
		id: "smarter-underscore-bold",
		name: "Smarter Underscore Bold",
		before: "__",
		after: "__",
	},
	{
		id: "smarter-asterisk-italics",
		name: "Smarter Italics",
		before: "*",
		after: "*",
	},
	{
		id: "smarter-underscore-italics",
		name: "Smarter Underscore Italics",
		before: "_",
		after: "_",
	},
	{
		id: "smarter-comments",
		name: "Smarter Comments",
		before: "%%",
		after: "%%",
	},
	{
		id: "smarter-html-comments",
		name: "Smarter HTML Comments",
		before: "<!--",
		after: "-->",
	},
	{
		id: "smarter-inline-code",
		name: "Smarter Code (Inline/Fenced)",
		before: "`",
		after: "`",
	},
	{
		id: "smarter-highlight",
		name: "Smarter Highlight",
		before: "==",
		after: "==",
	},
	{
		id: "smarter-bold-highlight",
		name: "Smarter Bold & Highlight",
		before: "**==",
		after: "==**",
	},
	{
		id: "smarter-italics-highlight",
		name: "Smarter Italics & Highlight",
		before: "*==",
		after: "==*",
	},
	{
		id: "smarter-strikethrough",
		name: "Smarter Strikethrough",
		before: "~~",
		after: "~~",
	},
	{
		id: "smarter-wikilink",
		name: "Smarter Wikilink",
		before: "[[",
		after: "]]",
	},
	{
		id: "smarter-wikilink-heading",
		name: "Smarter Wikilink to Heading",
		before: "[[##",
		after: "]]",
	},
	{
		id: "smarter-wikilink-heading",
		name: "Smarter Embedded Wikilink",
		before: "![[",
		after: "]]",
	},
	{
		id: "smarter-md-link",
		name: "Smarter Markdown Link/Image",
		before: "[",
		after: "]()",
	},
	{
		id: "smarter-math",
		name: "Smarter Mathjax",
		before: "$",
		after: "$",
	},
	{
		id: "smarter-callout-label",
		name: "Smarter Callout Label",
		before: "> [!",
		after: "]\n> ",
	},
	{
		id: "smarter-quotation-marks",
		name: "Smarter Double Quotation Mark",
		before: "\"",
		after: "\"",
	},
	{
		id: "smarter-single-quotation-marks",
		name: "Smarter Single Quotation Mark",
		before: "'",
		after: "'",
	},
	{
		id: "smarter-round-brackets",
		name: "Smarter Round Brackets",
		before: "(",
		after: ")",
	},
	{
		id: "smarter-square-brackets",
		name: "Smarter Square Brackets",
		before: "[",
		after: "]",
	},
	{
		id: "smarter-curly-brackets",
		name: "Smarter Curly Brackets",
		before: "{",
		after: "}",
	},

	// leave "after" key empty for special commands that do not actually insert text
	// so trimSelection does not apply trimming to them
	{
		id: "smarter-delete",
		name: "Smarter Delete Text",
		before: "delete",
		after: "",
	},
	{
		id: "smarter-upper-lower",
		name: "Smarter Case Switch",
		before: "case-switch",
		after: "",
	},
	{
		id: "smarter-insert-new-line",
		name: "Smarter Insert New Line",
		before: "new-line",
		after: "",
	},
	{
		id: "smarter-toggle-heading",
		name: "Increase Heading Level",
		before: "heading",
		after: "increase",
	},
	{
		id: "smarter-toggle-heading-reverse",
		name: "Decrease Heading Level",
		before: "heading",
		after: "decrease",
	}
];

export const OTHER_COMMANDS: {
	id: string;
	name: string;
}[] = [
	{
		id: "smarter-delete-current-file",
		name: "Smarter Delete Current File",
	},
	{
		id: "smarter-copy-path",
		name: "Smarter Copy Relative/Absolute Path",
	},
	{
		id: "toggle-line-numbers",
		name: "Toggle Line Numbers",
	},
	{
		id: "toggle-readable-line-length",
		name: "Toggle Readable Line Length",
	},
	{
		id: "smarter-copy-file-name",
		name: "Smarter Copy File Name",
	},
	{
		id: "smarter-follow-link",
		name: "Smarter Follow Link",
	},
	{
		id: "hide-notice",
		name: "Hide all Notices",
	}
];

export const URL_REGEX = /^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))$/i;

// RegEx to parse out any of the following:
// * direct links, e.g. https://obsidian.md
// * markdown links, e.g. [Link](https://example.com)
// * (aliased) internal links, e.g. [[Internal Link]] or [[Internal Link|aliased]]
export const LINK_REGEX = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))|(?:\[[^[]+\]\((.*?)\))|(?:\[\[(.*?)(?:\|.*?)?\]\])/g;

export const TRIMBEFORE = [
	"\"",
	"(",
	"[",
	"###### ",
	"##### ",
	"#### ",
	"### ",
	"## ",
	"# ",
	"- [ ] ",
	"- [x] ",
	"- ",
	">",
	" ",
	"\n",
	"\t"
];

export const TRIMAFTER = [
	"\"",
	")",
	"](", // to not break markdown links
	"::", // preseve dataview inline fields
	"]",
	"\n",
	"\t",
	" "
];

export const EXPANDWHENOUTSIDE = [
	["#", ""],
	["[[", "]]"],
	["", "]]"],
	["[[", ""],
	["\"", "\""],
	["'", "'"],
	["(", ")"],
	["$", ""],
	["", "€"],
	// extra spaces are trimmed seperately later, only there to avoid conflict with TRIM_AFTER values
	["", ": ", "trim_last_space"], // dataview inline field exception
	["[", "] ", "trim_last_space"] // md link exception
];

export const IMAGEEXTENSIONS = [
	"png",
	"jpg",
	"jpeg",
	"gif",
	"tiff"
];


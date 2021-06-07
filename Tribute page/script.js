const list_of_content = [
	{
		year: "1981",
		achievement: "The Government of India honoured him with the Padma Bhushan.",
		by: "",
	},
	{
		year: "1990",
		achievement:
			"The Government of India honoured him with the Padma Vibhushan for his work with ISRO and DRDO and his role as a scientific advisor to the Government.",
		by: "",
	},
	{
		year: "1997",
		achievement:
			"He received India's highest civilian honour, the Bharat Ratna, for his contribution to the scientific research and modernisation of defence technology in India.",
		by: "",
	},
	{
		year: "2013",
		achievement:
			'he was the recipient of the Von Braun Award from the National Space Society "to recognize excellence in the management and leadership of a space-related project".',
		by: "",
	},
	{
		year: "2012",
		achievement:
			"Kalam was ranked number 2 in Outlook India's poll of the Greatest Indian.",
		by: "",
	},
	{
		year: "2014",
		achievement: "Honorary professor",
		by: "Beijing University, China",
	},
	{
		year: "2014	",
		achievement: "Doctor of Science",
		by: "Edinburgh University, UK",
	},
	{
		year: " 2013	",
		achievement: "Von Braun Award	",
		by: "National Space Society",
	},
	{
		year: "2012		",
		achievement: "Doctor of Laws (Honoris Causa)",
		by: "Simon Fraser University",
	},
	{
		year: "2011	",
		achievement: "IEEE Honorary Membership",
		by: "IEEE",
	},
	{
		year: "2010		",
		achievement: "Doctor of Engineering",
		by: "University of Waterloo",
	},
	{
		year: "2009		",
		achievement: "Honorary Doctorate",
		by: "Oakland University",
	},
];

list_of_content.sort((a, b) => parseInt(a.year) - parseInt(b.year));

for (let i = 0; i < list_of_content.length; i++) {
	const listItem = document.createElement("li");
	const year = document.createElement("strong");
	year.textContent = list_of_content[i].year;
	listItem.append(year);
	if (list_of_content[i].year.length) listItem.append(" - ");
	listItem.append(list_of_content[i].achievement);
	if (list_of_content[i].by.length) listItem.append(" by ");
	listItem.append(list_of_content[i].by);
	document.getElementById("list").append(listItem);
}

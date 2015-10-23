
var liPicURL = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/07e/3c2/079c43f.jpg"
var skills = ["awesomeness", "programming", "teaching", "JS"];
var bioWelcome = "Hale and fare well!";

var bio = {
	"name" : "Daniel Henry",
	"role" : "Sr. Project Manager",
	"contacts" : {
		"email" : "dhenry@gmail.com",
		"mobile" : "+1(504)-931-6235",
		"twitter" : "@dhenrydc , @ict4dev",
		"github" : "dhenrygithub",
		"linkedIn" : "dhenry",
		"location" : {
			"city" : "New Orleans",
			"state" : "LA",
			"zip" : "70117"
		}
	},
	"picURL" : liPicURL,
	"welcomeMessage" : bioWelcome,
	"age" : 50,
	"skills" : skills
};

var work = {
	jobs : [
		{
			"employer" : "ACME Rentals",
			"title" : "Plasterer",
			"location" : "Portland, OR",
			"dateBegin" : "January 1, 1980",
			"dateEnd" : "December 31, 1999",
			get dates () {
    			return this.dateBegin + " - " + this.dateEnd;
  				},
			"description" : "Plastered walls."
		},
		{
			"employer" : "Baker Rentals",
			"title" : "Carpenter",
			"location" : "Chicago, IL",
			"dateBegin" : "January 1, 2000",
			"dateEnd" : "November 12, 2001",
			get dates () {
    			return this.dateBegin + " - " + this.dateEnd;
  				},
			"description" : "Framed up walls."
		}
	]

};

var projects = {
	"projects" : [
	{
		"title" : "Best Project",
		"dateBegin" : "January 1, 1980",
		"dateEnd" : "January 1, 1980",
		get dates () {
   			return this.dateBegin + " - " + this.dateEnd;
			},
		"description" : "Did some stuff",
		"images" : [
		"http://i375.photobucket.com/albums/oo196/dhenrydc/MinecraftModQ_zpsomui6dsi.png",
		"http://i375.photobucket.com/albums/oo196/dhenrydc/MinecraftModQ_zpsomui6dsi.png",
		"http://i375.photobucket.com/albums/oo196/dhenrydc/MinecraftModQ_zpsomui6dsi.png",
		"http://i375.photobucket.com/albums/oo196/dhenrydc/MinecraftModQ_zpsomui6dsi.png"
		]
	},
	{
		"title" : "Wost Project",
		"dateBegin" : "January 1, 1980",
		"dateEnd" : "January 1, 1980",
		get dates () {
   			return this.dateBegin + " - " + this.dateEnd;
			},
		"description" : "Did some stuff",
		"images" : [
		"http://i375.photobucket.com/albums/oo196/dhenrydc/MinecraftModQ_zpsomui6dsi.png",
		"http://imgur.com",
		"http://imgur.com",
		"http://imgur.com"
		]
	}
	]
}

var education = { 
	"schools" : [
	{
	"name" : "University of New Orleans",
	"location" : "New Orleans",
	"degree" : "Bachelors of Science",
	"dates" : "1984-1987",
	"yearsAttended" : 4.0,
	"yearGraduated" : "1987",
	"majors" : [ "Computer Science" ],
	"minors" : [ "Business Administration" ],
	"url" : "http://www.uno.edu"
	},
	{
	"name" : "University of New Orleans",
	"location" : "New Orleans",
	"dates" : "1989-1990",
	"degree" : "Masters of Science",
	"yearsAttended" : 1.5,
	"yearGraduated" : null,
	"majors" : [ "Computer Science" ],
	"minors" : [ ],
	"url" : "http://www.uno.edu"
	} 
	],
	"onlineCourses" : [
	{
		"title" : "Beginning Javascript",
		"school" : "Udacity",
		"dates" : "2015",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
	},
	{
		"title" : "CompTIA CASP",
		"school" : "CompTIA",
		"dates" : "2015",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
	}
	]
};

projects.display = function () {
	if ( projects.projects.length > 0 ) {
		for ( proj in projects.projects ) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			};
		}
	}
}
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
$("#topContacts").append(formattedLinkedIn);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").append(formattedBioPic);

//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
//$("#header").append(formattedSkills);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);

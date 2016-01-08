
var work = {
  "jobs": [
    {
      "employer": "Employer",
      "title": "Front-end Developer",
      "location": "SF Bay Area",
      "dates": "2009",
      "description": "Stuff about my job."
    },
    {
      "employer": "Employer",
      "title": "Front-end Developer",
      "location": "SF Bay Area",
      "dates": "2009",
      "description": "Stuff about my job."
    }
  ]
};

 var projects = {
   "projects": [
     {
      "title": "Random1",
      "dates": "2015",
      "description": "Description for my project.",
      "images": ["img/portfolio1_full.jpg", "img/portfolio1_thumb.jpg"]
    },
    {
      "title": "Random2",
      "dates": "2014",
      "description": "Description for my project.",
      "images": ["img/portfolio2_full.jpg", "img/portfolio2_thumb.jpg"]
    },
    {
      "title": "Random3",
      "dates": "2013",
      "description": "Description for my project.",
      "images": ["img/portfolio3_full.jpg", "img/portfolio3_thumb.jpg"]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "UCSB",
      "location": "SB",
      "degree": "BA",
      "majors": ["Communication"],
      "dates": "2001-2001",
      "url": "college.com"
    },
    {
      "name": "UCSB",
      "location": "SB",
      "degree": "BA",
      "majors": ["Communication"],
      "dates": "2001-2001",
      "url": "college.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JS",
      "school": "Udacity",
      "date": "3/2015",
      "url": "myonlinecourse.com"
    }
  ]
};

var bio = {
  "name": "Audrey Klammer",
  "role": "Front-end Developer",
  "contacts": {
    "mobile": "206-962-0792",
    "email": "audrey@gmail.com",
    "github": "klammertime",
    "twitter": "@klammertime",
    "location": "SF Bay Area"
  },
    "welcomeMessage": "This is my welcome message.",
    "skills": [
      "JavaScript", "HTML5", "jQuery", "Responsive Web Design"
    ],
    "bioPic": "img/audreyKlammer_full.jpg"
};

bio.display = function(){
  var nameTitle = HTMLheaderName.replace("%data%", bio.name) +
                HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(nameTitle);
  var obj = bio.contacts;
  var myContact = HTMLmobile.replace("%data%", obj.mobile);
      myContact += HTMLemail.replace("%data%", obj.email);
      myContact += HTMLtwitter.replace("%data%", obj.twitter);
      myContact += HTMLgithub.replace("%data%", obj.github);
      myContact += HTMLlocation.replace("%data%", obj.location);
  $("#topContacts").append(myContact);
  $("#footerContacts").append(myContact);
  var picWelcome = HTMLbioPic.replace("%data%", bio.bioPic) +
                   HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(picWelcome);
  if(bio.skills.length) {
    $("#header").append(HTMLskillsStart);
    var mySkill = "";
    for(var i = 0; i < bio.skills.length; i++){
      mySkill += HTMLskills.replace("%data%", bio.skills[i]);
    }
    $("#skills").append(mySkill);
  }
};

education.display = function(){
  for(school in education.schools){
    var obj = education.schools;
    if (obj.hasOwnProperty(school)) {
          $("#education").append(HTMLschoolStart);
          var myDegree = HTMLschoolName.replace("%data%", obj[school].name);
              myDegree += HTMLschoolDegree.replace("%data%", obj[school].degree);
              myDegree += HTMLschoolDates.replace("%data%", obj[school].dates);
              myDegree += HTMLschoolLocation.replace("%data%", obj[school].location);
              myDegree += HTMLschoolMajor.replace("%data%", obj[school].majors[0]);
          $(".education-entry:last").append(myDegree);
    }
  }

  for(school in education.onlineCourses){
    var obj = education.onlineCourses;
    if (obj.hasOwnProperty(school)) {
          var myCourse = HTMLonlineClasses + HTMLonlineTitle.replace("%data%", obj[school].title);
              myCourse += HTMLonlineSchool.replace("%data%", obj[school].school);
              myCourse += HTMLonlineDates.replace("%data%", obj[school].date);
              myCourse += HTMLonlineURL.replace("%data%", obj[school].url);
          $(".education-entry:last").append(myCourse);
    }
  }
};

work.display = function(){
  for(job in work.jobs){
    var obj = work.jobs;
    if (obj.hasOwnProperty(job)) {
          $("#workExperience").append(HTMLworkStart);
          var myJob = HTMLworkEmployer.replace("%data%", obj[job].employer);
              myJob += HTMLworkTitle.replace("%data%", obj[job].title);
              myJob += HTMLworkDates.replace("%data%", obj[job].dates);
              myJob += HTMLworkLocation.replace("%data%", obj[job].location);
              myJob += HTMLworkDescription.replace("%data%", obj[job].description);
          $(".work-entry:last").append(myJob);
    }
  }
};

projects.display = function(){
  $("#projects").append(HTMLimageViewerStart);
  $("#photo-viewer").after(HTMLimageViewerContainer);
/* photoviewer inserted here. Adapted from book "JavaScript & jQuery" by Jon Duckett */
    for(project in projects.projects){
    var obj = projects.projects;
    if (obj.hasOwnProperty(project)) {
            var myProject = HTMLimageLink.replace("%data%", obj[project].images[0]);
                myProject += HTMLimageTitle.replace("%data%", obj[project].title);
                myProject += HTMLimageThumb.replace("%data%", obj[project].images[1]);
                myProject += HTMLimageThumbAlt.replace("%data%", obj[project].title);
            $("#thumbnails").prepend(myProject);
    }
  }
    for(project in projects.projects){
    var obj = projects.projects;
    if (obj.hasOwnProperty(project)) {
          $("#projects").append(HTMLprojectStart);
          var myProject = HTMLprojectTitle.replace("%data%", obj[project].title);
              myProject += HTMLprojectDates.replace("%data%", obj[project].dates);
              myProject += HTMLprojectDescription.replace("%data%", obj[project].description);
          $(".project-entry:last").append(myProject);
    }
  }
};


work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);

// $("#main").append(internationalizeButton);


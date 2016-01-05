
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

 var portfolio = {
   "projects": [
     {
      "title": "Random",
      "dates": "url",
      "description": "Description",
      "image": "img/portfolio2_960.jpg"
    },
    {
      "title": "Random",
      "dates": "url",
      "description": "Description",
      "image": "img/portfolio2_960.jpg"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "UCSB",
      "degree": "BA",
      "dates": "4",
      "location": "city",
      "major": "JS"
    },
    {
      "name": "UCSB",
      "degree": "BA",
      "dates": "4",
      "location": "city",
      "major": "JS"
    }
  ],
  "onlineCourses": [
    {
      "title": "JS",
      "school": "placeholder",
      "dates": "x",
      "url": "x"
    }
  ]
};

var bio = {
  "name": "Audrey Klammer",
  "role": "Front-end Developer",
  "contacts": {
    "mobile": "206-962-0792",
    "email": "audrey@gmail.com",
    "twitter": "@klammertime",
    "github": "klammertime",
    "blog": "audreyklammer.com",
    "location": "SF Bay Area"
  },
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "hi",
    "skills": [
      "JavaScript", "HTML5"
    ],
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
      myContact += HTMLblog.replace("%data%", obj.blog);
      myContact += HTMLlocation.replace("%data%", obj.location);
  $("#topContacts").append(myContact);
  var picWelcome = HTMLbioPic.replace("%data%", bio.bioPic) +
                   HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(picWelcome);
  if(bio["skills"].length) {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio["skills"].length; i++){
      var mySkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(mySkill);
    }
  }
};









education.display = function(){
  for(school in education.onlineCourses){
    var obj = education.onlineCourses;
    if (obj.hasOwnProperty(school)) {
          var myCourse = HTMLonlineClasses + HTMLonlineTitle.replace("%data%", obj[school].title);
              myCourse += HTMLonlineSchool.replace("%data%", obj[school].school);
              myCourse += HTMLonlineDates.replace("%data%", obj[school].dates);
              myCourse += HTMLonlineURL.replace("%data%", obj[school].url);
          $(".education-entry:last").append(myCourse);
    }
  }

  for(school in education.schools){
    var obj = education.schools;
    if (obj.hasOwnProperty(school)) {
          $("#education").append(HTMLschoolStart);
          var myDegree = HTMLschoolName.replace("%data%", obj[school].name);
              myDegree += HTMLschoolDegree.replace("%data%", obj[school].degree);
              myDegree += HTMLschoolDates.replace("%data%", obj[school].dates);
              myDegree += HTMLschoolLocation.replace("%data%", obj[school].location);
              myDegree += HTMLschoolMajor.replace("%data%", obj[school].major);
          $(".education-entry:last").append(myDegree);
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


portfolio.display = function(){
  for(project in portfolio.projects){
    var obj = portfolio.projects;
    if (obj.hasOwnProperty(project)) {
          $("#projects").append(HTMLprojectStart);
          var myProject = HTMLprojectTitle.replace("%data%", obj[project].title);
              myProject += HTMLprojectDates.replace("%data%", obj[project].dates);
              myProject += HTMLprojectDescription.replace("%data%", obj[project].description);
              myProject += HTMLprojectImage.replace("%data%", obj[project].image);
          $(".project-entry:last").append(myProject);
    }
  }
};

work.display();
portfolio.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

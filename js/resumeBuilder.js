!function() {
    var work,
        projects,
        education,
        bio;

    work = {
        "jobs": [{
            "employer": "Employer",
            "title": "Front-end Developer",
            "location": "SF Bay Area",
            "dates": "2009",
            "description": "Stuff about my job."
        }, {
            "employer": "Employer",
            "title": "Front-end Developer",
            "location": "SF Bay Area",
            "dates": "2009",
            "description": "Stuff about my job."
        }]
    };

    projects = {
        "projects": [{
            "title": "Random1",
            "dates": "2015",
            "description": "Description for my project.",
            "images": ["img/portfolio1_full.jpg", "img/portfolio1_thumb.jpg"]
        }, {
            "title": "Random2",
            "dates": "2014",
            "description": "Description for my project.",
            "images": ["img/portfolio2_full.jpg", "img/portfolio2_thumb.jpg"]
        }, {
            "title": "Random3",
            "dates": "2013",
            "description": "Description for my project.",
            "images": ["img/portfolio3_full.jpg", "img/portfolio3_thumb.jpg"]
        }]
    };

    education = {
        "schools": [{
            "name": "UCSB",
            "location": "SB",
            "degree": "BA",
            "majors": ["Communication"],
            "dates": "2001-2001",
            "url": "college.com"
        }, {
            "name": "UCSB",
            "location": "SB",
            "degree": "BA",
            "majors": ["Communication"],
            "dates": "2001-2001",
            "url": "college.com"
        }],
        "onlineCourses": [{
            "title": "JS",
            "school": "Udacity",
            "date": "3/2015",
            "url": "myonlinecourse.com"
        }]
    };

    bio = {
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
        "biopic": "img/audreyKlammer_full.jpg"
    };

    bio.display = function() {
        var obj,
            nameTitle,
            myContact,
            picWelcome,
            mySkill = "";
        nameTitle = HTMLheaderName.replace("%data%", bio.name) +
            HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(nameTitle);
        obj = bio.contacts;
        myContact = HTMLmobile.replace("%data%", obj.mobile);
        myContact += HTMLemail.replace("%data%", obj.email);
        myContact += HTMLtwitter.replace("%data%", obj.twitter);
        myContact += HTMLgithub.replace("%data%", obj.github);
        myContact += HTMLlocation.replace("%data%", obj.location);
        $("#topContacts").append(myContact);
        $("#footerContacts").append(myContact);
        picWelcome = HTMLbioPic.replace("%data%", bio.biopic) +
            HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(picWelcome);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(val, ind, arr) {
                mySkill += HTMLskills.replace("%data%", val);
            });
            $("#skills").append(mySkill);
        }
    };

    education.display = function() {
        education.schools.forEach(function(val, ind, arr) {
            var myDegree;
            $("#education").append(HTMLschoolStart);
            myDegree = HTMLschoolName.replace("%data%", val.name);
            myDegree += HTMLschoolDegree.replace("%data%", val.degree);
            myDegree += HTMLschoolDates.replace("%data%", val.dates);
            myDegree += HTMLschoolLocation.replace("%data%", val.location);
            myDegree += HTMLschoolMajor.replace("%data%", val.majors[0]);
            $(".education-entry:last").append(myDegree);
        });

        education.onlineCourses.forEach(function(val, ind, arr) {
            var myCourses;
            myCourse = HTMLonlineClasses + HTMLonlineTitle.replace("%data%", val.title);
            myCourse += HTMLonlineSchool.replace("%data%", val.school);
            myCourse += HTMLonlineDates.replace("%data%", val.date);
            myCourse += HTMLonlineURL.replace("%data%", val.url);
            $(".education-entry:last").append(myCourse);
        });
    };

    work.display = function() {
        work.jobs.forEach(function(val, ind, arr) {
            var myJob;
            $("#workExperience").append(HTMLworkStart);
            myJob = HTMLworkEmployer.replace("%data%", val.employer);
            myJob += HTMLworkTitle.replace("%data%", val.title);
            myJob += HTMLworkDates.replace("%data%", val.dates);
            myJob += HTMLworkLocation.replace("%data%", val.location);
            myJob += HTMLworkDescription.replace("%data%", val.description);
            $(".work-entry:last").append(myJob);
        });
    };

    projects.display = function() {
        var myProject;
        $("#projects").append(HTMLimageViewerStart);
        $("#photo-viewer").after(HTMLimageViewerContainer);
        /* photoviewer inserted here. Adapted from book "JavaScript & jQuery" by Jon Duckett */

        projects.projects.forEach(function(val, ind, arr) {
            myProject = HTMLimageLink.replace("%data%", val.images[0]);
            myProject += HTMLimageTitle.replace("%data%", val.title);
            myProject += HTMLimageThumb.replace("%data%", val.images[1]);
            myProject += HTMLimageThumbAlt.replace("%data%", val.title);
            $("#thumbnails").prepend(myProject);
        });

        projects.projects.forEach(function(val, ind, arr) {
            $("#projects").append(HTMLprojectStart);
            myProject = HTMLprojectTitle.replace("%data%", val.title);
            myProject += HTMLprojectDates.replace("%data%", val.dates);
            myProject += HTMLprojectDescription.replace("%data%", val.description);
            $(".project-entry:last").append(myProject);
        });
    };

    work.display();
    projects.display();
    education.display();
    bio.display();

    $("#mapDiv").append(googleMap);
}();
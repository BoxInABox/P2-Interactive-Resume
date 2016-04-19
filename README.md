#Interactive Resume

**Project 2:  Interactive Resume (29 hrs)** ~ [Udacity Front End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)

**Project 2**: [Udacity Front End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)

**Directions**: You will develop an interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. You will use objects, functions, conditionals, and control structures to compose and control structures to compose the content that will display on the resume.

Usage
-----
Navigate to project hosted on github.com [**here**](http://klammertime.github.io/P2-Interactive-Resume/)

**OR**

1. Clone this repository
2. Navigate to your local copy of index.html through your web browser 


##Technologies Used

JavaScript, jQuery, JSON, Flexbox, responsive images, Gulp, Unsplash images and HTML5.

## Resources & Future Improvements: 
* **Udacity Supporting Courses**: [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804), [Intro to jQuery](https://www.udacity.com/course/intro-to-jquery--ud245)
* I added a photoviewer adapted from book "JavaScript & jQuery" by Jon Duckett.
* I looked into **Javascript Templates** ([Lynda.com - jQuery templates, Mustache.js and Handlebars](http://www.lynda.com/Web-Interaction-Design-tutorials/Welcome/156166/171019-4.html?)) and in the future I'd like to use **Handlebars** and **Bootstrap** for projects like this. Here are some good resources: [JavaScript Templating with Handlebars](https://app.pluralsight.com/library/courses/handlebars-javascript-templating/table-of-contents) & [Extending Bootstrap with CSS, JavaScript, and jQuery](https://app.pluralsight.com/library/courses/extending-bootstrap-css-javascript-jquery/table-of-contents)

## Udacity Project Requirements
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

1. Build four JSON objects, each one representing a different resume section. The objects that you create need to follow the schema below exactly. Property names are case-sensitive. Make sure your JSON objects are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (works with a hyphen between them)
                 description: string
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each JSON object and append its information to index.html in the correct section.
 * First off, you’ll be using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
* You’ll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
* Here’s an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
3. All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.


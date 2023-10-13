var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var worklinks = document.getElementsByClassName("work-links");
var workcontents = document.getElementsByClassName("work-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
 var project = {
    tag: '',
    url: '',
    title: '',
    image: ''
  };

  function ProjectsComponent() {
    this.projects = [
        { tag: 'html', url: 'https://incubationwork.github.io/viji/project1/webpage.html', title: 'Flickr', image: 'images/projects/flickr.png' },
        { tag: 'angular', url: 'https://tulipnila.github.io/angularprojects/parent', title: 'Select Coordinates', image: 'images/projects/coordinates.png' },
        { tag: 'javascript', url: 'projects/countdown.png', title: 'Countdown Timer', image: 'images/projects/Countdown.png' },
        { tag: 'angular', url: 'https://tulipnila.github.io/weatherapp/home', title: 'Weather App', image: 'images/projects/weatherapp.png' },
        { tag: 'angular', url: 'https://tulipnila.github.io/currencyconverter/', title: 'Currency Converter', image: 'images/projects/currencyconvert.png' },
        // { tag: 'javascript', url: 'projects/bank.png', title: 'Javascript Assignments', image: 'images/projects/javascriptassigns.png' },
        // { tag: 'javascript', url: 'projects/bank.png', title: 'Online Banking', image: 'images/projects/bank.png' },
    ];

    this.filteredProjects = this.projects.slice(); // Create a shallow copy of projects

    this.filterProjects = function (tag) {
      this.filteredProjects = (tag === '*') ?
        this.projects.slice() :
        this.projects.filter(function (item) {
          return item.tag === tag;
        });
      renderProjects();
    };
  }
// Instantiate the ProjectsComponent
var projectsComponent = new ProjectsComponent();

// Function to render projects
function renderProjects() {
    var projectsDiv = document.getElementById('projectsContainer');
    var projects = projectsComponent.filteredProjects;

    projectsDiv.innerHTML = '';

    projects.forEach(function (item) {
      var projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <div class="single-work text-center mt-30">
          <div class="work-image">
            <img src="${item.image}" width="250" height="200">
          </div>
          <div class="work-overlay">
            <div class="work-content">
              <h3 class="work-title"> <a href="${item.url}" class="image-popup"> ${item.title}</a></h3>
            </div>
          </div>
        </div>
      `;
      projectsDiv.appendChild(projectElement);
    });
}

// Initial render
renderProjects();

  // Function to filter projects by tag
  function filterProjects(tag) {
    projectsComponent.filterProjects(tag);
  } 

  var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }
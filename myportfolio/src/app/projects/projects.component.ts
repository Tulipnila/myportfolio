import { Component } from '@angular/core';

interface project {
  tag:string,
  url:string,
  title:string,
  image:string,
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:project[]=[
    { tag: 'html', url: 'https://incubationwork.github.io/viji/project1/webpage.html', title: 'Flickr',image:'./assets/projects/flickr.png' },
    { tag: 'angular', url: 'https://tulipnila.github.io/angularprojects/parent', title: 'Select Coordinates',image:'./assets/projects/coordinates.png' },
    { tag: 'javascript', url: 'projects/countdown.png', title: 'Countdown Timer',image:'./assets/projects/Countdown.png' },
    { tag: 'angular', url: 'https://tulipnila.github.io/weatherapp/home', title: 'Weather App',image:'./assets/projects/weatherapp.png' },
    { tag: 'angular', url: 'https://tulipnila.github.io/currencyconverter/', title: 'Currency Converter',image:'./assets/projects/currencyconvert.png' },
    { tag: 'javascript', url: 'projects/bank.png', title: 'Javascript Assignments',image:'./assets/projects/javascriptassigns.png' },
    { tag: 'javascript', url: 'projects/bank.png', title: 'Javascript Assignments',image:'' },

  ];

  filteredProjects: project[]=this.projects;

  filterProjects(tag: string) {
    this.filteredProjects = (tag === '*') ?
      this.projects :
      this.projects.filter(item => item.tag === tag);
  }
}

import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { skill } from '../services/data.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillData:skill[]=[
    {name:'HTML', level:'Expert', rating:90},
    {name:'CSS', level:'Expert', rating:90},
    {name:'Javascript', level:'Expert', rating:85},
    {name:'Angular', level:'Expert', rating:80},
  ];
  ngOnInit(): void {
    
  }
}

import { Component } from '@angular/core';
import { study, work } from '../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  studies:study[]=[
    {
      course: 'Bachelor of Commerce with Computer Application',
      university: 'Manonmaniam Sundaranar University',
      batch: '2013-2016',
      percentage: 69
    },
    {
      course: 'HSC',
      university: 'Chidambaranar Memorial Higher Secondary School',
      batch: '2012-2013',
      percentage: 73.5
    },{
      course: 'SSLC',
      university: 'Chidambaranar Memorial Higher Secondary School',
      batch: '2010-2011',
      percentage: 69
    }
  ]
  numbers:number[]=[1,2,3,4,5];
  works:work[]=[
    {
      period: '2023 April - still ',
      designation: 'Incubation Trainee',
      experience:'6 Months Experience as an Incubation Trainee in Zoho Corporation Pvt Ltd, Thenkasi. '
    },
    {
     period:'2016 December - 2020 January',
     designation: 'Accountant',
     experience:'3 Years of Accounting Experience in Sri Muthu Vinayagar Spring Spare Parts, Thoothukudi.'
    },
  ];
}

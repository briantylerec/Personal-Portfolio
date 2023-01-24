import { Component,  OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/es';

@Component({
  selector: 'app-skills', 
  templateUrl: './skills.component.html', 
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[
      {name:"Android", percent:80, remark:'very-good'}, 
      {name:"Java", percent:60, remark:'good'}, 
      {name:"Kotlin", percent:60, remark:'good'}, 
      {name:"C++, Python", percent:40, remark:'average'},  
      {name:"Angular, Spring-Boot, CSS",  percent:30, remark:'basic'}], 

    tools:[
      {name:"Git", percent:60, remark:'good'}, 
      {name:"Power Bi", percent:40, remark:'average'}, 
      {name:"MySql, PgSql, G-DB", percent:40, remark:'average'}, 
      {name:"Docker, Kubernetes", percent:30, remark:'basic'},
      {name:"Linux, Windows, Office", percent:80, remark:'very-good'}],  

      others:[
      {name:"Scrum", percent:80, remark:'very-good'}, 
      {name:"TDD, DDD, SBE", percent:40, remark:'average'}, 
      {name:"GCP, Firebase, Azure, AWS", percent:40, remark:'average'}, 
      {name:"Flutter, iOs, Vue", percent:40, remark:'average'}, 
      {name:"DevOps, CI/CD", percent:40, remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english,  french);
  }

  ngOnInit(): void {
  }

}

    
    
  

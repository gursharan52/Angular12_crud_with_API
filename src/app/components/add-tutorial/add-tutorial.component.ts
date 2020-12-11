import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    sr_no: '',
    first_name: '',
    last_name:'',
    email:''
  };
  submitted = false;
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      sr_no: this.tutorial.sr_no,
      first_name: this.tutorial.first_name,
      last_name: this.tutorial.last_name,
      email:this.tutorial.email
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
          this.submitted = true;
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      sr_no: '',
      first_name: '',
      last_name: '',
      email: ''
    };
  }

}

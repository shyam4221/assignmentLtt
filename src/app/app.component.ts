
import { Component,OnInit  } from '@angular/core';
import { UserService } from './user.service';
import {Userlist} from './userlist'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AssignmentGithub';

  constructor(private userService: UserService){}
  users:{} |any;
  ngOnInit(){
    debugger;
    this.userService.getUsers().subscribe(data=>{
      
      this.users=data;
     
    console.log(this.users)
    
    })
    
    
    
}




}

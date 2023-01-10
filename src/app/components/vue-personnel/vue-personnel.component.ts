import { Component, OnInit } from '@angular/core';
import { VuePersonnelService } from 'src/app/services/vue-personnel.service';

@Component({
  selector: 'app-vue-personnel',
  templateUrl: './vue-personnel.component.html',
  styleUrls: ['./vue-personnel.component.css']
})
export class VuePersonnelComponent implements OnInit {

  constructor(private vuePersonnel:VuePersonnelService) { }

  ngOnInit(): void {
    
  }

}

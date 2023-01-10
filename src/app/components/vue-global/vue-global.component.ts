import { Component, OnInit } from '@angular/core';
import { VueGlobal } from 'src/app/models/vueGlobal.model';
import { VueGlobalService } from 'src/app/services/vue-global.service';

@Component({
  selector: 'app-vue-global',
  templateUrl: './vue-global.component.html',
  styleUrls: ['./vue-global.component.css']
})
export class VueGlobalComponent implements OnInit {
  vueGlobal! : VueGlobal[];

  constructor() { }

  ngOnInit(): void {
  }

 

}

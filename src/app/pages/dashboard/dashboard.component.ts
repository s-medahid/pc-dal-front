import { Component, OnInit, ElementRef } from '@angular/core';
import { VueGlobal } from 'src/app/models/vueGlobal.model';
import { VuePersonnel } from 'src/app/models/vuePersonnel.model';
import { VueGlobalService } from 'src/app/services/vue-global.service';
import { VuePersonnelService } from 'src/app/services/vue-personnel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

vuePersonnel! : VuePersonnel[];
vueGlobal! : VueGlobal[];
  constructor(private elementRef: ElementRef, private vuePersonnelService : VuePersonnelService,
    private vueGlobalService: VueGlobalService) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  onGetAllVuePersonnel(){
    this.vuePersonnelService.getAllVuePersonnel().subscribe(data =>{
      this.vuePersonnel=data;
    })
  }

  onGetAllVueGlobal(){
    this.vueGlobalService.getAllVueGlobal().subscribe(data =>{
      this.vueGlobal=data;
    })
  }

}

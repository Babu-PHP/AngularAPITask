//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PublicApiService } from '../services/publicapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  smartphone: any = [];
  constructor(private api: PublicApiService) {}
  name = 'Babu';

  ngOnInit(){

    
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphone.push({
            id: d.id,
            title: d.title,
            body: d.body
          });
        }
        console.log(this.smartphone);
      });
      
      return this.smartphone;
  }

}

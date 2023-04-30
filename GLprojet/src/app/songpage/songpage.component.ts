import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songpage',
  templateUrl: './songpage.component.html',
  styleUrls: ['./songpage.component.css']
})
export class SongpageComponent implements OnInit {
  song: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.song = params;
    });
  }

}

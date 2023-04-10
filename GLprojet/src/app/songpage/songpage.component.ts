import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songpage',
  templateUrl: './songpage.component.html',
  styleUrls: ['./songpage.component.css']
})
export class SongPageComponent implements OnInit {
  songId?: string | null;
  song: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.songId = params.get('id');
      if (this.songId) {
        this.http.get(`http://localhost:8000/songs/${this.songId}`).subscribe((data: any) => {
          this.song = data;
        });
      }
    });
  }
}

import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {HeadphoneService} from '../services/headphone/headphone.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  headphones:String[] = [] ;
  song: any = {};
    constructor(private router: Router,private headphoneService:HeadphoneService , private http: HttpClient) {}
  ngOnInit(): void {
    this.headphones = this.headphoneService.getAll() ;
  }
  private audioChunks: any[] = [];
  private mediaRecorder: any;
  private isRecording: boolean = false;
  private isPlaying: boolean = false;
  private audioBlob: Blob | null = null;
  private audioURL: string = '';
  songname: string | undefined;
  songphoto: string | undefined;

  singer: string | undefined;
  songurl: URL | undefined;

  //constructor(private http: HttpClient) { }
  startRecording() {
    this.audioChunks = []; // clear audio chunks array
    const options = {
      mimeType: 'audio/webm; codecs=opus',
    };
    const constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream: MediaStream) => {
        this.mediaRecorder = new MediaRecorder(stream, options);
        this.mediaRecorder.addEventListener("dataavailable", (event: any) => {
          this.audioChunks.push(event.data);
        });
        this.mediaRecorder.addEventListener("stop", () => {
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm; codecs=opus' });
          this.audioURL = URL.createObjectURL(this.audioBlob);
          //this.playAudio();
          // check if this.audioBlob is null before making the request
          if (this.audioBlob) {
            
            const url = 'http://localhost:8080/detect-song';
            const headers = new HttpHeaders({
              'Content-Type': 'audio/webm; codecs=opus',
              'Content-Disposition': 'attachment; filename="audio.webm"',
            
            });         
           // console.log(this.audioBlob);
            this.http.post(url, this.audioBlob, { headers }).subscribe((response: any) => {
              console.log(response);
              this.song.songname = response.track.title;
                this.song.artist = response.track.subtitle;
                 this.song.url = response.track.url;
                 this.song.songphoto = response.track.images.coverart;

                 this.router.navigate(['/songpage'], {
                  queryParams: {
                    title: this.song.songname,
                    subtitle: this.song.artist,
                    url: this.song.url,
                    photo:this.song.songphoto,
                  },
                });
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
        this.mediaRecorder.start();
        this.isRecording = true;
        setTimeout(() => {
          this.mediaRecorder.stop();
          this.isRecording = false;
        }, 8000);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

 stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

  playAudio() {
    if (this.audioURL) {
      let audio = new Audio(this.audioURL);
      audio.play();
      this.isPlaying = true;
    }
  }
}

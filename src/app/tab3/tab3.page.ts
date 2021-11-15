import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Iposts } from '../interfaces/iposts';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{
  id: string;
  title: string ;
  elemento: Iposts[] = [];
  constructor(private activate: ActivatedRoute , private postsSer: PostsService,private router: Router) {  }

  ngOnInit(): void {
    this.postsSer.getPosts().subscribe(resp => {
          this.elemento = resp;
        console.log(this.elemento);
        });
  }
}

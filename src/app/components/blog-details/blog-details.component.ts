import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {


  blog: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blog = this.blogService.getOneBlog(+this.route.snapshot.params['id']);
  }

}

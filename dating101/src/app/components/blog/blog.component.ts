import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgSearchFilterService } from 'ng-search-filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  searchText = '';
  blogs: any;

  constructor(private blogService: BlogService, private _ngSearchFilterService: NgSearchFilterService, private router: Router) { }

  ngOnInit(): void {
    this._ngSearchFilterService.setDefaultLang('en');
    this.blogs = this.blogService.getAllBlogs();
  }

  navigate(id: number) {
    this.router.navigate([`blog/${id}`]);
  }

}



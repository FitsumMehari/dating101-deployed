import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [
    {
    id: 1,
    title: 'Online Dating Is Dominating The Internet',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
  },
  {
    id: 2,
    title: 'Finding Your Solemate Has Never Been Easier',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
  },
  {
    id: 3,
    title: 'Start A Family Now',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
  },
  {
    id: 4,
    title: 'What\'s New?',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
  }]

  constructor() {

   }

  ngOnInit(): void {

  }

}



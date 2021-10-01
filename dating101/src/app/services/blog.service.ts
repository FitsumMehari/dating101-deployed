import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs = [
    {
      id: 1,
      title: 'Online Dating Is Dominating The Internet',
      author: 'Mr Writer',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.',
      fullBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
    },
    {
      id: 2,
      title: 'Finding Your Solemate Has Never Been Easier',
      author: 'Mr Writer',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.',
      fullBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
    },
    {
      id: 3,
      title: 'Start A Family Now',
      author: 'Mr Writer',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.',
      fullBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
    },
    {
      id: 4,
      title: 'What\'s New?',
      author: 'Mr Writer',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.',
      fullBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi nostrum est magni inventore architecto perspiciatis sunt dolorem soluta deleniti.'
    }]

  constructor() { }

  getAllBlogs() {
    return this.blogs;
  }

  getOneBlog(id: number) {
    return this.blogs.find(blog => blog.id === id);
  }
}

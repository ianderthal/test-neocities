---
title: "Hello World"
layout: "base.njk"
---

This is a home page

This is a paragraph! Here's how you make a link: [Neocities](https://neocities.org).

Here's how you can make **bold** and _italic_ text.


Blog Posts:

<ul>
{% for post in collections.posts %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

 To learn more HTML/CSS, check out these [tutorials](https://neocities.org/tutorials).
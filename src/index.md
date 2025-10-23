---
layout: "index.njk"
title: "With Floods and Whirlwinds of tempestuous fire"
---

## Latest Posts

<ul>
{% for post in collections.posts %}
  <li>
    <article>
      <h3>{{ post.data.title }}</h3>
      <div>{{ post.data.date | postDate }}</div>
      <p>{{ post.data.preview }}</p>
      <a href="{{ post.url }}">Continue reading</a>
    </article>
  </li>
{% endfor %}
</ul>




---
layout: "index.njk"
title: "With Floods and Whirlwinds of tempestuous fire"
---

## Latest Posts

<ul style="list-style: none;padding-left: 0;">
{% for post in collections.posts %}
  <li>
    <article style="border-bottom: 1px solid #fff;padding: 1rem 1rem 1rem 0;">
      <div style="width:100px;height:100px;background-color:#ddd;"></div>
      <h3 class="anton-regular">{{ post.data.title }}</h3>
      <div>{{ post.data.date | postDate }}</div>
      <p>{{ post.data.preview }}</p>
      <a href="{{ post.url }}">Continue reading</a>
    </article>
  </li>
{% endfor %}
</ul>




---
title: "Blog"
layout: "base.njk"
---

 <h1 class="anton-regular heading">{{ title }}</h1>

<ul>
{% for post in collections.posts %}
<li>
  <article>
    <a href="{{ post.url }}">
      <h3>{{ post.data.title }}</h3>
    </a><span class="d-inline-block">{{ post.data.date | postDate }}</span>
    <p>{{ post.data.preview }}</p>
  </article>
</li>
{% endfor %}
</ul>
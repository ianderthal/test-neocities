---
title: "Blog"
layout: "base.njk"
---

## Posts

<ul>
{% for post in collections.posts %}
<li>
  <article>
    <a href="{{ post.url }}">
      <h3 class="text-uppercase">{{ post.data.title }}</h3>
    </a><span class="d-inline-block">{{ post.data.date }}</span>
    <p>{{ post.data.preview }}</p>
  </article>
</li>
{% endfor %}
</ul>
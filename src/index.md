---
layout: "index.njk"
title: "With Floods and Whirlwinds of tempestuous fire"
---

## Latest Posts
<ul class="list-unstyled">
  {% for post in collections.posts %}
    <li class="mb-4 pb-4 border-bottom border-secondary-subtle">
      <a href="{{ post.url }}" class="text-decoration-none text-reset">
        <article class="d-flex gap-3 position-relative">
          <div class="flex-shrink-0">
            <div style="width:125px;height:75px;border:1px solid #fff;" ></div>
          </div>
          <div>
            <small class="d-block">
              {{ post.data.date | postDate }}
            </small>
            <h3 class="anton-regular">{{ post.data.title }}</h3>
          </div>
        </article>
      </a>
    </li>
  {% endfor %}
</ul>




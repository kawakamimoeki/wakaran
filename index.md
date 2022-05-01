---
title: Podcast by YHMK
layout: default
---

<ul>
{% for post in site.posts -%}
  <a href='{{ post.url }}#{{ post.id | sha1:8 }}'>
    <li class="text-left mb-5 border-1 shadow-xl rounded-lg p-5">
      <header>
        <h2 class="font-bold text-lg inline">{{ post.title }}</h2>
        <time class="opacity-80" datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      </header>
      <p>{{ post.description }}</p>
    </li>
  </a>
{% endfor %}
</ul>

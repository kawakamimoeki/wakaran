---
title: Podcast by YHMK
layout: default
---

<ul>
{% for post in site.posts -%}
  <li class="text-left mb-5">
    <header>
      <h2 class="inline"><a class="font-bold text-lg underline" href='{{ post.url }}#{{ post.id | sha1:8 }}'>{{ post.title }}</a></h2>
      <time class="opacity-80" datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time>
    </header>
    <p>{{ post.description }}</p>
  </li>
{% endfor %}
</ul>

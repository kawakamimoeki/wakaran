---
title: Podcast by YHMK
layout: default
---

<h3 class="mt-5 font-bold text-xl mb-2">メンバー</h3>

<ul class="flex">
{% for member in site.members -%}
  <li class="mb-10 w-1/2 border-2 mx-2 p-3 rounded-lg">
    <h4 class="font-bold text-lg mb-2">
      <a href="{{ member.url }}">
        {{ member.name }}
      </a>
    </h4>
    <img src="/img/{{ member.avater }}" alt="{{ member.name }}" class="w-2/3 mx-auto mb-5 rounded-full">
    <div class="article">
      {{ member.content }}
    </div>
  </li>
{% endfor %}
</ul>


<ul>
{% for post in site.posts -%}
  <li class="text-left mb-2">
    <header>
      <h2 class="inline"><a class="font-bold text-lg underline" href='{{ post.url }}#{{ post.id | sha1:8 }}'>{{ post.title }}</a></h2>
      <time class="opacity-80" datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time>
    </header>
    <p>{{ post.description }}</p>
  </li>
{% endfor %}
</ul>

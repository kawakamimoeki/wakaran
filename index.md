---
title: Podcast by YHMK
layout: default
---

<h3 class="mt-5 font-bold text-xl">お便り</h3>

<p class="mb-3">ご意見・ご感想をお待ちしております。</p>

<a href="/contact" class="block text-white mb-6 font-bold p-3 rounded-md bg-sky-600 w-full">お便りフォーム</a>

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

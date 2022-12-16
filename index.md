---
layout: default
title: Hello
---

### About me

SMC, DPO, Digital Consultant, Augmented Reality Specialist, Business Analyst, Web & Security.

Currently living in Italy, Europe.

Actually in love with a beautiful wife and a fluffy cat.

<br />

### Keep in touch

Say me "hello!" at <a href="mailto:andrea@margiovanni.com">andrea@margiovanni.com</a> or feel free to reach me out on <a rel="me" href="https://words.margio.de/andrea">Fediverse</a>.

If you're even more curious, you can find my shots on <a href="http://pixelfed.social/stramargio">Pixelfed</a>.

Do you need an advice? Do you want to contact me for a job offer? Here is the link to my LinkedIn profile: <a href="http://linkedin.com/in/margio/">in/margio</a>.

<br />

### Writings {#writings}

Here are my writings. Mostly mundane, sometimes fanciful.

<ul class="blog-posts">
    {% for post in site.posts %}
    {% for tag in post.tags %}
    <li>
        <span>
            <i>
                <time datetime="2022-01-28" pubdate="">
                    {{ post.date | date: "%b %-d, %Y" }}
                </time>
            </i>
        </span>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
    {% endfor %}

</ul>

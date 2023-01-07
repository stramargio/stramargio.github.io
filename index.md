---
layout: default
title: Andrea Margiovanni
---

### About me

SMC, DPO, Digital Consultant, Augmented Reality Specialist, Business Analyst, Web & Security.

Currently living in Italy, Europe.

Actually in love with a beautiful wife and a fluffy cat.

<br />

### Keep in touch

Say me "hello!" at <a href="mailto:andrea@margiovanni.com">andrea@margiovanni.com</a>, feel free to follow me on <a rel="me" href="https://infosec.exchange/@stramargio">Fediverse</a> or subscribe to my <a href="https://infosec.exchange/@stramargio.rss">Social RSS feed</a>.

If you're even more curious, you can find my shots on <a href="http://pixelfed.social/stramargio">Pixelfed</a>.

Do you feel more comfortable using secure chat to communicate? Then, you can <a href="mailto:chat@margiovanni.com?subject=Session%20or%20iMessage%20request&body=Hi!%20I%20would%20like%20to%20chat%20with%20you%20on%20Session%20or%20iMessage.">ask me</a> for Session ID or iMessage handle.

If you need an advice or if you want to contact me for a job offer, here is the link to my LinkedIn profile: <a href="https://linkedin.com/in/margio/">in/margio</a>.

<br />

### Writings {#writings}
<ul class="blog-posts">
    {% for post in site.posts %}
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
</ul>

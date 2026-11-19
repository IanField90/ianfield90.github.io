# ianfield90.github.io

```sh
brew install ruby@3.4
brew link --overwrite ruby
sudo gem install bundler
sudo gem install -n /usr/local/bin jekyll
bundle exec jekyll serve
```

Run the server `jekyll serve`

Run the server with auto building `jekyll build --watch`

Run the server with drafts: `jekyll serve -D`

## Profile and search

The public profile lives in [about.md](./about.md) and renders at `/`.
The homepage shows the site name in the hero rather than repeating it in the header.
`/about_me/` redirects to the homepage. The paginated post archive starts at
[`/blog/`](./blog/index.html); individual post URLs are unchanged.
Keep the profile bio, metadata and
[profile structured data](./_includes/profile-schema.html) in sync when the role changes.

When replacing the portrait, use the same square crop at 220 × 220 px and
440 × 440 px for the `image` and `image_2x` entries in [about.md](./about.md).

Run `JEKYLL_ENV=production bundle exec jekyll build` to check the generated
profile, sitemap and robots file locally. After deploying, submit
`https://ianfield.com/sitemap.xml` in Google Search Console and inspect
`https://ianfield.com/` to request indexing.

# Example post

The layout supplies the page title (`h1`), so start post and page sections at
`##`. The shared heading styles live in [`_sass/_base.scss`](./_sass/_base.scss).

---

layout: post
title: "Welcome to Jekyll!"
date: 2015-06-10 13:06:14
categories: jekyll update

---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

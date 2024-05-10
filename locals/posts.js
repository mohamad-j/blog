function generatePost( p_post )
{
  //   p_post = {
    //     id: 2,
    //     title: "Post 2",
    //     author: "moha 2",
    //     content: "This is post 2"
    // }
    return `<article class="entry">

    <div class="entry-img">
      <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid">
    </div>

    <h2 class="entry-title">
      <a href="blog-single.html">${ p_post.title }</a>
    </h2>

    <div class="entry-meta">
      <ul>
        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">${ p_post.author }</a></li>
        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
      </ul>
    </div>

    <div class="entry-content">
    ${ p_post.content }
    </div>

  </article>`
}

function printPosts( posts )
{

  let html = `<p>Posts</p>`;

  posts.forEach( post => {
    html += generatePost( post );
  });

  return html;
}


module.exports = {
  printPosts
}
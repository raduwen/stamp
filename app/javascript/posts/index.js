document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('posts')) {
    document.querySelectorAll('.post').forEach((post) => {
      post.addEventListener('click', () => {
        window.app.postsChannel.notify(post.dataset.id)
      })
    })
  }
})

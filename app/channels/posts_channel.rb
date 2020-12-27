class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "posts"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def notify(data)
    post = Post.find(data['id'])
    data.merge!(
      url: Rails.application.routes.url_helpers.url_for(post.image),
      width: post.image.blob.metadata[:width],
      height: post.image.blob.metadata[:height]
    )
    ActionCable.server.broadcast("posts", data)
  end
end

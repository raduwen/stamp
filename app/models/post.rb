class Post < ApplicationRecord
  has_one_attached :image

  validates :image, presence: true

  def thumb
    @thumb ||= image.variant(resize: '128x128')
  end
end

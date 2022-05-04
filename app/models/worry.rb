class Worry < ApplicationRecord
  belongs_to :user
  belongs_to :s_tribe

  validates :text, length: {minimum: 3}, allow_blank: false 
end

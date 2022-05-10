class Message < ApplicationRecord
  belongs_to :user
  belongs_to :bond
  has_one :s_tribe, through: :bond
end

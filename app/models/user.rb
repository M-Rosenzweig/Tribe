class User < ApplicationRecord
    has_many :bonds
    has_many :tribes, through: :bonds

    has_many :messages
    has_many :tribes, through: :messages

    has_many :priorities
    has_many :worries
end

class STribe < ApplicationRecord
    has_many :messages
    has_many :users, through: :messages

    has_many :bonds
    has_many :users, through: :bonds

    validates :code, uniqueness: true
end

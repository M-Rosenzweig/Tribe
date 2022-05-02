class STribe < ApplicationRecord    
    has_many :bonds
    has_many :users, through: :bonds
    has_many :messages, through: :users

    validates :code, uniqueness: true
end

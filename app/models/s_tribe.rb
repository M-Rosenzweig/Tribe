class STribe < ApplicationRecord    
    has_many :bonds, dependent: :destroy
    has_many :users, through: :bonds
    has_many :messages, through: :users

end

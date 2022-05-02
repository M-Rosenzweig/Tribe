class User < ApplicationRecord
    has_many :bonds
    has_many :s_tribes, through: :bonds

    has_many :messages

    has_many :priorities
    has_many :worries

    has_secure_password
end

class User < ApplicationRecord
    has_many :bonds, dependent: :destroy
    has_many :s_tribes, through: :bonds

    has_many :messages

    has_many :priorities, dependent: :destroy
    has_many :worries, dependent: :destroy

    has_secure_password
end

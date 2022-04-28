class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :energy
  has_many :bonds
  has_many :s_tribes, through: :bonds
end

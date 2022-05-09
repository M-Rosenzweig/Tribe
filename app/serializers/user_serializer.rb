class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :username, :email, :password_digest, :energy, :s_tribes, :bonds
end

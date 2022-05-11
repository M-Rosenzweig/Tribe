class UserSerializerUsernameOnly < ActiveModel::Serializer
  attributes :username, :id, :energy
end

class MessageSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :text, :created_at
  has_one :user, serializer: UserSerializerUsernameOnly
end


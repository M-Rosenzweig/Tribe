class MessageSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :text, :created_at
  has_one :user
  has_one :bond
end

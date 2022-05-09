class MessageSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :text
  has_one :user
  has_one :bond
end

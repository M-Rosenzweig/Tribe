class PrioritySerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :text
  has_one :user
end

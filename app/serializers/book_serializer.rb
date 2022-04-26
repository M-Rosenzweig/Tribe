class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :top_five, :read, :current
  has_one :user
end

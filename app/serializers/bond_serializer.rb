class BondSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  attributes :id, :s_tribe, :user
  # only:[:username, :email]
  # has_one :user
  # has_one :s_Tribe
end

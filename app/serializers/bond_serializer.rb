class BondSerializer < ActiveModel::Serializer
  attributes :id, :user, :s_tribe
  # only:[:username, :email]
  # has_one :user
  # has_one :s_Tribe
end

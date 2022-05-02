class BondSerializer < ActiveModel::Serializer
  attributes :id, :s_tribe 
  # only:[:username, :email]
  # has_one :user
  # has_one :s_Tribe
end

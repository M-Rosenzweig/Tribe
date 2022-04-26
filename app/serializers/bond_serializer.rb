class BondSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :s_Tribe
end

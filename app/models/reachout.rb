class Reachout
  include Mongoid::Document
  include Mongoid::Timestamps

  field :first_name, type: String
  field :last_name, type: String
  field :email, type: String
  field :phone, type: String
  field :company, type: String
  field :title, type: String
  field :message, type: String

  # Relationship
  belongs_to :user, optional: true

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :message, presence: true

  include Mongoid::Timestamps
end

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  field :first_name, type: String
  field :last_name, type: String
  field :company, type: String
  field :title, type: String
  field :email, type: String
  field :phone_number, type: String
  field :password, type: String

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
end

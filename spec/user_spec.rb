require 'rails_helper'

RSpec.describe User, type: :model do
  it "creates a user" do
    user = User.create!(first_name: "Done", last_name: "McQueen", email: "test@example.com", password: "password")
    expect(user).to be_persisted
  end
end

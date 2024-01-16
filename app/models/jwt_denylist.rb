class JwtDenylist
  include Mongoid::Document
  include Mongoid::Timestamps
  include Devise::JWT::RevocationStrategies::Denylist
  field :jti, type: String
  field :exp, type: Time
end

# db/seeds.rb

# Create a new User
User.create(
  email: "tim@example.com",
  password: "password123",
  first_name: "John",
  last_name: "Doe",
  company: "Apple",
  title: "CEO",
  phone_number: "5555555555"
)

# Create another User
User.create(
  email: "kevin@example.com",
  password: "password456",
  first_name: "Kevin",
  last_name: "Scott",
  company: "Microsoft"
  title: "CTO",
  phone_number: "7777777777"
)

User.create(
  email: "alexjspagnoli@outlook.com",
  password: "Password0531",
  first_name: "Alexander",
  last_name: "Spagnoli",
  company: "Pillar",
  title: "IT Manager",
  phone_number: "5713191994"
)

User.create(
  email: "don@cloudlinuxsql.com",
  password: "password333",
  first_name: "Don",
  last_name: "McQueen"
)

# Create additional seed data for other collections/models as needed

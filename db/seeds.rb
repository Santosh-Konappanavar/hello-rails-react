require 'faker'

5.times do
    Greeting.create(message: Faker::Lorem.sentence)
  end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 'gold', 'silver']

black = Color.new
black.name = 'black'
black.digit = 0
black.multiplier = 1
black.tolerance = nil
black.tolerance_letter = nil
black.temp_coefficient = '250'
black.temp_coefficient_letter = 'U'
black.save!

brown = Color.new
brown.name = 'brown'
brown.digit = 1
brown.multiplier = 10
brown.tolerance = 1
brown.tolerance_letter = 'F'
brown.temp_coefficient = '100'
brown.temp_coefficient_letter = 'S'
brown.save

red = Color.new
red.name = 'red'
red.digit = 2
red.multiplier = 100
red.tolerance = 2
red.tolerance_letter = 'G'
red.temp_coefficient = '50'
red.temp_coefficient_letter = 'R'
red.save

orange = Color.new
orange.name = 'orange'
orange.digit = 3
orange.multiplier = 1000
orange.tolerance = 0.05
orange.tolerance_letter = 'W'
orange.temp_coefficient = '15'
orange.temp_coefficient_letter = 'P'
orange.save

yellow = Color.new
yellow.name = 'yellow'
yellow.digit = 4
yellow.multiplier = 10000
yellow.tolerance = 0.02
yellow.tolerance_letter = 'P'
yellow.temp_coefficient = '25'
yellow.temp_coefficient_letter = 'Q'
yellow.save

green = Color.new
green.name = 'green'
green.digit = 5
green.multiplier = 100000
green.tolerance = 0.5
green.tolerance_letter = 'D'
green.temp_coefficient = '20'
green.temp_coefficient_letter = 'Z'
green.save

blue = Color.new
blue.name = 'blue'
blue.digit = 6
blue.multiplier = 1000000
blue.tolerance = 0.25
blue.tolerance_letter = 'C'
blue.temp_coefficient = '10'
blue.temp_coefficient_letter = 'Z'
blue.save

violet = Color.new
violet.name = 'violet'
violet.digit = 7
violet.multiplier = 10000000
violet.tolerance = 0.1
violet.tolerance_letter = 'B'
violet.temp_coefficient = '5'
violet.temp_coefficient_letter = 'M'
violet.save

grey = Color.new
grey.name = 'grey'
grey.digit = 8
grey.multiplier = 100000000
grey.tolerance = 0.01
grey.tolerance_letter = 'L'
grey.temp_coefficient = '1'
grey.temp_coefficient_letter = 'K'
grey.save

white = Color.new
white.name = 'white'
white.digit = 9
white.multiplier = 1000000000
white.tolerance = nil
white.tolerance_letter = nil
white.temp_coefficient = nil
white.temp_coefficient_letter = nil
white.save

gold = Color.new
gold.name = 'gold'
gold.digit = nil
gold.multiplier = 0.1
gold.tolerance = 5
gold.tolerance_letter = 'J'
gold.temp_coefficient = nil
gold.temp_coefficient_letter = nil
gold.save

silver = Color.new
silver.name = 'silver'
silver.digit = nil
silver.multiplier = 0.01
silver.tolerance = 10
silver.tolerance_letter = 'K'
silver.temp_coefficient = nil
silver.temp_coefficient_letter = nil
silver.save

# pattern = Pattern.new
# pattern.color1_id = 2
# pattern.color2_id = 2
# pattern.color3_id = 1
# pattern.save!


class Color < ApplicationRecord
    has_many :patterns
    has_many :values, through: :patterns
end

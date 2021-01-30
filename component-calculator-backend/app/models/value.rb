class Value < ApplicationRecord
    has_one :pattern
    # has_many :colors, through: :pattern
    has_many :components, through: :pattern
end

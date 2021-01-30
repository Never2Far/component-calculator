class Component < ApplicationRecord
    belongs_to :pattern
    delegate :value, to: :pattern, allow_nil: true
    has_many :colors, through: :pattern
end

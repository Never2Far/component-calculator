class Pattern < ApplicationRecord
    belongs_to :colors
    belongs_to :value
    has_many :components, through: :value
end

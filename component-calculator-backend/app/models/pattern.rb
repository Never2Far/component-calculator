class Pattern < ApplicationRecord
    belongs_to :color1, class_name: 'Color'
    belongs_to :color2, class_name: 'Color'
    belongs_to :color3, class_name: 'Color'
    belongs_to :color4, class_name: 'Color', optional: true
    belongs_to :color5, class_name: 'Color', optional: true
    belongs_to :color6, class_name: 'Color', optional: true
    belongs_to :value, optional: true
    has_many :components
end

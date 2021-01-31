class ColorSerializer
  include JSONAPI::Serializer
  attributes :name, :digit, :multiplier, :tolerance, :temp_coefficient
  # , :digit, :multiplier, :tolerance, :temp_coefficient

  # has_many :patterns
  # has_many :values, through: :patterns
end

class ColorSerializer
  include JSONAPI::Serializer
  attributes :name, :digit, :multiplier, :tolerance, :temp_coefficient
end

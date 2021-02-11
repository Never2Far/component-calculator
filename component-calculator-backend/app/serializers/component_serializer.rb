class ComponentSerializer
  include JSONAPI::Serializer
  attributes :name, :value, :band_count, :base_unit, :value_display, :color_code, :user_id
end

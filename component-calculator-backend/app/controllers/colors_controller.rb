class ColorsController < ApplicationController

def index
    colors = Color.all

    render: ColorSerializer.new(colors).serializable_hash.to_json
end


end

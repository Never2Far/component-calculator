class ColorsController < ApplicationController

  def index
      colors = Color.all

      render json: ColorSerializer.new(colors).serializable_hash.to_json
  end

  def show
    color = Color.find_by(id: params[:id])

    render json: ColorSerializer.new(color).serializable_hash.to_json
  end

end

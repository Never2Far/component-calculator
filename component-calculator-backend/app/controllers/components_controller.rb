class ComponentsController < ApplicationController

    def index
        user = User.find_by(id: params[:user_id])
        comps = user.components
        render json: ComponentSerializer.new(comps).serializable_hash.to_json
    end

    def create
        comp = Component.new
        comp.name = params[:name]
        comp.value = params[:value]
        comp.band_count = params[:band_count]
        comp.base_unit = params[:base_unit]
        comp.value_display = params[:value_display]
        comp.color_code = params[:color_code]
        comp.user_id = params[:user_id]
        comp.save!

        render json: ComponentSerializer.new(comp).serializable_hash.to_json
    end

    def destroy
        comp = Component.find_by(id: params[:id])

        if comp.destroy
            render json:  {result: true}
        else
            render json:  {result: false}
        end
    end

    def destroy_all
        user = User.find_by(id: params[:user_id])

        if user.components.destroy_all
            render json:  {result: true}
        else
            render json:  {result: false}
        end
    end
  
end

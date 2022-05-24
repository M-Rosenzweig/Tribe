class Api::PrioritiesController < ApplicationController

    def index 
        priorities = Priority.all 
        render json: priorities
    end 

    def user_priorities 
        user = User.find(params[:id])
        priorities = user.priorities
        render json: priorities
    end 

    def create 
        user = User.find_by(id: params[:user_id])
        created_priority = user.priorities.create!(params.permit(:text, :user_id, :s_tribe_id))
        render json: created_priority
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors:invalid.record.errors}, status:422
    end 

    def destroy
        remove_priority = Priority.find(params[:id])
        remove_priority.destroy
        render json: remove_priority
    end


end

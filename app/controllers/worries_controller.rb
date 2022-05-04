class WorriesController < ApplicationController

    def index 
        worries = Worry.all
        render json: worries 
    end 

    def user_worries
        user = User.find(params[:id])
        worries = user.worries 
        render json: worries
    end 

    def create
        user = User.find_by(id: params[:user_id])
        created_worry = user.worries.create!(params.permit(:text, :user_id, :s_tribe_id))
        render json: created_worry
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors:invalid.record.errors}, status:422
    end 

    
end

class MessagesController < ApplicationController
    def index
       messages =  Message.all 
       render json: messages, include: [:id, :text, :bond]
    end

    def show 
        tribe = STribe.find(params[:id])
        messages = tribe.messages
        render json: messages
    end

    def user_messages
        bond = Bond.find(params[:id])
        messages = bond.user.messages
        render json: messages

    end

    def create 
        user = User.find_by(id: params[:user_id])
        created_message = user.messages.create!(params.permit(:text, :user_id, :bond_id))
        render json: created_message
    rescue ActiveRecord::RecordInvalid => invalid
            render json: {errors:invalid.record.errors}, status:422
    end 
end

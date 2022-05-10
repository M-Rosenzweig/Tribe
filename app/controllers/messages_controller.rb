class MessagesController < ApplicationController
    def index
       messages =  Message.all 
       render json: messages, include: [:id, :text, :bond]
    end

    def show 
        tribe = STribe.find(params[:id])
        messages = tribe.messages.order('created_at')
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

    # def create 
    #     user = User.find_by(id: params[:user_id])
    #     created_message = user.messages.new(params.permit(:text, :user_id, :bond_id))
    #     if message.save
    #     puts "successfully saved a message!"
    #     # RoomsChannel.broadcast_to(room, {
    #     #     room: Tribe.new(room),
    #     #     users: UserSerializer.new(room.users),
    #     #     messages: room.messages
    #     #     })

    #     render json: created_message
    # # rescue ActiveRecord::RecordInvalid => invalid
    # #         render json: {errors:invalid.record.errors}, status:422
    # end 
end

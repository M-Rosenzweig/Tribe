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
        STribesChannel.broadcast_to(created_message.s_tribe, {
            tribe: STribeSerializer.new(created_message.s_tribe),
            users: ActiveModel::Serializer::CollectionSerializer.new(created_message.s_tribe.users, each_serializer: UserSerializer).to_json,
            messages: ActiveModel::Serializer::CollectionSerializer.new(created_message.s_tribe.messages, each_serializer: MessageSerializer).to_json
        })
        render json: created_message
        rescue ActiveRecord::RecordInvalid => invalid
            render json: {errors:invalid.record.errors}, status:422
    end 

end

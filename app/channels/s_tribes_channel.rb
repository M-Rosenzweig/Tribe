class STribesChannel < ApplicationCable::Channel
    def subscribed
      # byebug
      @s_tribe = STribe.find_by(id: params[:tribe_id])
      @users = @s_tribe.users
      @messages = @s_tribe.messages
      @user = User.find_by(id: params[:user])
      stream_for @s_tribe
    end

    def received
      @user.update(online: "online")
      TribeChannel.broadcast_to(@s_tribe, {
        tribe: @s_tribe,
        user: @user, 
        messages: @s_tribe.messages
    })
    end

    def disappear
      @user.update(online: "offline")
      # RoomsChannel.broadcast_to(@room, {
      #   room: RoomSerializer.new(@room),
      #   users: UserSerializer.new(@room.users),
      #   messages: @room.messages
    # })
    end
    
    def unsubscribed
      disappear
    end
  end
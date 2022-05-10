class TribeChannel < ApplicationCable::Channel
    def subscribed
      # byebug
      @room = STribe.find_by(id: params[:room])
      @users = params[:users]
      @messages = params[:messages]
      @user = User.find_by(id: params[:user])
      stream_for @room
      appear
    end

    def appear
      @user.update(online: "online")
      TribeChannel.broadcast_to(@room, {
        room: @room,
        users: @users, 
        messages: @messages
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
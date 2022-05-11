class MessagesChannel < ApplicationCable::Channel
  def subscribed
    @tribe = STribe.find(params[:tribe])
    stream_for tribe
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

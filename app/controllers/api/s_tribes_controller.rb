class Api::STribesController < ApplicationController
    def index
        tribe = STribe.all
        render json: tribe
    end

    def show
        tribe = STribe.find(params[:id])
        render json: tribe.to_json(include: :users)
    end
end

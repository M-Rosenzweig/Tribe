class STribesController < ApplicationController
    def index
        tribe = STribe.all
        render json: tribe
    end
end

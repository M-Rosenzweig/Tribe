class Api::BondsController < ApplicationController
    def index
        bonds = Bond.all
        render json: bonds
    end
end

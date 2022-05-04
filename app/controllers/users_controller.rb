class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users
    end

    def new_tribe
        user = User.create!(create_user_params)
        tribe = STribe.create(stribes_params)
        bond = Bond.create(user:user, s_tribe:tribe)
        session[:user_id] ||= user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    def join_tribe
        user = User.create!(create_user_params)
        tribe = STribe.find_by(code: params[:code])
        bond = Bond.create(user_id:user.id, s_tribe_id:tribe.id)
        session[:user_id] ||= user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end


    def show
        user_id = session[:user_id]
        if user_id
            user = User.find(user_id)
            render json: user
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    def energy 
        user_energy = User.find(params[:id]).energy
        if user_energy
        render json: user_energy
        else
            render json:{error: "There Was an Error with your request"}
        end
    end 

    def update
      user= User.find(params[:id])
      if user.energy <= 3
        user.energy = user.energy + 1
        user.save
      else  
        user.energy = 1
        puts user.energy
    puts user.energy
        user.save
      end
      render json: user.energy
    end

    private

    def create_user_params
        params.permit(:username, :password, :energy, :email)
    end

    def stribes_params
        params.permit(:name, :code)
    end


end

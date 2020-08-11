class ListsController < ApplicationController

    def index 
        @lists = List.all

        render json: @list, status: 200
    end

    def show 
        @list = List.find(params[:id])

        render json: @list, status: 200
    end

    private

    def list_params
        params.require(:list).permit(:title)
    end
end

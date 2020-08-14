class ListsController < ApplicationController
    def index
        @lists = List.all 
        render json: ListSerializer.new(@lists), status: 200
      end
    
      def show
        @list = List.find(params[:id])
        render json: ListSerializer.new(@list), status: 200
      end
    
    private
    
      def list_params
        params.require(:list).permit(:title)
      end
end

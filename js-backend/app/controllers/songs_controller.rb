class SongsController < ApplicationController
    def index
      @song = Song.all 
      render json: SongSerializer.new(@songs), status: 200
    end
  
    def show
        render json: SongSerializer.new(@song), status: 200
    end
  
    def create
      @song = Song.new(song_params)
      if @song.save
        render json: SongSerializer.new(@song), status: 200
      else
        render json: @song.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @song = Song.find(params[:id])
      @song.destroy
    end
  
  private
  
    def song_params
      params.require(:song).permit(:artist, :title, :list_id)
    end
  

  
end

class SongsController < ApplicationController
    def index 
        @songs = Song.all

        render json: @songs, status: 200
    end

    def show 
        @song = Song.find(params[:id])

        render json: @song, status: 200
    end

    def create 
        @song = Song.create(song_params)

        render json: @song, status: 200
    end

    def destroy
        @song = Song.find(params[:id])
        @song.delete

        render json: {songId: @song.id}
    end


    private
    def song_params
        params.require(:song).permit(:artist, :name)
    end
end

class ArtistsController < ApplicationController
    def index 
        @artists = artist.all

        render json: @artists, status: 200
    end

    def show 
        @artist = Artist.find(params[:id])

        render json: @artist, status: 200
    end

    def create 
        @artist = Artist.create(note_params)

        render json: @artist, status: 200
    end

    def destroy
        @artist = Artist.find(params[:id])
        @artist.delete

        render json: {noteId: @artist.id}
    end


    private
    def note_params
        params.require(:note).permit(:body)
    end
end

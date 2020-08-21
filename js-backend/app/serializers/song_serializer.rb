class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :artist, :title, :list
end

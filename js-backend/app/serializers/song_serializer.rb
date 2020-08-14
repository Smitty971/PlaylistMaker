class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :artists, :title, :lists
end

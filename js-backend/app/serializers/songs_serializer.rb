class SongsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :artists, :title, :id
end

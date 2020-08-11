class ListsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :id
end

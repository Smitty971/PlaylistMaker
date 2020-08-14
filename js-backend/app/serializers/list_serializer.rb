class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :id
end

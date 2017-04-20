@boards.each do |board|
  json.set! board.id do
    json.partial! 'board', board: board
  end
end

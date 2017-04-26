json.extract! board, :id, :name, :private, :creator_id
json.shared !board.board_shares.empty?

@board_shares.each do |board_share|
  json.set! board_share.id do
    json.partial! 'board_share', board_share: board_share
  end
end

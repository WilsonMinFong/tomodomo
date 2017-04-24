# @cards.each do |card|
#   json.set! card.id do
#     json.partial! 'card', card: card
#   end
# end
@cards.each do |card|
  json.set! card.list.id do
    json.set! card.id do
      json.partial! 'card', card: card
    end
  end
end

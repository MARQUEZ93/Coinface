# == Schema Information
#
# Table name: cards
#
#  id               :bigint(8)        not null, primary key
#  user_id          :integer          not null
#  name             :string           not null
#  last_four_digits :integer
#  exp              :string           not null
#  cvc              :integer          not null
#  postal           :integer          not null
#  card_type        :string
#  number_digest    :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Card < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User
  validates :user_id, :name, :exp, :cvc, :postal,
  :number, presence: true

  validates :number, length: { minimum: 16, maximum: 16, allow_nil: true }

  after_create :randomize_card_type

  attr_reader :number

  def number=(number)
    @number = number
    self.last_four_digits = number.to_s.split(//).last(4).join.to_i
    self.number_digest = BCrypt::Password.create(number)
    self.save
  end

  def randomize_card_type
    #i give user either visa or mastercard 
    self.card_type = ["Mastercard", "Visa"].sample
    self.save
  end

end

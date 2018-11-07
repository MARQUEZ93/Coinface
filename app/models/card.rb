class Card < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User

  has_many :sellings, foreign_key: :card_id, class_name: :Selling
  has_many :purchases, foreign_key: :card_id, class_name: :Purchase
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

  def credit (amount)
    self.amount+=amount
    self.save
  end

  def debit (amount)
    self.amount-=amount
    self.save
  end

  def randomize_card_type
    self.card_type = ["Mastercard", "Visa"].sample
    self.save
  end

end

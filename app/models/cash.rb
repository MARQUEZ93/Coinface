class Cash < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User

  has_many :sellings, foreign_key: :cash_id, class_name: :Selling
  has_many :purchases, foreign_key: :cash_id, class_name: :Purchase

  validates :user_id, :amount, presence: true

end

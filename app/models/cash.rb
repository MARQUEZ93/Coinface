# == Schema Information
#
# Table name: cashes
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  amount     :decimal(, )      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cash < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User

  has_many :sellings, foreign_key: :cash_id, class_name: :Selling
  has_many :purchases, foreign_key: :cash_id, class_name: :Purchase

  validates :user_id, :amount, presence: true

  def credit (amount)
    self.amount+=amount
    self.save
  end

  def debit (amount)
    self.amount-=amount
    self.save
  end

end

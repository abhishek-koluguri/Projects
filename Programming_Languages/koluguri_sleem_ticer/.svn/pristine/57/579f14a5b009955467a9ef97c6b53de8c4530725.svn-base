class PerfectNumber
  
  def is_perfect_number_imperative(number)
     number > 0 && (sum_of_factors(number) == number * 2)
  end
  
  def sum_of_factors(number)
    sum = 0
    for index in 1..number
      sum += index if number % index == 0
    end
    sum
  end
  
  def is_perfect_number_functional(number)
  number == (1...number).find_all {|index| number % index == 0}
						.reduce(:+)
  end
    
end
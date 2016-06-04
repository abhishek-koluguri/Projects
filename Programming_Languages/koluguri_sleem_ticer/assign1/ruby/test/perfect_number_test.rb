require_relative '../src/perfect_number'
require 'test/unit'

class PerfectNumberTest < Test::Unit::TestCase
    
  def setup
    @perfect_number = PerfectNumber.new;
  end

  def test_for_negative
    assert(!(@perfect_number.is_perfect_number_imperative(-6)))
  end
    
  def test_for_zero
    assert(!(@perfect_number.is_perfect_number_imperative(0)))
  end
  
  def test_for_one
    assert(!(@perfect_number.is_perfect_number_imperative(1)))
  end
  
  def test_for_perfect_number
    assert(@perfect_number.is_perfect_number_imperative(28))
  end
  
  def test_for_not_a_perfect_number
    assert(!(@perfect_number.is_perfect_number_imperative(7)))
  end
  
  def test_for_one_sum_of_factors
    assert_equal(1, @perfect_number.sum_of_factors(1))
  end
  
  def test_for_zero_sum_of_factors
    assert_equal(0, @perfect_number.sum_of_factors(0))
  end
  
  def test_for_positive_sum_of_factors
    assert_equal(12, @perfect_number.sum_of_factors(6))
  end
  
  def test_for_negative_sum_of_factors
    assert_equal(0, @perfect_number.sum_of_factors(-6))
  end
  
  def test_for_negative_functional
    assert(!(@perfect_number.is_perfect_number_functional(-6)))
  end
    
  def test_for_zero_functional
    assert(!(@perfect_number.is_perfect_number_functional(0)))
  end
  
  def test_for_one_functional
    assert(!(@perfect_number.is_perfect_number_functional(1)))
  end
  
  def test_for_perfect_number_functional
    assert(@perfect_number.is_perfect_number_functional(28))
  end
  
  def test_for_not_a_perfect_number_functional
    assert(!(@perfect_number.is_perfect_number_functional(7)))
  end

end

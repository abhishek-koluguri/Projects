require './src/rod_cutter'
require 'minitest/autorun'

class RodCuttingTest < Minitest::Test
    @@prices = {1 => 1, 2 => 2, 3 => 3, 4 => 4}

    def setup
        @rod_cutter = RodCutter.new
    end

    def test_canary
        assert(true)
    end

    def test_calculating_profit_for_length_zero
        expected = {"revenue" => 0, "cuts" => [[]]}
        assert(@rod_cutter.get_optimal_cuts(0, @@prices) === expected)
    end

    def test_calculating_profit_for_length_one
        expected = {"revenue" => 1, "cuts" => [[1]]}
        assert(@rod_cutter.get_optimal_cuts(1, @@prices) === expected)
    end

    def test_calculating_profit_for_length_two
        expected = {"revenue" => 2, "cuts" => [[2], [1, 1]]}
        assert(@rod_cutter.get_optimal_cuts(2, @@prices) === expected)
    end

    def test_calculating_profit_for_length_three
        expected = {"revenue" => 3, "cuts" => [[3], [1, 2], [1, 1, 1]]}
        assert(@rod_cutter.get_optimal_cuts(3, @@prices) === expected)
    end

    def test_calculating_profit_for_length_four
        expected = {"revenue" => 4, "cuts" => [[4], [1, 3], [1, 1, 2], [1, 1, 1, 1], [2, 2]]}
        assert(@rod_cutter.get_optimal_cuts(4, @@prices) === expected)
    end

    def test_for_missing_lengths 
        @@specialPrices = {2 => 3, 3 => 4, 5 => 7}  
        expected = {"revenue" => 7, "cuts" => [[5], [2, 3]]}
        assert(@rod_cutter.get_optimal_cuts(5, @@specialPrices) === expected)
    end

    def test_solution_without_the_given_length 
        @@specialPrices = {1 => 1, 2 => 2, 3 => 1} 
        expected = {"revenue" => 3, "cuts" => [[1, 2], [1, 1, 1]]}
        assert(@rod_cutter.get_optimal_cuts(3, @@specialPrices) === expected)
    end
end

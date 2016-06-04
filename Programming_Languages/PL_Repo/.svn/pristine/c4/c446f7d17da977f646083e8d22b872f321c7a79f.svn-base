-module(fibonacci_tests).

-include_lib("eunit/include/eunit.hrl").

fibonacciRecursion_0_test() ->
    ?assertEqual([1], fibonacci:fibonacciRecursion(0)).
    
fibonacciRecursion_1_test() ->
    ?assertEqual([1, 1], fibonacci:fibonacciRecursion(1)).
    
fibonacciRecursion_success_test() ->
    ?assertEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], fibonacci:fibonacciRecursion(10)).
    
fibonacciTailRecursion_0_test() ->
    ?assertEqual([1], fibonacci:fibonacciTailRecursion(0)).
    
fibonacciTailRecursion_1_test() ->
    ?assertEqual([1, 1], fibonacci:fibonacciTailRecursion(1)).
    
fibonacciTailRecursion_success_test() ->
    ?assertEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], fibonacci:fibonacciTailRecursion(10)).
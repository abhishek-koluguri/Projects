-module(fibonacci).
-export([fibonacciRecursion/1, fibonacciTailRecursion/1]).

fibonacciRecursion(0) -> [1];
fibonacciRecursion(1) -> [1, 1];
fibonacciRecursion(N) -> Sequence = fibonacciRecursion(N - 1), 
                         Sequence ++ [lists : sum(lists:nthtail(length(Sequence) - 2, Sequence))].

fibonacciTailRecursion(N) -> fibonacciTailRecursive(N, [1, 1]).
                         
fibonacciTailRecursive(0, Sequence) -> [1];
fibonacciTailRecursive(1, Sequence) -> Sequence;                         
fibonacciTailRecursive(N, Sequence) -> fibonacciTailRecursive(N - 1, Sequence ++ [lists : sum(lists : nthtail(length(Sequence) - 2, Sequence))]).
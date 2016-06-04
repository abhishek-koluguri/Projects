#!/usr/bin/env escript

main(_) ->
	R = sort([1,3,5,2,4, 123, 2, 0]),
	io:format("~p --> ~p~n", [[1,3,5,2,4, 123, 2, 0], R]).

sort([]) -> [];
sort([Pivot|Rest]) ->
	sort(lists:filter(fun(E) -> E < Pivot end, Rest)) ++ [Pivot] ++ sort(lists:filter(fun(E) -> E >= Pivot end, Rest)).

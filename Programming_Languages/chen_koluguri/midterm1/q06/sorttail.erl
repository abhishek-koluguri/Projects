#!/usr/bin/env escript

main(_) ->
	TR = sort_tail_recursive([213, 3, 535, 12, 7, 8, 0]),
	io:format("~p --> ~p~n", [[213, 3, 535, 12, 7, 8, 0], TR]).

sort_tail_recursive([]) ->
	[];
sort_tail_recursive([H| T]) ->
	sort_tr([H| T], []).

sort_tr([], Acc) ->
	Acc;
sort_tr([H| T], Acc) ->
	partition(H, T, {[], [H], []}, Acc).
	
partition(_, [], {Less, Equal, Greater}, Acc) ->
	sort_tr(Less, (Equal ++ sort_tr(Greater, Acc)));
partition(Pivot, [H | T], {Less, Equal, Greater}, Acc) ->
	if
		H < Pivot ->
			partition(Pivot, T, {[H | Less], Equal, Greater}, Acc);
		H > Pivot ->
			partition(Pivot, T, {Less, Equal, [H | Greater]}, Acc);
		true ->
			partition(Pivot, T, {Less, [H | Equal], Greater}, Acc)
	end.

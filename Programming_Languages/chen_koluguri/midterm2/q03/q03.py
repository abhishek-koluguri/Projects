cache = {0:1, 1:1} 

def fibonacciMemo(position):
    val = cache.get(position)
    if val:
        return val
    else:
        val = fibonacciMemo(position - 1) + fibonacciMemo(position - 2)
        cache[position] = val
        return val

print fibonacciMemo(400)
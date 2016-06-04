package perfectnumber;
import java.util.stream.IntStream;
import java.util.function.IntPredicate;

public class PerfectNumber {
    public boolean isPerfectNumberImperative(int number) {
        return number > 0 && (sumOfFactors(number) == number * 2);
    }

    public int sumOfFactors(int number) {
        int sum = 0;
        for(int i = 1; i <= number; i++){
            if(number % i == 0) sum += i;
        }
        return sum;
    }

    public boolean isPerfectNumberFunctional (int number) {
        int sumFactors = IntStream.rangeClosed(1, number)
                				          .filter(i -> number % i == 0)
                				          .sum();
        return number > 0 && sumFactors == 2 * number;
    }
}

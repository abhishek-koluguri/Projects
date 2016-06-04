public class Normal {
    public static void main(String[] args) {
        System.out.println(even(10));
    }

    public static String even(int number){
        if(number%2 == 0){
            number += 200;
           return "even";
        }
        else {
            return "odd";
        }
    }
}

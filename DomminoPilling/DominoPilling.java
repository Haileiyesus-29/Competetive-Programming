import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int d, m, n;
        n = console.nextInt();
        m = console.nextInt();
        d = (m*n)/2;
        System.out.println(d);
    }
}

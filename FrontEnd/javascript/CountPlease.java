import java.io.*;

public class CountPlease {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String text = br.readLine(); // paste text in console

        int count = text.split("\\bplease\\b", -1).length - 1;
        System.out.println("Count = " + count);
    }
}

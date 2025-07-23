import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Login {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Username: ");
        String username = sc.nextLine();
        System.out.print("Enter Password: ");
        String password = sc.nextLine();

        boolean success = false;
        try (BufferedReader br = new BufferedReader(new FileReader("users.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                if (data.length == 2 && data[0].equals(username) && data[1].equals(password)) {
                    success = true;
                    break;
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }

        if (success) {
            System.out.println("Login successful.");
        } else {
            System.out.println("Invalid credentials.");
        }
    }
}

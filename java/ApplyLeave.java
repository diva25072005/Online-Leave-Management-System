import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ApplyLeave {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Username: ");
        String username = sc.nextLine();
        System.out.print("From Date (YYYY-MM-DD): ");
        String fromDate = sc.nextLine();
        System.out.print("To Date (YYYY-MM-DD): ");
        String toDate = sc.nextLine();
        System.out.print("Leave Type: ");
        String type = sc.nextLine();
        System.out.print("Reason (optional): ");
        String reason = sc.nextLine();

        try (PrintWriter pw = new PrintWriter(new FileWriter("leaves.csv", true))) {
            pw.println(username + "," + fromDate + "," + toDate + "," + type + "," + reason);
            System.out.println("Leave applied successfully.");
        } catch (IOException e) {
            System.out.println("Error saving leave: " + e.getMessage());
        }
    }
}

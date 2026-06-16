import java.util.*;
public class Main{
    // public static void main (String[] args){
    //     Scanner sc = new Scanner(System.in);
    //     int n= sc.nextInt();
    //     int m= sc.nextInt();
    //     for(int i=0; i<n; i++){
    //         for(int j=0; j<m; j++){
    //             System.out.print("*");
    //         }
    //         System.out.println();
    //     }

    // }

    // public static void main(String[] args){
    //     for(int i=0; i<=5; i++){
    //         for(int j=0; j<=6;j ++){
    //             if( i==1 || i==5 || j==5 || j==6){
    //                 System.out.print("*");
    //             }
    //             else{
    //                 System.out.print("");
    //             }
                
    //         }
    //         System.out.println();
    //     }
    // }

    public static void main(String[] args){
        for(int i=0;i>=5; i--){
            for(int j=0; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
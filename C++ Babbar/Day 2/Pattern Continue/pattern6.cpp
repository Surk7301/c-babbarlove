#include <iostream>
using namespace std;
int main()
{
    int num;
    cin >> num;
    int n = num / 2;
    for (int row = 0; row < n; row = row + 1)
    {

        for (int col = 0; col < (n - row - 1); col = col + 1)
        {
            cout << " ";
        }

        for (int col = 0; col < (row + 1); col = col + 1)
        {
            if (col == 0 || col == row + 1 - 1)
            {

                cout << "* ";
            }
            else
            {
                cout << "  ";
            }
        }
        cout << endl;
    }
    for (int row = 0; row < n; row = row + 1)
    {
        for (int col = 0; col < row; col = col + 1)
        {
            cout << " ";
        }
        // Stars
        int total_col = n - row;
        for (int col = 0; col < total_col; col = col + 1)
        {
            if (col == 0 || col == total_col - 1)
            {

                cout << "* ";
            }
            else
            {
                cout << "  ";
            }
        }
        cout << endl;
    }
}
#include <iostream>
using namespace std;

int main()
{
    int num;
    cin >> num;

    int n = num / 2;

    // Full pyramid

    for (int row = 0; row < n; row = row + 1)
    {
        // space
        for (int col = 0; col < (n - row - 1); col = col + 1)
        {
            cout << " ";
        }
        // star
        for (int col = 0; col < row + 1; col = col + 1)
        {
            cout << "* ";
        }
        cout << endl;
    }

    // Inverted full pyramid
    for (int row = 0; row < n; row = row + 1)
    {
        for (int col = 0; col < row; col++)
        {
            cout << " ";
        }

        for (int col = 0; col < (n - row); col++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}
#include <iostream>
#include <limits.h>
using namespace std;
int findMax(int arr[3][4], int row, int col)
{
    int maxAns = INT_MIN;
    for (int i = 0; i < row)
}
int main()
{
    int arr[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 1, 11},
    };
    int row = 3;
    int col = 4;

    cout << "Printing the max no: " << findMax(arr, row, col) << endl;
}
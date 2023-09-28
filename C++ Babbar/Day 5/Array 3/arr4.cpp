//  element found  or not in an array
#include <iostream>
using namespace std;
bool findTarget(int arr[3][4], int row, int col, int target)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            if (arr[i][j] == target)
            {
                return true;
            }
        }
    }
    return false;
}
int main()
{
    // int arr[3][3];
    // int row = 3;
    // int col = 3;
    // for (int i = 0; i < row; i++)
    // {
    //     for (int j = 0; j < col; j++)
    //     {
    //         cout << "Enter the input for row index: " << i << " column index: " << j << endl;
    //         cin >> arr[i][j];
    //     }
    // }
    int arr[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 12, 1, 13},
    };
    int row = 3;
    int col = 4;

    int target = 11;
    cout << "Found or Not: " << findTarget(arr, row, col, target) << endl;
}
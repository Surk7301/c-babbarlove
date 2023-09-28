// Printing 2D array columnwise
#include <iostream>
using namespace std;

void printArray(int arr[][3], int row, int col)
{
    for (int i = 0; i < col; i++)
    {
        for (int j = 0; j < row; j++)
        {
            cout << arr[j][i] << " ";
        }
        cout << endl;
    }
}
int main()
{
    int arr[4][3] = {
        {11, 12, 13},
        {14, 15, 16},
        {17, 18, 19},
        {20, 21, 22}};
    int row = 4;
    int col = 3;

    printArray(arr, row, col);
}
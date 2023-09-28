#include <iostream>
using namespace std;
void printArray(int arr[][4], int row, int col)
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

    int arr[4][4] =
        {
            {1, 2, 3, 4},
            {10, 20, 30, 40},
            {11, 21, 13, 14},
            {20, 22, 53, 44}

        };
    int row = 4;
    int col = 4;

    printArray(arr, row, col);
}
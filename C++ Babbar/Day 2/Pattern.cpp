#include <iostream>
using namespace std;

int main()
{
    // square pattern
    // for (int i = 0; i < 4; i++)
    // {
    //     for (int j = 0; j < 4; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // Rectangle
    // for (int i = 0; i < 3; i = i + 1)
    // {
    //     for (int j = 0; j < 5; j = j + 1)
    //     {
    //         cout << " *";
    //     }
    //     cout << " " << endl;
    // }

    //
    // for(int i=0; i<5; i++)
    // {
    //     for(int j=0; j<5; j++)
    //     {
    //         if
    //     }
    // }

    // for (int row = 0; row < 5; row++)
    // {
    //     for (int col = 0; col < 5; col++)
    //     {
    //         if (row == 0 || row == 4)
    //         {
    //             cout << "* ";
    //         }
    //         else
    //         {
    //             if (col == 0 || col == 4)
    //             {
    //                 cout << "*";
    //             }
    //             else
    //             {
    //                 cout << " ";
    //             }
    //         }
    //     }
    //     cout << endl;
    // }

    // for (int row = 0; row < 10; row++)
    // {
    //     for (int col = 0; col < row + 1; col = col + 1)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // inner outer loop
    // for (int i = 0; i < 5; i = i + 1)
    // {
    //     cout << "outer loop " << i << endl;
    //     for (int j = 0; j < 5; j++)
    //         cout << "inner loop " << j << endl;
    // }

    // square
    // for (int i = 0; i < 4; i++)
    // {
    //     for (int j = 0; j < 4; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // Rectangle

    // for (int i = 0; i < 3; i++)
    // {
    //     for (int j = 0; j < 5; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }

    // Hollow Rectangle

    for (int row = 0; row < 5; row++)
    {
        for (int col = 0; col < 5; col++)
        {
            if (row == 0 || row == 4)
            {
                cout << "* ";
            }
            else
            {
                if (col == 0 || col == 4)
                {
                    cout << "* ";
                }
                else
                {
                    cout << "  ";
                }
            }
        }
        cout << endl;
    }
}
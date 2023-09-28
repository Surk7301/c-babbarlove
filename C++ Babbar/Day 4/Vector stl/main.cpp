#include <iostream>
using namespace std;

void fun(int a[], int n)
{
    cout << "Array elements are" << endl;
    for (int i = 0; i < n; ++i)
    {
        cout << a[i] << endl;
    }
}
int main()
{
    // int arr[5] = {1, 2, 3, 4, 5};
    // fun(arr, 5);

    // Dynamic
    int n;
    cin >> n;
    int *arr = new int[n];

    for (int i = 0; i < n; i++)
    {
        int data;
        cin >> data;
        arr[i] = data;
    }
    fun(arr, n);
}

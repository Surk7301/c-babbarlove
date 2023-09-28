#include <iostream>
using namespace std;
int main()
{
    int a = 7;
    cout << (a << 2) << endl;
    cout << (a >> 1) << endl;
    // 2^n divide if signed no problem
    // left shift by a negative value then we'll get warning and garbage value

    cout << (++a) << endl;
}
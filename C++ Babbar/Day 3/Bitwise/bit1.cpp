#include <iostream>
using namespace std;
int main()
{
    // Bitwise (BIT LEVEL)
    // AND -->&
    // OR --> |
    // NOT --> ~
    // XOR --> ^

    // AND
    int a = 5;
    int b = 5;
    int num = 1;
    cout << (a & b) << endl;

    // OR
    cout << (a | b) << endl;

    // NOT
    cout << ~num << endl;
    cout << (~num) << endl;
    cout << ~(num) << endl;

    // XOR
    cout << (a ^ b) << endl;
}

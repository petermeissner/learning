#include <iostream>

using namespace std;

int wasmain()
{
    string tmp  ;
    int i = 0 ;
    while(cin >> tmp  && i<10)
    {
        i++ ;
        cout << i << ": " << tmp << endl;
    }
    return 0 ;
}

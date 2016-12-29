// Testing String Class.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"

#include <iostream>
#include <string>

int main()
{
	using namespace std;

	// string 
	string str = "We think in generalities, but we live in details.";
	cout << "Originaltext: " << str << endl << endl;

	// substring from position x for y characters
	string str2 = str.substr(12, 12);   // "generalities"
	cout << "str2:         " << str2 << endl << endl;

	// substring from position x for y characters
	size_t pos = str.find("live");      // position of "live" in str
	cout << "pos:          " << pos << endl << endl;

	// substring from position x to end
	string str3 = str.substr(pos);     // get from "live" to the end
	cout << "str3:         " << str3 << endl << endl;

	// cycling through all characters of string
	cout << "str[i]        ";
	for (int i = 0; i < str.length(); ++i){
		cout << str[i] << " ";
	}
	cout << endl << endl;
	
	return 0;
}


// String to Vector.cpp : Defines the entry point for the console application.

#include "stdafx.h"

// includes
#include <iostream> 
#include <string>
#include <vector> 

// namespaces
using namespace std;



void vspace()
{
	cout << endl << endl;
}

void string_to_cout(string str)
{
	//string str = "We think in generalities, but we live in details.";
	cout << "Originaltext: " << endl << endl;
	cout << str << endl; 
	
	string out = "_";
	size_t i = 0;
	while (i  < str.size() ){
		if (i % 5 == 0) {
			out = to_string(i); cout << out;
		}
		else{
			if (out.size() > 1){ out = out.substr(1); }
			else{ out = "."; cout << out; }
		}
		i++;
	}
	vspace();
}

void vector_to_cout(vector<int> vec)
{
	cout << "{"; 
	size_t i = 0;
	while (i < vec.size()) {
		if (i > 0) cout << ", "; 
		cout << vec[i];
		i++;
	}
	cout << "}"; 
	vspace();
}

void vector_to_cout(vector<string> vec)
{
	cout << "{";
	size_t i = 0;
	while (i < vec.size()) {
		if (i > 0) cout << ", ";
		cout << vec[i];
		i++;
	}
	cout << "}";
	vspace();
}

void search_word(string str, string delimiter=" ", int start=0)
{
	vector < int > start_v;
	vector < int > end_v;
	vector < int > pos_v;
	vector < string > words_v;

	int n ;
	int pos ;
	
	while ( true )
	{
		// do search for delimiter
		pos = str.find(delimiter, start);
		// derive n
		if (pos == string::npos)
		{
			n   = str.size() - start;
			pos = str.size(); 
		}
		else
		{
			n = pos - start;
		}

		// print
		cout << "start:" << start << ", end:" << pos-1;
		cout << ", word:" << "'" << str.substr(start, n) << "'" << endl;
		// push to vectors
		start_v.push_back(start) ;
		end_v.push_back(pos-1)   ;
		pos_v.push_back(pos)   ;
		words_v.push_back(str.substr(start, n));
		// calculate new start 
		start = pos + 1;
		// break if at an end
		if (pos == str.size())
			break; 
	}
	// print all positions
	cout << endl; 
	cout << "start: ";
	vector_to_cout(start_v);
	cout << "end:   ";
	vector_to_cout(end_v);
	cout <<  "pos:   ";
	vector_to_cout(pos_v);
	cout << "words: ";
	vector_to_cout(words_v);
}


int main()
{
	// def string
	string str = "We think in generalities, but we live in details.";
	string str_temp = str; 

	// printing string 
	string_to_cout(str=str);

	// collect all positions of " " and extract words
	search_word(str_temp, " ", 0); 
	
	return 0;
}

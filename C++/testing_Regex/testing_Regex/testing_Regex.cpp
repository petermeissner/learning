// testing_Regex.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"

#include <Windows.h>

#include <iostream>
#include <fstream>
#include <string>

#include <vector>
#include <set> 
#include <map> 
#include <algorithm>

#include <time.h>

#include <locale>
#include <codecvt>
#include <fcntl.h>
#include <io.h>

using namespace std;    

// read in text file
vector<wstring> read_lines(string file, int n = -1)
{
	vector<wstring> file_text;
	wifstream wifs;
	wstring txtline;
	int c = 0;

	wifs.open(file);
	if (!wifs.is_open())
	{
		wcerr << L"Unable to open file" << endl;
		throw 1; 
	}
	// We are going to read an UTF-8 file
	//wifs.imbue(locale(wifs.getloc(), new codecvt_utf8<wchar_t, 0x10ffff, consume_header>()));
	if (n == -1){
		while (getline(wifs, txtline))
			file_text.push_back(txtline);
	}
	else{
		int i = 1;
		while (getline(wifs, txtline) && i <= n){
			file_text.push_back(txtline);
			i++;
		}
	}

	return(file_text);
}

// prints for: VECTOR INT
void printv(vector<int> vec, string name = "vec int", string sep = " "){
	cout << endl <<
		"--------------------------------------------------------------------" << endl << endl;
	cout << name << " : ";
	for (auto v : vec) cout << v << sep;
	cout << endl << endl <<
		"--------------------------------------------------------------------" << endl;
}
// prints for: VECTOR STRING
void printv(vector<string> vec, string name = "vec str", string sep = "\n"){
	cout << endl <<
		"--------------------------------------------------------------------" << endl << endl;
	cout << name << " : " << endl << endl;
	int i = 0;
	for (auto v : vec){
		cout << "[" << i << "]" << "\t" << v << sep;
		i++;
	}
	cout << endl << endl <<
		"--------------------------------------------------------------------" << endl;
}
// prints for: VECTOR WSTRING
void printv(vector<wstring> vec, string name = "vec wstr", string sep = "\n"){
	cout << endl <<
		"--------------------------------------------------------------------" << endl << endl;
	cout << name << " : " << endl << endl;
	int i = 0;
	for (auto v : vec){
		wcout << "[" << i << "]" << "\t" << v;
		cout << sep;
		i++;
	}
	cout << endl << endl <<
		"--------------------------------------------------------------------" << endl;
}
// prints for: VECTOR VECTOR INT
void printv(vector<vector<int>> Vec, string name = "vec-vec int", string sep = " "){
	cout << endl <<
		"--------------------------------------------------------------------" << endl << endl;
	cout << name << " : " << endl << endl;
	int i = 0;
	for (auto V : Vec){
		cout << "[" << i << "]" << "\t";
		int iter = 0;
		for (auto v : V){
			cout << v << sep;
			if (iter % 60 == 59) wcout << L" |>" << L"\n\t";
			iter++;
		}
		cout << endl;
		i++;
	}
	cout << endl << endl <<
		"--------------------------------------------------------------------" << endl;
}
// prints for: VECTOR VECTOR DOUBLE
void printv(vector<vector<double>> Vec, string name = "vec-vec double", string sep = " "){
	cout << endl <<
		"--------------------------------------------------------------------" << endl << endl;
	cout << name << " : " << endl << endl;
	int i = 0;
	for (auto V : Vec){
		cout << "[" << i << "]" << "\t";
		int iter = 0;
		for (auto v : V){
			cout << fixed << v << sep;
			if (iter % 10 == 9) wcout << L" |>" << L"\n\t";
			iter++;
		}
		cout << endl;
		i++;
	}
	cout << endl << endl <<
		"--------------------------------------------------------------------" << endl;
}


// extract words from text line
vector<wstring> get_words(wstring line)
{
	vector<int> start;
	vector<int> end;
	vector<wstring> words;

	// looking for word starts and word ends
	for (unsigned i = 0; i < line.size(); i++)
	{
		if (i == 0 && iswalnum(line[i]))
		{
			start.push_back(i);
		}
		else{
			if (i > 0 && iswalnum(line[i]) && !iswalnum(line[i - 1]))
			{
				start.push_back(i);
			}
		}

		if (i != 0 && !iswalnum(line[i]) && iswalnum(line[i - 1]))
		{
			end.push_back(i - 1);
		}
		if ((i + 1) == line.size() && iswalnum(line[i])){
			end.push_back(i);
		}
	}

	// extract string snippets that are words
	for (unsigned i = 0; i < start.size(); ++i)
	{
		words.push_back(line.substr(start[i], (end[i] - start[i]) + 1));
	}

	return(words); 
}

// get all unique words from two texts
vector<wstring> get_vocab(vector<wstring> text1, vector<wstring> text2)
{
	vector<wstring> vocab; 
	set<wstring> dict;

	for (auto line : text1)
	{
		vector<wstring> words = get_words(line);
		for (auto word : words){
			if (dict.count(word) == 0){
				dict.insert(word);
				vocab.push_back(word);
			}
		}
	}
	for (auto line : text2)
	{
		vector<wstring> words = get_words(line);
		for (auto word : words){
			if (dict.count(word) == 0){
				dict.insert(word);
				vocab.push_back(word);
			}
		}
	}

	return(vocab);
}

// print execution time 
clock_t start = clock();
void print_exec_time()
{
	clock_t end = clock();
	double ts = (end - start);
	double cpts = CLOCKS_PER_SEC;
	cout << endl << ts / cpts << " sec" << endl;
}

// computing text DNAs 
vector<vector<int>> get_text_dna(vector<wstring> text, vector<wstring> dict){
	// declarations 
	wstring                line;                      // line of text
	vector< wstring>       words;                     // words within a line of text
	size_t word_found_at = string::npos;              // position in dictionary where particular word was found
	vector<int>            ldna;      // vector to store word frequecies and dictionary positions in 
	vector< vector< int> > tdna;                      // vector of ldna vectors ... the DNA of the text

	// go through lines of text
	for (size_t i = 0; i < text.size(); i++){
		words = get_words(text[i]);
		// go through words and mark there occurence
		for (auto word : words){
			// devel // cout << "."; // devel //
		word_found_at = (find(dict.begin(), dict.end(), word) - dict.begin());
			if (word_found_at < dict.size()){
				ldna[word_found_at] += 1;
			}
			else{
				wcout << L"warning: dict index OOR (" << word_found_at << " "
					<< word << L")" << endl;
				fflush(NULL);
			}
		}
		// push line dna to text dna vector
		tdna.push_back(ldna);
	}

	// return 
	return tdna;
}

// computing differences between two vectors 
double ldna_similarity(vector<int> tdna1, vector<int> tdna2){
	if (tdna1.size() != tdna2.size()){
		cout << "Error! text dna size differ."; 
		return(-2); 
	}
	
	float nw = 0;
	float nd = 0;
	float nw1 = 0;
	float nw2 = 0;

	for (unsigned i = 0; i < tdna1.size(); i++){
		nw1 += tdna1[i];
		nw2 += tdna2[i];
		nd += abs(tdna1[i] - tdna2[i]);
	}
	nw = nw1 + nw2 ;
	if (nw1 == 0 || nw2 == 0) nw = 0; 
	return( 1 - (nd / nw) ); 
}


// MAIN //
int main(int argc, char* argv[])
{
	// ---------------------------------------------------------------------- // 
	// make console print special characters correctly
		SetConsoleOutputCP(1252); // latin1
	// ---------------------------------------------------------------------- // 

	// handle command line arguments
	 string fname1 = "C:/Dropbox/C++/DEU2008.txt";
	 string fname2 = "C:/Dropbox/C++/DEU2009.txt";
	//string fname1 = "C:/Dropbox/C++/test3.txt";
	//string fname2 = "C:/Dropbox/C++/test4.txt";
	if (argc > 2){
		fname1 = argv[1];
		fname2 = argv[2];
	}
	else{
		cout << "Warning:  Program expects two arguments. (1) path to first text file; (2) path to second text file" << endl << endl; 
	}

	// read in texts 	
	vector<wstring> text1 = read_lines(fname1, 400 );
	vector<wstring> text2 = read_lines(fname2, 800);

	// get dictionary
	vector<wstring> dictionary = get_vocab(text1, text2);

	// get text dnas
	vector<vector<int>> tdna1 = get_text_dna(text1, dictionary);
	vector<vector<int>> tdna2 = get_text_dna(text2, dictionary);
	cout << "size of tdna1 : " << tdna1.size() << endl ;
	cout << "size of tdna1 : " << tdna2.size() << endl;
	// print execution time 
	print_exec_time();

	// compute distance matrix 
	/*vector<vector<double>> dist_mat(0); 
	vector<double> dist_init(tdna2.size(),8);
	for (int i = 0; i < tdna1.size(); i++){
		dist_mat.push_back(dist_init);
	}
	// print execution time 
	print_exec_time();
	
	for (unsigned i = 0; i < tdna1.size(); i++){
		for (unsigned j = 0; j < tdna2.size(); j++){
			dist_mat[i][j] = ldna_similarity(tdna1[i], tdna2[j]);
		}
	}
	*/

	// ---------------------------------------------------------------------- // 
		// print execution time 
			print_exec_time(); 
		// return
			return 0;
	// ---------------------------------------------------------------------- // 
}


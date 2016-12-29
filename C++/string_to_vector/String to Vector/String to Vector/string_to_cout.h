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
	while (i  < str.size()){
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
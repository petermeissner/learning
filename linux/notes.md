# package manager

- get/list dependencies
- disk upgrade


# shell configuration files

- /etc/bashrc     _system wide_
- /etc/profile    _during login shell_
- ~/.bashrc_profile
- ~/.bash_logout
- ~/.bashrc


# shell variables 

- env
- set
- e.g. `echo $PATH` 
- `test=testing`
- export


# globbing - global command

- * - any number of characters
- ? - only one character
- [abc] and [^abc] for allowing or disallowing list of characters


# quoting

- "" will still evaluate variables
`echo "evaluated to: $LOGNAME"`

- '' will make variables literal
`echo 'literal $LOGNAME: $LOGNAME'`

- \ will escape one special character
`echo "literal \$LOGNAME: $LOGNAME"`


# finding
- locate 
- find
- wheris

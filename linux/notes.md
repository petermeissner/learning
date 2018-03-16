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

# man 
- `whatis passwd` / `man -f passwd` 
- `man 5 passwd`
- `apropos passwd` / `man -k passwd`
- `/` for searching and `n` to go to next instance

# info
- hyperlinked manpages + can display manpages 

# root access
- `sudo ...`
- `sudo -i` interactive root shell
- `su root`
- `sudo -s` - very good because all else / wd, aliases, ... stay the same

# file system (FHS - Filesystem Hierarchy Standard)
- /bin  - executables
- /boot - booting up (kernal)
- /dev  - all devices
- /etc  - configuration
- /home - user folders
- /lib   - library files
- /lib64 - library files
- /media - mounting cd drives and usb drives to
- /mnt   - mounting other hard drives to
- /opt   - additional software not covered by package management that should be 
           used system wide 
- /proc - info about the running system
- /root - home for root
- /sbin - system and system administrator tools 
- /srv - server applications
- /sys - info about hardwar
- /tmp - 
- /usr - mroe application, configuration, documantations
- /var - varying size files - e.g. logs



#include <stdio.h>
#include <libssh2.h>

/* This is a comment */
int main(int argc, char *argv[])
{
  const char * libssh2_version(int required_version);
  printf("libssh2_version : %s", libssh2_version);

  return 0 ;
}


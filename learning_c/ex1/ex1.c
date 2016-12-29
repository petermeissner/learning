#include <stdio.h>
 
/* This is a comment */
int main(int argc, char *argv[])
{
  int distance = 100;
  double dist = distance;
  
  // this is also a comment
  printf("%d : integer 100 \n", distance);
  printf("%f : float 2.9...\n", dist/34);
  printf("%d : integer 0.1 \n", distance/1000);
  printf("%0e : float converted to exp \n", dist/1000);
  printf("%0e : \n", dist/1000);
  printf("%s : \n", "[distance]");

  return 0 ;
}


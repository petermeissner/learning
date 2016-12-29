CFLAGS = -Wall -g 
LDLIBS = -lcurl -lpthread `pkg-config --cflags gtk+-3.0` `pkg-config --libs gtk+-3.0`

all: ex1 ex2 ex3 gr1 gr2

ex1: ex1/ex1
ex2: ex2/ex1
ex3: ex3/ex3
gr1: gr1/gr1
gr2: gr2/gr2

clean:
	rm -f ex1/ex1
	rm -f ex2/ex1
	rm -f ex3/ex3
	rm -f gr1/gr1
	rm -f gr2/gr2

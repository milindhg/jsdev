
#Fibonacci series problem in Python

def fib(n):
    if n<0:
        print ("invalid input")
    elif n==1:
        return 0
    elif n==2:
        return 1
    else:
        return fib(n-1) + fib(n-2)

def main():
    print(fib(1))
    print(fib(2))
    print(fib(3))
    print(fib(4))
    print(fib(10))
    print(fib(11))
    print(fib(12))

main()


import numpy, math

def relax(A, maxsteps, convergence):
    iterations = 0
    diff = convergence +1

    Nx = A.shape[1]
    Ny = A.shape[0]
    
    while iterations < maxsteps and diff > convergence:
        Atemp = A.copy()
        diff = 0.0
        
        for y in range(1,Ny-1):
            for x in range(1,Ny-1):
                A[y,x] = 0.25*(Atemp[y,x+1]+Atemp[y,x-1]+Atemp[y+1,x]+Atemp[y-1,x])
                diff  += math.fabs(A[y,x] - Atemp[y,x])

        diff /=(Nx*Ny)
        iterations += 1
    return(diff)

def boundary(A,x,y):


    Nx = A.shape[1]
    Ny = A.shape[0]
    Lx = x[Nx-1]
    

    A[:,0]    =   100*numpy.sin(math.pi*x/Lx)
    A[:,Nx-1] = - 100*numpy.sin(math.pi*x/Lx)
    A[0,:]    = 0.0
    A[Ny-1,:] = 0.0


def inputs(Nx,Ny,maxiter):
    Nx=int(Nx)
    Ny=int(Ny)
    maxiter=int(maxiter)
    x = numpy.linspace(0,1,num=Nx+2)
    y = numpy.linspace(0,1,num=Ny+2)
    A = numpy.zeros((Nx+2,Ny+2))
    boundary(A,x,y)
    return(relax(A,maxiter,0.00001))


if __name__ == "__main__":
    print(inputs(4,4,100))   


import unittest
from quadratic_neha import findRoots

class Test_distanceformula(unittest.TestCase):
    def testCases_forEqual (self):
        self.assertEqual(findRoots(1,2,3),(-1.0, 2.8284271247461903, -1.0, -2.8284271247461903)) #passed
        self.assertEqual(findRoots(2,2,2),(-0.5, 3.4641016151377544, -0.5, -3.4641016151377544)) #passed
        self.assertEqual(findRoots(0,2,3),-1 )
        
    
    def testCases_forUnEqual (self):
        self.assertNotEqual(findRoots(1,2,3),0) #passed
        self.assertNotEqual(findRoots(4,5,-6,),0) #passed

if __name__ == '__main__':
    unittest.main()
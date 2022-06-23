import unittest
from distance_zain import distance_formula

class Test_distanceformula(unittest.TestCase):
    def testCases_forEqual (self):
        self.assertEqual(distance_formula(1,5,4,5),3) #passed
        self.assertEqual(distance_formula(1,2,-3,-4),7.211102550927978) #passed
        self.assertEqual(distance_formula(0,1.99999,5.88999,100),98.1768503375424 ) #passed
    
    def testCases_forUnEqual (self):
        self.assertNotEqual(distance_formula(1,2,3,4),0) #passed
        self.assertNotEqual(distance_formula(4,5,-6,-7),0) #passed

if __name__ == '__main__':
    unittest.main()
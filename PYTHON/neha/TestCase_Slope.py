import unittest
from slope_midhat import calculate_slope

class Test_distanceformula(unittest.TestCase):
    def testCases_forEqual (self):
        self.assertEqual(calculate_slope(1,2,3,4),1.0) #passed
        self.assertEqual(calculate_slope(0,0,0,0), "division by zero") #failed
        self.assertEqual(calculate_slope(-1,-3,-6,-10), 1.4) #passed
    
    def testCases_forUnEqual (self):
        self.assertNotEqual(calculate_slope(1,2,3,4),0) #passed
        self.assertNotEqual(calculate_slope(4,5,-6,-7),0) #passed

if __name__ == '__main__':
    unittest.main()
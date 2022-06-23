import unittest
from quadraticFromula import Quardratic_Formula

class Test_quadraticFormula(unittest.TestCase):
    def testCases_forEqual (self):
        self.assertEqual(Quardratic_Formula(1,2,-15),(3,-5))
        self.assertEqual(Quardratic_Formula(1,2,3),((-0.9999999999999999+1.4142135623730951j), (-1-1.4142135623730951j)))
        self.assertEqual(Quardratic_Formula(5,2,-7), (1.0, -1.4))
    
    def testCases_forUnEqual (self):
        self.assertNotEqual(Quardratic_Formula(1,2,3),0)

if __name__ == '__main__':
    unittest.main()
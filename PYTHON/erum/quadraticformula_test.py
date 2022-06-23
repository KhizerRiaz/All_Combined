
from unittest import result
from quadraticformula import quadratic_formula
import quadraticformula
import unittest
from random import seed, uniform

class Testing(unittest.TestCase):



    def test(self):
            self.assertTrue(result,'Error')
    def test_result(self):
        self.assertEqual(quadratic_formula(1,2,3),[-1.0+(1.4142135623730951+0j),-1.0+(1.4142135623730951+0j)],'not equal') 
   
    def test_negative(self):
        a = 1
        b = 2
        c = 3
        self.assertGreaterEqual(a,0,'value is negative')
        self.assertGreaterEqual(b,0,'value is negative')
        self.assertGreaterEqual(c,0,'value is negative')


unittest.main()
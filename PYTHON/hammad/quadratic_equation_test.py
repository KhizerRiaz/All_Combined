
from unittest import result
from quadratic_equation import quadratic
import quadratic_equation
import unittest
from random import seed, uniform

class Testing(unittest.TestCase):



    def test(self):
            self.assertTrue(result,'Error')
    def test_result(self):
        self.assertEqual(quadratic(2,1,0),[(-0.5+0j), 0j],'not equal') 
   
    def test_negative(self):
        a = 2
        b = 1
        c = 0
        self.assertGreaterEqual(a,0,'value is negative')
        self.assertGreaterEqual(b,0,'value is negative')
        self.assertGreaterEqual(c,0,'value is negative')


unittest.main()
import unittest
from unittest import result
import slopeformula02
from slopeformula02 import slope_formula

class Testing(unittest.TestCase):
    def test(self):
            self.assertTrue(result,'Error')
    def test_result(self):
            self.assertEqual(slope_formula(5,3),64,'Not Equal')
    def test_division(self):
            self.assertGreater(slope_formula(5,4),0,'negative error')

unittest.main()
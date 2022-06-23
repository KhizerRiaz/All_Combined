import unittest
from unittest import result
import slopeformula01
from slopeformula01 import slp

class Testing(unittest.TestCase):
    def test(self):
            self.assertTrue(result,'Error')
    def test_result(self):
            self.assertEqual(slp(5,4,3,2),1,'Not Equal')
    def test_division(self):
            self.assertGreater(slp(5,4,0,0),0,'division error')

unittest.main()
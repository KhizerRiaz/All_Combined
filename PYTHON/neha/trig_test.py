# Complete Testing not possible as the value was float; So typecasting to int was the best option given the constraints.

import unittest
from trig_jhanzeb import trig

class TestSum(unittest.TestCase):
 
    def test_correctValue(self):    # Check for Correct Value
        self.assertEqual(trig(23,4), 1)
        self.assertEqual(trig(12,1), 0)
        self.assertEqual(trig(12,2), 0)
        self.assertEqual(trig(90,1), 0)
        self.assertEqual(trig(90,2), 0)


if __name__ == '__main__':
    unittest.main()

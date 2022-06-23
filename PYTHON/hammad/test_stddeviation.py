import unittest
from Task_2 import StandardDeviation

class TestDeviation(unittest.TestCase):
    # Check Answer Normally
    def test_DeviationTrueResult(self):
        self.assertEqual(StandardDeviation([1,2,3]),0.3333333333333333)
        self.assertAlmostEqual(StandardDeviation([0,0,0]),0)
        self.assertAlmostEqual(StandardDeviation([-1,-1,-1]),0)

    def test_DeviationFalseResult(self):
        self.assertNotEqual(StandardDeviation([1,2,3]),0.6)
        self.assertNotEqual(StandardDeviation([0,0,0]),1)
        self.assertNotEqual(StandardDeviation([-1,-1,-1]),1)


if __name__=='__main__':
    unittest.main()
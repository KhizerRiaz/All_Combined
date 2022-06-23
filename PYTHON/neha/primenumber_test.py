import unittest
from primenumber_taha import PrimeChecker

class TestSum(unittest.TestCase):
 
    def test_correctValue(self):    # Check for Correct Value
        with self.assertRaises(ValueError):
            PrimeChecker("zain")
        self.assertEqual(PrimeChecker(11), 0, "Should be Prime no.")
        self.assertEqual(PrimeChecker(10), 1, "Should not be Prime no.")
        self.assertEqual(PrimeChecker(-4), 1, "Should be Error")
        self.assertEqual(PrimeChecker(4.66), 1, "Should be Error")
        self.assertEqual(PrimeChecker("a"), 1, "Should be Error")

    def test_incorrectValue(self):    # Check for Incorrect Value
        with self.assertRaises(ValueError):
            PrimeChecker("zain")
        self.assertNotEqual(PrimeChecker(4), 1, "Should not be Prime")
        self.assertNotEqual(PrimeChecker(8), 1, "Should not be Prime")
    

if __name__ == '__main__':
    unittest.main()

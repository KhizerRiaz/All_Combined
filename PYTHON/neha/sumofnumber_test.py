import unittest
from sumofnumber_mohsin import my_function

class TestSum(unittest.TestCase):
 
    def test_correctValue(self):    # Check for Correct Value
        with self.assertRaises(ValueError):
            my_function("zain",3)
        self.assertEqual(my_function(2,3), 5, "Should be 5")
        self.assertEqual(my_function(-1,2), 1, "Should be 1")
        self.assertEqual(my_function(-1,-2), -3, "Should be -3")
        self.assertEqual(my_function(0,0), 0, "Should be 0")

    def test_incorrectValue(self):    # Check for Incorrect Value
        with self.assertRaises(ValueError):
            my_function("zain",3)
        self.assertNotEqual(my_function(2,3), 50, "Should be 5")
        self.assertNotEqual(my_function("seven","zero"), 0, "Should be null")
    

if __name__ == '__main__':
    unittest.main()

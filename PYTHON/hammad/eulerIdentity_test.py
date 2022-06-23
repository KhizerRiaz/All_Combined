import unittest
from eulerIdentity import my_function

class TestSum(unittest.TestCase):
 
    def test_returnCorrectValue(self):
        # with self.assertRaises(ValueError):
        #     my_function("zain")
        self.assertEqual(my_function(), 0, "Should be 0") # For Correct Value
    
    def test_returnIncorrectValue(self):
        self.assertNotEqual(my_function(), 1, "Should be 0") # For Incorrect Value

    def test_eulerIdentity(self):
        self.assertFalse(my_function())


if __name__ == '__main__':
    unittest.main()
import unittest
from relativity import relativity

class TestingRelativity(unittest.TestCase):  
    def test_fib_false(self):
        self.assertEqual(relativity(8, 6),7.190041429894541e+17)
        self.assertEqual(relativity(7, 1),6.291286251157723e+17)
    
    def test_fib_true(self):
        self.assertNotEqual(relativity(2, 3),9832)
        self.assertNotEqual(relativity(4, 7),5808)        

    
    
if __name__ == '__main__':  
    unittest.main()  

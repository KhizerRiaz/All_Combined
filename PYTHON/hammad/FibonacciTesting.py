import unittest
from fibonacci import fibonacciSeries

class TestingFib(unittest.TestCase):  
  
    def test_fib_true(self):
        self.assertEqual(fibonacciSeries(6),8)
        self.assertEqual(fibonacciSeries(7),13)
        self.assertEqual(fibonacciSeries(8),21)        

    def test_fib_false(self):
        self.assertNotEqual(fibonacciSeries(5),8)
        self.assertNotEqual(fibonacciSeries(6),13)
        self.assertNotEqual(fibonacciSeries(7),21)        

    
if __name__ == '__main__':  
    unittest.main()  

import unittest
from binomial_coefficient import binomial
from math import factorial as fac

class TestBin_Coff(unittest.TestCase):
    def test_Equal(self):
        self.assertEqual(binomial(8 , 3) , 56)
        self.assertEqual(binomial(10 , 2) , 45)
        self.assertEqual(binomial(101 , 2) , 5050)

    def test_NotEqual(self):
        self.assertNotEqual(binomial(8 , 3) , 40)
        self.assertNotEqual(binomial(10 , 2) , 44)
        self.assertNotEqual(binomial(101 , 2) , 5000)
        
        with self.assertRaises(ValueError):
            binomial("khizer","riaz")
    # def test_NotEqual(self):
    #     self.assertNotEqual()    

if __name__ == '__main__':
    unittest.main()
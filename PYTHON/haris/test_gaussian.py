import unittest
from gaussain import gaussain
from math import factorial as fac

class TestBin_Coff(unittest.TestCase):
    def test_Equal(self):
        self.assertEqual(gaussain(2) , 1.7724538509055159)
        self.assertEqual(gaussain(1) , float('inf'))
        self.assertEqual(gaussain(3) , float('inf'))

    def test_NotEqual(self):
        self.assertNotEqual(gaussain(5) , 40)
        self.assertNotEqual(gaussain(2.5544) , 44)
        self.assertNotEqual(gaussain(2.99724) , 5000)
        
        with self.assertRaises(ValueError):
            gaussain("khizer")
    # def test_NotEqual(self):
    #     self.assertNotEqual()    

if __name__ == '__main__':
    unittest.main()
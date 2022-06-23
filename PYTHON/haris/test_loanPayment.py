import unittest
from loanPayment import loanPayment

class TestBin_Coff(unittest.TestCase):
    def test_Equal(self):
        self.assertEqual(loanPayment(1 , 2 , 3) , 0.67)
        self.assertEqual(loanPayment(3 , 4 , 5) , 2.40)
        self.assertEqual(loanPayment(2.3 , 2.6 , 3.543) , 1.66)

    def test_NotEqual(self):
        self.assertNotEqual(loanPayment(1.231 , 2 , 3) , 4.3242355)
        self.assertNotEqual(loanPayment(1.43 , 2.423 , 3.2314) , 44)
        self.assertNotEqual(loanPayment(1 , 2 , 3) , 5000)
        
        with self.assertRaises(ValueError):
            loanPayment("khizer" , "1" , "2")

    # def test_NotEqual(self):
    #     self.assertNotEqual()    

if __name__ == '__main__':
    unittest.main()
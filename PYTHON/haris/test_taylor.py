import unittest
from taylor import taylorExpansion

class TestBin_Coff(unittest.TestCase):
    def test_Equal(self):
        self.assertEqual(taylorExpansion(8 , 3) , 41)
        self.assertEqual(taylorExpansion(3 , 8) , 19.846428571428568)
        self.assertEqual(taylorExpansion(142 , 19) , 9.845025263560626e+22)

    def test_NotEqual(self):
        self.assertNotEqual(taylorExpansion(3 , 8) , 20.312423)
        self.assertNotEqual(taylorExpansion(31 , 4) , 324)
        self.assertNotEqual(taylorExpansion(9 , 3) , 0)
        
        with self.assertRaises(ValueError):
            taylorExpansion("khizer","riaz")
    # def test_NotEqual(self):
    #     self.assertNotEqual()    

if __name__ == '__main__':
    unittest.main()
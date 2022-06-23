import unittest
from laplace import inputs

class TestLaplace(unittest.TestCase):
    def test_LaplaceTrue(self):    
        self.assertEqual(inputs(40,40,100),0.06990103497120373)
        self.assertEqual(inputs(2,2,100),8.881784197001252e-16)
        self.assertEqual(inputs(1,1,1),0)
    
    def test_Laplace(self):
        self.assertNotEqual(inputs(1,2,100),8.881784197001252e-16)


if __name__ == "__main__":
    unittest.main()
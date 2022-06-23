import unittest
from trignometricidentity import trignometricidentity
class TestFourierSeries(unittest.TestCase):
    def test_FourierSeriesTrueResult(self):
        self.assertEqual(trignometricidentity(1),(0.8414709848078965, 0.5403023058681397, 1.5574077246549023))
        self.assertEqual(trignometricidentity(0),(0.0, 1.0, 0.0))
        self.assertEqual(trignometricidentity(3.142),(-0.00040734639894142617, -0.9999999170344522, 0.00040734643273714614))
    def test_FourierSeriesFalseResult(self):
        self.assertNotEqual(trignometricidentity(1),0)
        self.assertNotEqual(trignometricidentity(10),0)
        self.assertNotEqual(trignometricidentity(11),0)



if __name__=='__main__':
    unittest.main()
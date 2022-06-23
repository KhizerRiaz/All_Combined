import unittest
from euler import euler

class TestEuler(unittest.TestCase):
    def test_Equal(self):
        self.assertEqual(euler(float(0) , float(0.1) , float(1)),[0.1, 0.12000000000000001, 0.184, 0.3008, 0.48096000000000005, 0.737152])
        self.assertEqual(euler(float(0) , float(1) , float(2)),[1, 1.4, 2.12, 3.2880000000000003, 5.083200000000001, 7.756480000000002])
        self.assertEqual(euler(float(0) , float(1.5) , float(4.2)),[1.5, 2.7600000000000002, 5.784000000000001, 12.05376, 24.295718400000002, 47.526521856])
        self.assertEqual(euler(float(2.2) , float(3.3) , float(4.4)),[3.3, 5.720000000000001, 9.398400000000002, 14.888896000000004, 22.988810240000007, 34.84628674560001])

        with self.assertRaises(ValueError):
            euler("abc" , 0 , 0)

    def test_NotEqual(self):
        self.assertNotEqual(euler(float(0) , float(0.1) , float(1)),[1, 1.4, 2.12, 3.2880000000000003, 5.083200000000001, 7.756480000000002])
        self.assertNotEqual(euler(float(0) , float(1) , float(2)),[1, 5, 2.12, 10, 5.083200000000001, 7.756480000000002])
        self.assertNotEqual(euler(float(0) , float(1.5) , float(4.2)),[5, 43.42342, 5.784000000000001, 12.05376, 24.295718400000002, 47.526521856])
        self.assertNotEqual(euler(float(2.2) , float(3.3) , float(4.4)),[2, 54.44323, 9.398400000000002, 14.888896000000004, 22.988810240000007, 34.84628674560001])

        with self.assertRaises(ValueError):
            euler("abc" , 0 , 0)


if __name__ == '__main__':
    unittest.main()
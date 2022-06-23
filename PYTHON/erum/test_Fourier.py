import unittest
from FourierSeries import plot_graph

class TestFourierSeries(unittest.TestCase):
    def test_FourierSeriesEqual(self):
        self.assertEqual(plot_graph(10,5),None)
        self.assertEqual(plot_graph(0,1),0)
        self.assertEqual(plot_graph(100,1),1)

    def test_FourierSeriesNotEqual(self):
        self.assertNotEqual(plot_graph(1,2),1)
        self.assertNotEqual(plot_graph(-1,0),0)
        self.assertNotEqual(plot_graph(90,3),0)




if __name__ == '__main__':
    unittest.main()
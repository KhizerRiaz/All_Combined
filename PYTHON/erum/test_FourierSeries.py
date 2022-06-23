import unittest
from FourierSeries import plot_graph
class TestFourierSeries(unittest.TestCase):
    def test_FourierSeriesTrueResult(self):
        self.assertEqual(plot_graph(1,5),1)
        self.assertEqual(plot_graph(1,0),1)
        self.assertEqual(plot_graph(0,0),0)
    def test_FourierSeriesFalseResult(self):
        self.assertNotEqual(plot_graph(1,5),0)
        self.assertNotEqual(plot_graph(1,2),0)
        self.assertNotEqual(plot_graph(1,1),0)



if __name__=='__main__':
    unittest.main()
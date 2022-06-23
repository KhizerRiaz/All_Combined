# Supported by: M.Zain ul Abidin
from sympy import *
import streamlit as st

def my_function():
  try:
    return (E**(pi*I) + 1)

  except:
    st.write("Error")
my_function()
import re
from sys import path

textFile = open('ratings.txt', 'r')

lines = textFile.readlines()

pattern = re.compile('\t')

for line in lines:
    row = line.split('\t', 2)
    
textFile = open('ydata-ymusic-user-artist-ratings-v1_0.txt', 'r')
lines = textFile.readlines()

for line in lines:
    print(line)
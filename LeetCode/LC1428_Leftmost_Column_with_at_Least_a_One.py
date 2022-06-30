# """
# This is BinaryMatrix's API interface.
# You should not implement it, or speculate about its implementation
# """
# class BinaryMatrix(object):
#    def get(self, x, y):
#        """
#        :type x : int, y : int
#        :rtype int
#        """
#
#    def dimensions:
#        """
#        :rtype list[]
#        """


class Solution(object):
    def leftMostColumnWithOne(self, binaryMatrix):
        """
        :type binaryMatrix: BinaryMatrix
        :rtype: int
        """
        dimensions = binaryMatrix.dimensions()
        M, N = dimensions[0], dimensions[1]

        i, j = 0, N-1
        min_col = N

        while i < M and j >= 0:
            cell = binaryMatrix.get(i, j)
            if cell == 0:
                i += 1
            else:
                min_col = min(min_col, j)
                j -= 1

        if min_col != N:
            return min_col
        return -1


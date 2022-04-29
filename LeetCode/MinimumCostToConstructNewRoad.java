/* Prroblem: write an algorithm to calculate the minimum cost to add new roads between the cities such that all the cities are accessible from each other 

int numTotalAvailableCities = 6; 
int numTotalAvailableRoads = 3; 
int[,] roadsAvailable = { { 1, 4 }, { 4, 5 }, { 2, 3 } }; 
int[,] costNewRoadsToConstruct = { { 1, 2,5 }, { 1,3,10 }, {1,6,2} ,{ 5, 6, 5 } };
int numNewRoadsConstruct = 4;
 */

public class MinimumCostToConstructNewRoad
    {
        public static int getMinimumCostToConstruct(int numTotalAvailableCities,
            int numTotalAvailableRoads,
            int[] roadsAvailable,
            int numNewRoadsConstruct,
            int[] costNewRoadsConstruct)

        {
            int totalCost = 0;
            bool[] Visited = new bool[numTotalAvailableCities];
            int[] Keys = new int[numTotalAvailableCities];
            int[] Parent = new int[numTotalAvailableCities];

            int[,] AdjMatrix = GetAdjecencyMatrix(roadsAvailable, costNewRoadsConstruct, numTotalAvailableCities);


            for (int i=0;i< numTotalAvailableCities;i++)
            {
                Keys[i] = Int32.MaxValue;
            }

            Keys[0] = 0;
            Parent[0] = -1;

            for(int i=0;i< numTotalAvailableCities-1;i++)
            {
                var u = FindMin(Visited, Keys);

                Visited[u] = true;
                for(int v=0;v< numTotalAvailableCities;v++)
                {
                    if(Visited[v]==false && AdjMatrix[u, v]!=Int32.MaxValue && AdjMatrix[u,v]<Keys[v])
                    {
                        Parent[v] = u;
                        Keys[v] = AdjMatrix[u, v];
                    }
                }

            }

           for(int i=1;i< numTotalAvailableCities;i++)
            {
                totalCost = totalCost + AdjMatrix[Parent[i], i];
            }
            return totalCost;
        }


        private static int FindMin(bool[] Visited, int[] Keys)
        {
            int min = Int32.MaxValue; int index = -1;
            for (int i = 0; i < Keys.Length; i++)
            {
                if (Visited[i] == false && Keys[i] < min)
                {
                    min = Keys[i];
                    index = i;
                }
            }
            return index;
        }


        private static int[,]  GetAdjecencyMatrix(int[,] roadsAvailable, int[,] costNewRoadsConstruct,int numTotalAvailableCities)
        {
            int[,] AdjMatrix = new int[numTotalAvailableCities, numTotalAvailableCities];

            for (int i = 0; i < numTotalAvailableCities; i++)
            {
                for (int j = 0; j < numTotalAvailableCities; j++)
                {
                    AdjMatrix[i, j] = Int32.MaxValue;
                }
            }


            int count = 0;
            for (int i = 0; i < roadsAvailable.GetLength(0); i++)
            {
                int start = roadsAvailable[i, count]-1;
                int end = roadsAvailable[i,count+1]-1;
                AdjMatrix[start, end] = 0;
            }

            for (int i = 0; i < costNewRoadsConstruct.GetLength(0); i++)
            {
                int start = costNewRoadsConstruct[i, count]-1;
                int end = costNewRoadsConstruct[i, count+1]-1;
                int cost= costNewRoadsConstruct[i, count + 2];

                AdjMatrix[start, end] = cost;
            }

            return AdjMatrix;
        }


        public static void main(String[] args){
            int numTotalAvailableCities = 6; 
            int numTotalAvailableRoads = 3; 
            int[] roadsAvailable = { { 1, 4 }, { 4, 5 }, { 2, 3 } }; 
            int[] costNewRoadsToConstruct = { { 1, 2,5 }, { 1,3,10 }, {1,6,2} ,{ 5, 6, 5 } };
            int numNewRoadsConstruct = 4;
            System.out.println(getMinimumCostToConstruct(numTotalAvailableCities, numTotalAvailableRoads, roadsAvailable, numNewRoadsConstruct, costNewRoadsToConstruct));
        }
    }
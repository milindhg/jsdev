/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 *
 * https://leetcode.com/problems/find-the-town-judge/description/
 *
 * algorithms
 * Easy (50.03%)
 * Likes:    675
 * Dislikes: 70
 * Total Accepted:    96.8K
 * Total Submissions: 191.6K
 * Testcase Example:  '2\n[[1,2]]'
 *
 * In a town, there are N people labelled from 1 to N.  There is a rumor that
 * one of these people is secretly the town judge.
 * 
 * If the town judge exists, then:
 * 
 * 
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 * 
 * 
 * You are given trust, an array of pairs trust[i] = [a, b] representing that
 * the person labelled a trusts the person labelled b.
 * 
 * If the town judge exists and can be identified, return the label of the town
 * judge.  Otherwise, return -1.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: N = 2, trust = [[1,2]]
 * Output: 2
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: N = 3, trust = [[1,3],[2,3]]
 * Output: 3
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: N = 3, trust = [[1,3],[2,3],[3,1]]
 * Output: -1
 * 
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: N = 3, trust = [[1,2],[2,3]]
 * Output: -1
 * 
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
 * Output: 3
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= N <= 1000
 * trust.length <= 10000
 * trust[i] are all different
 * trust[i][0] != trust[i][1]
 * 1 <= trust[i][0], trust[i][1] <= N
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/337521751/
 *              beats 83.37% JS Submissions.
 * 
 * 

Biggest HINT: Since we have number N where input is for 1 to N numbers, we can
use an array. 
So by having a plan of 2 arrays one for count of trustOthers and another for
count of trustedByOthers we can easily kep count of both for each person in the
2 arrays -- where the index of arrays is the person.

Finally return the person if the person trustsOthers=0 and trustedByOthers=N-1
i.e. trusted by all except self.

 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    let trustedByOthersCount = new Array(N + 1);
    let trustsOthersCount = new Array(N + 1);
    trustedByOthersCount.fill(0);
    trustsOthersCount.fill(0);

    trust.forEach(relation => {
        let person = relation[0];
        let trustsPerson = relation[1];
        trustedByOthersCount[trustsPerson] += 1;
        trustsOthersCount[person] += 1;
    });

    for (let i = 1; i <= N; i++) {
        if (trustedByOthersCount[i] == N-1 && trustsOthersCount[i] == 0)
            return i;
    }

    return -1;
};
// @lc code=end

let main = () => {
    let N = 2;
    let trust = [[1,2]];
    console.log(findJudge(N, trust));

    N = 3;
    trust = [[1,3],[2,3]];
    console.log(findJudge(N, trust));

    N = 3;
    trust = [[1,3],[2,3],[3,1]];
    console.log(findJudge(N, trust));

    N = 3;
    trust = [[1,2],[2,3]];
    console.log(findJudge(N, trust));

    N = 4;
    trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
    console.log(findJudge(N, trust));

    N = 2;
    trust = [];
    console.log(findJudge(N, trust));

    N = 1;
    trust = [];
    console.log(findJudge(N, trust));
};

main();
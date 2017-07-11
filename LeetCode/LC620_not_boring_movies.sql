/**
 *
https://leetcode.com/problems/not-boring-movies/#/description 
X city opened a new cinema, many people would like to go to this cinema. The cinema also gives out a poster indicating the movies’ ratings and descriptions.

Please write a SQL query to output movies with an odd numbered ID and a description that is not 'boring'. Order the result by rating.

For example, table cinema:

+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |
+---------+-----------+--------------+-----------+
For the example above, the output should be:
+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |
+---------+-----------+--------------+-----------+

 * 
 * */

--Query 1: gave runtime percentile of 60%
select id,movie,description, rating from cinema where id%2=1 and description<>'boring' order by rating desc

--Query 2: gave runtime percentile of 88.96 --Enhancement here is that the filter is first applied on the non-boring entries and then on the odd entries. 
--So apparently if the db contains lots of entries with non-boring description, this query gives better execution rate. 
--The best idea would be to use indexing on a column and use that column for filtering.
select id,movie,description,rating from cinema where description<>'boring' and id%2=1 order by rating desc


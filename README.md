About
==
goals_tracker is an enhanced todo list used in command-line environment.

Installation
==
1. make sure `npm` is installed on your machine.
2. run `npm install -g goals_tracker`


Usage
==
This program is a list of 2 layers: Goals -> Tasks. 

Init
--
Initialising the goals list by `goals init`. <br>
Note: at the current version, goals list will be unique per directory.

List
--
Track your goals with list : `goals ls` or `goals list`

Add
--
Adding goals: `goals add <goal_name>` <br>
Adding tasks to a goal: `goals add -t <task_description> <goal_name>` where `<task_description>` is either a 1 word or a String. <br>
When adding tasks, you will be prompt to enter the number of hours that you expect the task will take. This is used to keep track your progress on your goals.

Done
--
When you have completed a task: `goals done -t <task_index> <goal_name>` where `task_index` is the index of the task found in `goals ls`

Remove
--
Remove goals: `goals rm <goal_name>` or `goals remove <goal_name>` <br>
Remove tasks for a goal: `goals rm -t <task_index> <goal_name>` where `task_index` is the index of the task found in `goals ls`




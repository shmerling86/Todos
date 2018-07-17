app.controller('myCtrl', function ($scope) {

    function Task(content) {
        this.content = content;
        this.isCompleted = false;

    }

    $scope.leftTasksFunction = function () {
        var complete = 0;
        for (var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].isCompleted) {
                complete++;
            }
        }
        $scope.leftTasks = ($scope.tasks.length - complete);
    }

    $scope.leftTasks = 0;
    $scope.task = '';
    $scope.tasks = [];
    $scope.haveNoTask = true;

    $scope.enterTask = function (content) {
        if (event.keyCode === 13 && $scope.task !== '') {
            var task = new Task(content)
            $scope.tasks.push(task);

            $scope.haveNoTask = false;
            $scope.task = '';
        }
            $scope.leftTasksFunction();
   
    }
    $scope.kindOfSort = "all";

    $scope.sortByStatus = function (item) {

        switch ($scope.kindOfSort) {
            case "all":
                return true;
            case "active":
                if (!item.isCompleted) return true;
                break;

            case "completed":
                if (item.isCompleted) return true;
                break;
        }
        return false;
    }

    $scope.hoverIn = function () {
        this.hoverEdit = true;
    };
    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };


    $scope.deleteTask = function ($index, item) {

        if (item) {
            var r = confirm("Are you sure you want to delete?");
            if (r == true) {
                $scope.tasks.splice($index, 1);
            }
        } else {
            alert('You need to complete the task first!')
        }


        if ($scope.tasks.length < 1) {
            $scope.haveNoTask = true;
        }

    }
});
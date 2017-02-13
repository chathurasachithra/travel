<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Travel cart admin | Log in</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="{{ URL::asset('admin/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ URL::asset('admin/dist/css/AdminLTE.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/iCheck/square/blue.css') }}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition login-page">
<div class="login-box"  ng-app="myApp" ng-controller="LoginController">
    <div class="login-logo">
        <a href="../../index2.html"><b>Admin</b>Travel cart</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

         <form name="loginForm" class="" novalidate>

            <div class="col-md 12 alert alert-danger" ng-show="!loginForm.$valid" ng-if="loginForm.$submitted">
                <ui ng-show="loginForm.$submitted || loginForm.email.$touched">
                    <li ng-show="loginForm.email.$error.email">Invalid email address<br></li>
                    <li ng-show="loginForm.email.$error.required">Email is required<br></li>
                </ui>
                <ui ng-show="loginForm.$submitted || loginForm.password.$touched">
                    <li ng-show="loginForm.password.$error.required">Password is required</li>
                </ui>
            </div>

            <fieldset ng-disabled="isSubmitting">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" ng-model="email" name="email" required="">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password" ng-model="password" name="password" required="">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">

                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button type="submit" ng-click="login(loginForm.$valid)"  class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </fieldset>
        </form>
        <a href="#">I forgot my password</a><br>

    </div>
    <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<!-- jQuery 2.2.3 -->
<script src="{{ URL::asset('admin/plugins/jQuery/jquery-2.2.3.min.js') }}"></script>
<!-- Bootstrap 3.3.6 -->
<script src="{{ URL::asset('admin/bootstrap/js/bootstrap.min.js') }}"></script>
<!-- iCheck -->
<script src="{{ URL::asset('admin/plugins/iCheck/icheck.min.js') }}"></script>

<script src="{{ URL::asset('js/angular.min.js') }}"></script>

</body>
</html>
<script src="{{ URL::asset('admin/controllers/LoginController.js') }}"></script>
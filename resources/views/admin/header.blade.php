{{--<!DOCTYPE html>--}}
{{--<html lang="en">--}}

{{--<head>--}}

    {{--<meta charset="utf-8">--}}
    {{--<meta http-equiv="X-UA-Compatible" content="IE=edge">--}}
    {{--<meta name="viewport" content="width=device-width, initial-scale=1">--}}
    {{--<meta name="description" content="">--}}
    {{--<meta name="author" content="">--}}

    {{--<title>GZ - Admin Panel</title>--}}

    {{--<!-- Bootstrap Core CSS -->--}}
    {{--<link href="{{ URL::asset('css/bootstrap.min.css') }}" rel="stylesheet">--}}
    {{--<link href="{{ URL::asset('css/metisMenu.min.css') }}" rel="stylesheet">--}}
    {{--<link href="{{ URL::asset('css/sb-admin-2.css') }}" rel="stylesheet">--}}
    {{--<link href="{{ URL::asset('css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">--}}
    {{--<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>--}}
    {{--<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>--}}

    {{--<style>--}}
        {{--.currency-container {--}}
            {{--text-align: right;--}}
        {{--}--}}
    {{--</style>--}}

{{--</head>--}}

{{--<body>--}}

{{--<div id="wrapper">--}}

    {{--<!-- Navigation -->--}}
    {{--<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">--}}
        {{--<div class="navbar-header">--}}
            {{--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">--}}
                {{--<span class="sr-only">Toggle navigation</span>--}}
                {{--<span class="icon-bar"></span>--}}
                {{--<span class="icon-bar"></span>--}}
                {{--<span class="icon-bar"></span>--}}
            {{--</button>--}}
            {{--<a class="navbar-brand" href="/707-gz-admin/dashboard">Admin Panel</a>--}}
        {{--</div>--}}
        {{--<!-- /.navbar-header -->--}}


        {{--<ul class="nav navbar-top-links navbar-right">--}}
            {{--<!-- /.dropdown -->--}}
            {{--<li class="dropdown">--}}
                {{--<a class="dropdown-toggle" data-toggle="dropdown" href="#"> Welcome <b>{{ $user->name }}</b>--}}
                    {{--<i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>--}}
                {{--</a>--}}
                {{--<ul class="dropdown-menu dropdown-user">--}}
                    {{--<li><a href="/707-gz-admin/logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>--}}
                    {{--</li>--}}
                {{--</ul>--}}
                {{--<!-- /.dropdown-user -->--}}
            {{--</li>--}}
            {{--<!-- /.dropdown -->--}}
        {{--</ul>--}}
        {{--<!-- /.navbar-top-links -->--}}

        {{--<div class="navbar-default sidebar" role="navigation">--}}
            {{--<div class="sidebar-nav navbar-collapse">--}}
                {{--<ul class="nav" id="side-menu">--}}

                    {{--<li>--}}
                        {{--<a href="/707-gz-admin/all-orders"><i class="fa fa-shopping-cart fa-fw"></i> Order</a>--}}
                        {{--<a href="/707-gz-admin/all-items"><i class="fa fa-list-alt fa-fw"></i> Items</a>--}}
                    {{--</li>--}}
                {{--</ul>--}}
            {{--</div>--}}
            {{--<!-- /.sidebar-collapse -->--}}
        {{--</div>--}}
        {{--<!-- /.navbar-static-side -->--}}
    {{--</nav>--}}





        <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Travel cart admin | Dashboard</title>
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
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{ URL::asset('admin/dist/css/skins/_all-skins.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/iCheck/flat/blue.css') }}">
    <!-- Morris chart -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/morris/morris.css') }}">
    <!-- jvectormap -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css') }}">
    <!-- Date Picker -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/datepicker/datepicker3.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/daterangepicker/daterangepicker.css') }}">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="{{ URL::asset('admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>TC</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>Travel cart</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">

                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <span class="hidden-xs">Welcome <b>{{ $user->name }}</b></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <p>
                                    {{ $user->name }}
                                    <small>Admin since {{ Carbon\Carbon::parse($user->created_at)->toFormattedDateString() }}</small>
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">

                                </div>
                                <div class="pull-right">
                                    <a href="/my-travel-admin-101/logout" class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <li class="active">
                    <a href="#">
                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>


                <li>
                    <a href="#">
                        <i class="fa fa-calendar"></i> <span>Places</span>
                        <span class="pull-right-container">
                          <small class="label pull-right bg-red">3</small>
                          <small class="label pull-right bg-blue">17</small>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-envelope"></i> <span>Tours</span>
                        <span class="pull-right-container">
                          <small class="label pull-right bg-yellow">12</small>
                          <small class="label pull-right bg-green">16</small>
                          <small class="label pull-right bg-red">5</small>
                        </span>
                    </a>
                </li>
                <li class="header">LABELS</li>
                <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

<?php

namespace App\Http\Controllers\Admin;

use App\Libraries\Helper;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AdminController extends Controller
{
    private $helper;
    private $request;

    /**
     * @param Helper $helper
     * @param Request $request
     */
    public function __construct(Helper $helper, Request $request)
    {
        $this->helper = $helper;
        $this->request = $request;

        $user = $this->getLoggedUserDetails();
        View::share('user', $user);
    }

    /**
     * Load login
     *
     * @return View
     */
    public function getLogin()
    {
        if ($this->request->session()->has('logged-admin-user')) {
            return redirect()->action('Admin\AdminController@getDashBoard');
        }
        return view('admin.login');
    }

    /**
     * Logout and redirect to login
     */
    public function getLogout()
    {
        if ($this->request->session()->has('logged-admin-user')) {
            $this->request->session()->forget('logged-admin-user');
            $this->request->session()->save();
        }
        return redirect()->action('Admin\AdminController@getLogin');
    }

    /**
     * Get logged user details
     *
     * @return \Illuminate\Http\RedirectResponse|mixed
     */
    private function getLoggedUserDetails()
    {
        return $sessionData = $this->request->session()->get('logged-admin-user');

        /*if ($this->request->session()->has('logged-admin-user')) {
            //return $sessionData = $this->request->session()->get('logged-admin-user');
        } else {*/
            return redirect()->action('Admin\AdminController@getLogin');
        //}
    }

    /**
     * Validate login
     *
     * @return $this
     */
    public function postLogin()
    {
        $data = Input::only('email', 'password');
        $email = trim($data['email']);
        $password = sha1($data['password']);

        try {

            $user = DB::table('trn_admin_users')->where('email', $email)->first();
            if (isset($user->password)) {
                if ($password == $user->password) {
                    $this->request->session()->put('logged-admin-user', $user);
                    $this->request->session()->save();
                    return $this->helper
                        ->response(200, ['message' => 'Success.']);
                }
                return $this->helper
                    ->response(202, ['message' => 'Wrong password. Please try again.']);
            }
            return $this->helper
                ->response(202, ['message' => 'Invalid email.']);
        }
        catch(\Exception $e){
            return $this->helper
                ->response(400, ['message' => $e->getMessage()]);
        }
    }

    /**
     * Load dashboard
     *
     * @return View
     */
    public function getDashBoard()
    {
        return view('admin.dashboard');
    }

    public function getHome()
    {
        return view('admin.home');
    }




}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminLoginValidator
{
    private $request;

    /**
     * @param Request $request
     */
    public function __construct(Request $request) {
        $this->request = $request;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->request->session()->has('logged-admin-user')) {
            return $next($request);
        } else {
            return redirect()->action('Admin/AdminController@getLogin');
        }
    }
}

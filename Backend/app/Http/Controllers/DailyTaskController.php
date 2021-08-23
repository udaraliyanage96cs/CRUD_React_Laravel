<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dailytask;

class DailyTaskController extends Controller
{
    public function index()
    {
        return Dailytask::all();
    }
 
    public function show($id)
    {
        return Dailytask::find($id);
    }

    public function store(Request $request)
    {
        return Dailytask::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $article = Dailytask::findOrFail($id);
        $article->update($request->all());

        return $article;
    }

    public function delete(Request $request, $id)
    {
        $article = Dailytask::findOrFail($id);
        $article->delete();

        return 204;
    }
}

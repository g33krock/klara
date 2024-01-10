<?php

namespace App\Http\Controllers;
use App\Models\Video;

use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
{
    $videos = Video::all();

    return view('videos.index', ['videos' => $videos]);
}

public function show($id)
{
    // Logic to fetch and return a single video by id
    // return view('videos.show', compact('video'));
}

}

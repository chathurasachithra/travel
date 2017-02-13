<?php

namespace App\Repositories\v1;

use App\Repositories\Contracts\v1\JobsRepositoryInterface;
use App\Models\JobsModel;
 
class JobsRepository implements JobsRepositoryInterface
{
    private $jobs;

    /**
     * JobsRepository constructor.
     * @param JobsModel $jobs
     */
    public function __construct(JobsModel $jobs)
    {
        $this->jobs = $jobs;
    }
    
    /**
     * @description Save details
     *
     * @param $data
     *
     * @return bool|int
     */
    public function create($data)
    {
        return $this->jobs->create($data);
    }
    
    /**
     * @description Update details
     *
     * @param $data
     * @param $id
     *
     * @return bool|int
     */
    public function update($data, $id)
    {
        return  $query = $this->jobs->where('id', $id)
                    ->update($data);
    }
    
    /**
     * @description Delete record
     *
     * @param $id
     *
     * @return bool|int
     */
    public function delete($id)
    {
        return $this->jobs->find($id)->delete();
    }
    
    /**
     * @description Get details of single item
     *
     * @param $id
     * @param $columns
     *
     * @return array
     */
    public function find($id, $columns = ['*'])
    {
        return $this->jobs->find($id, $columns);
    }
}
